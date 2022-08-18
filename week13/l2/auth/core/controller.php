<?php

    /* 
    C - create (insert into table values (...));
    R - read (select * from table)
    U - update (update table set () where id=x)
    D - delete (delete table where id=x)
    */ 

    require_once('connect.php');

    $id = -1;
    $title = '';
    $content = '';
    $createdAt = '';
    $updated = false;

    if(isset($_POST['create'])) {
        
        $response = $mysqli -> query("SELECT id FROM `posts` ORDER BY id DESC LIMIT 1");
        $data = $response -> fetch_array();
        
        $tmpID = $data['id'] + 1;

        $author_id = $_POST['author_id'];
        $title = $_POST['title'];
        $category = $_POST['category'];
        $content = $_POST['content'];
        $createdAt = $_POST['createdAt'];

        $mysqli -> query("INSERT INTO `posts`(`author_id`, `title`, `content`, `createdAt`) VALUES ('$author_id','$title','$content','$createdAt')");
        $mysqli -> query("INSERT INTO `post_category`(`postId`, `categoryId`) VALUES ('$tmpID','$category')");
        
        header('Location: ../profile.php');
    }

    if(isset($_POST['update'])) {
        $id = $_POST['id'];
        $author_id = $_POST['author_id'];
        $title = $_POST['title'];
        $content = $_POST['content'];
        $createdAt = $_POST['createdAt'];

        $mysqli -> query("UPDATE `posts` SET `author_id`='$author_id',`title`='$title',`content`='$content',`createdAt`='$createdAt' WHERE `id`='$id'");
        
        header('Location: ../profile.php');
    }

    if(isset($_GET['delete'])) {
        $id = $_GET['delete'];

        $mysqli -> query("DELETE FROM `posts` WHERE id='$id'");

        header('Location: .');
    }

    if(isset($_GET['edit'])) {
        $id = $_GET['edit'];

        $response = $mysqli -> query("SELECT * FROM `posts` WHERE `id`='$id'");
        
        if(mysqli_num_rows($response) > 0) {
            $data = $response -> fetch_array();

            $id = $data['id'];
            $title = $data['title'];
            $content = $data['content'];

            $tz = 'Asia/Almaty';
            $timestamp = time();
            $dt = new DateTime("now", new DateTimeZone($tz)); //first argument "must" be a string
            $dt->setTimestamp($timestamp); //adjust the object to correct timestamp

            $createdAt = $dt->format('Y-m-d H:i');

            $updated = true;
        }
    }