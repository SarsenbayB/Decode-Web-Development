<?php
    session_start();

    if(!$_SESSION['user']) {
        header('Location: index.php');
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

                <div class="profile">
                    <div class="profile__inner">
                        <?php
                            echo '<p>'. $_SESSION['user']['full_name'] . '</p>';   
                            echo '<p>'. $_SESSION['user']['login'] . '</p>';   
                        ?>
                        <a class="profile__logout" href="core/logout.php">Выйти</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</body>
</html>