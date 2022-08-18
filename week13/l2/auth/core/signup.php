<?php

    session_start();
    require_once 'connect.php';

    $full_name = $_POST['full_name'];
    $login = $_POST['login'];
    $email = $_POST['email'];
    $password = md5($_POST['password']);
    $confirm = md5($_POST['password_confirm']);

    if($password === $confirm) {
        // send user to database
        mysqli_query($mysqli, "INSERT INTO `users`(`full_name`, `login`, `email`, `password`) VALUES
        (
            '$full_name',
            '$login',
            '$email',
            '$password'
        )");
        $_SESSION['message'] = 'Регистрация успешно прошла!';
        header('Location: ../index.php');
    } else {
        $_SESSION['message'] = 'Пароли не совпадают!';
        header('Location: ../registor.php');
    }