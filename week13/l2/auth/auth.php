<?php
    session_start();

    if($_SESSION['user']) {
        header('Location: profile.php');
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BloggerTimes</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Block -->
    <div class="content">
        <!-- Block -->
        <div class="container">
            <!-- Element of Block 'content' -->
            <div class="content__inner">

                <form class="form" action="core/login.php" method="post">
                    <div class="form__header">
                        <h2 class="form__header-title">Логин</h2>
                    </div>
                    <div class="form__content">
                        <div class="form__item">
                            <label for="email">Email</label>
                            <input id="email" name="login" type="email" placeholder="Введите свой email">
                        </div>
                        <div class="form__item">
                            <label for="password">Password</label>
                            <input id="password" name="password" type="password" placeholder="Введите свой пароль">
                        </div>
                        <button class="form__btn" type="submit">Войти</button>

                        <?php
                            if($_SESSION['message']) {
                                if(substr($_SESSION['message'], 0, 2) === "Н"){
                                    echo '<p class="form__msg">'. $_SESSION['message']. '</p>';   
                                } else {
                                    echo '<p class="form__msg form__msg_success">'. $_SESSION['message']. '</p>';
                                }
                            }
                            unset($_SESSION['message']);
                        ?>

                        <p class="form__auth">У вас нет аккаунта? - <a href="registor.php">Зарегистрируйтесь</a></p>
                    </div>
                </form>

            </div>
        </div>
    </div>
</body>
</html>