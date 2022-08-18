<?php
    session_start();
    require_once('core/connect.php');

    if($_SESSION['user']) {
        header('Location: profile.php');
    }

    $posts = $mysqli -> query("SELECT `posts`.id, `author_id`, `title`, `content`, `createdAt`, `full_name`, `email` FROM `posts`
                                INNER JOIN `users`
                                ON `posts`.author_id = `users`.id");
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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
    <!-- Block -->
    <div class="content">
        <!-- Block -->
        <div class="container">
            <!-- Element of Block 'content' -->
            <div>

                <header class="header d-flex justify-content-between">
                    <div class="header__logo">
                        <h1>Decode Blog</h1>
                    </div>
                    <div class="header__search input-group flex-sm-row">
                        <input type="text" class="form-control">
                        <div class="input-group-append">
                            <button class="btn btn-outline-primary" type="button">Найти</button>
                        </div>
                    </div>

                    <div class="header__btns d-flex">
                        <a href="registor.php" class="btn btn-primary" type="button">Регистрация</a>
                        <a href="auth.php" class="btn btn-primary ml-1" type="button">Вход</a>
                    </div>
                </header>


                <section class="posts-line">
                    <?php while($row = $posts -> fetch_assoc()):?>
                        <div class="posts-line__title">
                            <h2><?= $row['title'] ?></h2>
                        </div>
                        <div class="posts-line__content">
                            <p> <?= $row['content'] ?> </p>
                        </div>
                        <div class="posts-line__meta d-flex justify-content-between">
                            <div class="posts-line__item d-inline-flex">
                                <i class="fa fa-calendar mr-1"></i>
                                <p> <?= $row['createdAt'] ?> </p>
                            </div>
                            <div class="posts-line__item d-inline-flex">
                                <i class="fa fa-eye mr-1"></i>
                                <p>4</p>
                            </div>
                            <div class="posts-line__item d-inline-flex">
                                <i class="fa fa-comments mr-1"></i>
                                <p>12</p>
                            </div>
                            <div class="posts-line__item d-inline-flex">
                                <i class="fa fa-comment mr-1"></i>
                                <p> Веб-разработка </p>
                            </div>
                            <div class="posts-line__item d-inline-flex">
                                <i class="fa fa-user mr-1"></i>
                                <p> <?= $row['email'] ?> </p>
                            </div>
                        </div>
                    <?php endwhile; ?>
                </section>

            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
</body>
</html>