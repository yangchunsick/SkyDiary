<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- font-awesome cdn -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer"/>
        <!-- style -->
        <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/header.css">
        <title>SkyDiary</title>
    </head>
    <body>

        <header>
            <nav class="menu">
                <ul class="menu_list">
                    <!-- HOME -->
                    <li class="btn" id="board_btn">
                        <a href="">
                            <i class="fas fa-home"></i>
                        </a>
                    </li>
                    <!-- INSERT -->
                    <li class="btn" id="insert_btn">
                        <a href="">
                            <i class="far fa-plus-square"></i>
                        </a>
                    </li>
                    <!-- MYHOME -->
                    <li class="btn" id="home_btn">
                        <a href="">
                            <i class="fas fa-user-alt"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        
    </body>
</html>