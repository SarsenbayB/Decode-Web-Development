<?php
    $db_host = 'localhost';
    $db_user = 'root';
    $db_password = 'root';
    $db_db = 'auth_db';

    $mysqli = @new mysqli(
        $db_host,
        $db_user,
        $db_password,
        $db_db
    );

    if(!$mysqli) {
        echo 'Error: ' . $mysqli -> connect_error;
    }

    // echo 'Success: A proper connection to MySQL was made.';
    // echo '<br>';
    // echo 'Host information: '.$mysqli->host_info;
    // echo '<br>';
    // echo 'Protocol version: '.$mysqli->protocol_version;