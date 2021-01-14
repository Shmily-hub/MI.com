<?php
    include ('./library/conn.php');

    $phone = $_REQUEST['phone'];
    $password=$_REQUEST['password'];

    $sql="select * from users where phone='$phone' and password='$password'";

    $result = $mysqli->query($sql);

    $mysqli->close();

    if($result->num_rows>0){
        echo '<script>alert("登录成功")</script>';
        echo '<script>location.href="../src/Code/index.html"</script>';
    }else{
        echo '<script>alert("账号或密码错误,请重新登入")</script>';
        echo '<script>location.href="../src/Code/login.html"</script>';
    }
