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
    <title>Auth</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Block -->
    <div class="content">
        <!-- Block -->
        <div class="container">
            <!-- Element of Block 'content' -->
            <div class="content__inner">

                <form class="form" action="core/signup.php" method="post">
                    <div class="form__header">
                        <h2 class="form__header-title">Регистрация</h2>
                    </div>
                    <div class="form__content">
                        <div class="form__item">
                            <label for="full_name">ФИО</label>
                            <input id="full_name" name="full_name" type="text" placeholder="Введите свое ФИО">
                        </div>
                        <div class="form__item">
                            <label for="login">Login</label>
                            <input id="login" name="login" type="email" placeholder="Введите свой login">
                        </div>
                        <div class="form__item">
                            <label for="email">Email</label>
                            <input id="email" name="email" type="email" placeholder="Введите свой email">
                        </div>
                        <div class="form__item">
                            <label for="password">Password</label>
                            <input id="password" name="password" type="password" placeholder="Введите свой пароль">
                        </div>
                        <div class="form__item">
                            <label for="password-confirm">Confirm password</label>
                            <input id="password-confirm" name="password_confirm" type="password" placeholder="Повторите свой пароль">
                        </div>
                        <button class="form__btn" type="submit">Регистрация</button>

                        <?php
                            if($_SESSION['message']) {
                                echo '<p class="form__msg">'. $_SESSION['message']. '</p>';
                            }
                            unset($_SESSION['message']);
                        ?>

                        <p class="form__auth">У вас уже есть аккаунт? - <a href="index.php">Авторизуйтесь</a></p>
                    </div>
                </form>

            </div>
        </div>
    </div>
</body>
</html>