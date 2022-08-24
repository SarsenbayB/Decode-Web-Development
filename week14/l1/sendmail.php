<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpMailer/src/Exception.php';
    require 'phpMailer/src/PHPMailer.php';

    $mail = new PHPMailer();
    $mail -> CharSet = 'UTF-8';
    $mail -> setLanguage('ru', 'phpMailer/language');
    $mail -> isHTML(true);

    $mail -> setFrom('asil_zhan.kz@mail.ru', 'Assyl');
    $mail -> addAddress('thisisassylzhanizbassar@gmail.com');

    $mail -> Subject = 'Простое письмо!';

    $gender = 'male';

    if($_POST['gender'] == 'female') {
        $gender = 'female';
    }

    $body = '<h1>Тестовое письмо.</h1>';

    $body .= '<p>'.$_POST['message'].'</p>';

    if(!empty($_FILES['image']['tmp_name'])) {
        $filePath = __DIR__ . "files/". $_FILES['image']['tmp_name'];

        if(copy($_FILES['image']['tmp_name'], $filePath)) {
            $fileAttach = $filePath;
            $body .= '<p>Фото в приложениях.</p>';
            $mail -> addAttachment($fileAttach);
        }
    }

    $mail -> Body = $body;

    // Отправка данных
    if(!$mail -> send()) {
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены.';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');

    echo json_encode($response);
?>