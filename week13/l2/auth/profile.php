<?php
    session_start();
    require_once('core/connect.php');
    require_once('core/controller.php');

    if(!$_SESSION['user']) {
        header('Location: index.php');
    }
    $userID = $_SESSION['user']['id'];

    $posts = $mysqli -> query("SELECT `posts`.id, `author_id`, `title`, `content`, `createdAt`, `full_name` FROM `posts`
                                INNER JOIN `users`
                                ON `posts`.author_id = `users`.id
                                WHERE `posts`.author_id = '$userID'"); // $userPosts
    $categories = $mysqli -> query("SELECT * FROM `categories`");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BloggerTimes</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Block -->
    <div class="profile">
        <!-- Block -->
        <div class="container">
            <!-- Element of Block 'content' -->
            <div class="profile__inner">

                <header class="profile__header mt-4">
                    <?php
                        echo '<p>'. $_SESSION['user']['full_name'] . '</p>';   
                        echo '<p>'. $_SESSION['user']['login'] . '</p>';   
                    ?>
                    <a class="profile__logout" href="core/logout.php">Выйти</a>
                </div>

                <form class="form mb-5" action="core/controller.php" method="post">
                    <div class="form__inner form__inner_paddings">
                        <input type="hidden" name="id" value="<?= $id ?>">
                        <input type="hidden" name="author_id" value="<?= $_SESSION['user']['id'] ?>">
                        <div class="form-group mb-2">
                            <label for="title">Заголовок: </label>
                            <input id="title" class="form-control" type="text" name="title" value="<?= $title ?>" placeholder="Напишите заголовок.">
                        </div>
                        <div class="form-group mb-2">
                            <label for="content">Пост: </label>
                            <input style="padding-bottom: 100px;" name="content" class="form-control" id="content" value="<?= $content ?>" placeholder="Напишите ваш пост."></input>
                        </div>
                        <div class="form-group mb-2">
                            <label for="category">Категорий: </label>
                            <select name="category" id="category">
                                <?php while($row = $categories -> fetch_assoc()):?>
                                    <option value="<?= $row['id'] ?>"><?= $row['title'] ?></option>
                                <?php endwhile; ?>
                            </select>
                        </div>
                        <div class="form-group mb-2">
                            <label for="createdAt">Дата создание:</label>
                            <input id="createdAt" name="createdAt" class="form-control" value="<?= $createdAt ?>" type="datetime-local">
                        </div>
                        <div class="form-group">
                            <?php if($updated):?>
                                <button class="btn btn-info" type="submit" name="update">Изменить</button>
                            <?php else:?>
                                <button class="btn btn-primary" type="submit" name="create"> Создать</button>
                            <?php endif;?>
                        </div>
                    </div>
                </form>

                <div class="post mb-3">
                    <?php while($row = $posts -> fetch_assoc()):?>
                        
                        <div class="post__title d-flex justify-content-between">
                            <h2><?= $row['title'] ?></h2>
                            <div>
                                <a href="profile.php?delete=<?= $row['id'] ?>" class="btn btn-danger">Delete</a>
                                <a href="profile.php?edit=<?= $row['id'] ?>" class="btn btn-info">Edit</a>
                            </div>
                        </div>

                        <div class="post__content">
                            <p><?= $row['content'] ?></p>
                        </div>

                        <div class="post__author d-flex justify-content-between">
                            <p><?= '<b>'.$row['full_name'].'</b>' ?></p>
                            <p><?= $row['createdAt'] ?></p>
                        </div>
                        
                    <?php endwhile; ?>
                </div>


            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
</body>
</html>