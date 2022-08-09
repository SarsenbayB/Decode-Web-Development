<?php
    session_start();
    require_once 'connect.php';

    $login = $_POST['login'];
    $password = md5($_POST['password']);

    $isUserExist = mysqli_query($mysqli,
        "SELECT `full_name`, `login`, `email`, `password` FROM `users` 
        WHERE `login`='$login' AND `password`='$password'
    ");

    if(mysqli_num_rows($isUserExist) > 0) {
        $user = mysqli_fetch_assoc($isUserExist);

        $_SESSION['user'] = [
            "full_name" => $user['full_name'],
            "login" => $user['login']
        ];

        header('Location: ../profile.php');
    } else {
        $_SESSION['message'] = "Не верный логин или пароль!";
        header('Location: ../index.php');
    }