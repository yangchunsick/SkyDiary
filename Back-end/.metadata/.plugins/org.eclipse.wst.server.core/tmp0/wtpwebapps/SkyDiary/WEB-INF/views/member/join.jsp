<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />    <link rel="stylesheet" href="join.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/join.css">
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/join.js"></script>
    <title>회원가입</title>
</head>
<body>

    <section class="main_box">
        <h1 class="title"><a href="">SkyDiary</a></h1>
    
        <h1></h1>

        <div class="form_box">

            <form id="join_form" action="join" method="post">

                <!-- 로그인 -->
                <div class="input_box">
                    <label for="id">아이디</label>
                    <input type="text" id="id" name="id" placeholder="아이디">
                    <span class="icon">
                        <i class="fa-solid fa-check id_check"></i>
                        <i class="fa-solid fa-exclamation id_false"></i>
                    </span>
                    <span id="id_msg" class="msg"></span>
                </div>

                <!-- 비밀번호 -->
                <div class="input_box">
                    <label for="pw">비밀번호</label>
                    <input type="password" id="pw" name="pw" placeholder="비밀번호">
                    <span class="icon">
                        <i class="fa-solid fa-check pw_check"></i>
                        <i class="fa-solid fa-exclamation pw_false"></i>                
                    </span>
                    <span id="pw_msg" class="msg"></span>
                </div>

                <!-- 비밀번호 확인 -->
                <div class="input_box">
                    <label for="pw2">비밀번호 확인</label>
                    <input type="password" id="pw2" placeholder="비밀번호 확인">
                    <span class="icon">
                        <i class="fa-solid fa-check pw2_check"></i>
                        <i class="fa-solid fa-exclamation pw2_false"></i>
                    </span>
                    <span id="pw2_msg" class="msg"></span>
                </div>

                <!-- 이름 -->
                <div class="input_box" >
                    <label for="name">이름</label>
                    <input type="text" id="name" name="name" placeholder="이름">
                    <span class="icon">
                        <i class="fa-solid fa-check name_check"></i>
                        <i class="fa-solid fa-exclamation name_false"></i>
                    </span>
                    <span id="name_msg" class="msg"></span>
                </div>

                <!-- 이메일 -->
                <div class="input_box email_box" >
                    <label for="email">이메일 확인</label>
                    <input type="text" id="email" name="email" placeholder="이메일">
                    <span class="icon email_icon">
                        <i class="fa-solid fa-check email_check"></i>
                        <i class="fa-solid fa-exclamation email_false"></i>
                    </span>
                    <input type="button" class="btn" id="authCodeSend_btn" value="전송">
                    <span id="email_msg" class="msg"></span>
                </div>

                <!-- 인정번호 확인 박스 -->
                <div class="input_box auth_box">
                    <label for="authCode"></label>
                    <input type="text" id="authCode" placeholder="인증번호">
                    <span class="icon auth_icon">
                        <i class="fa-solid fa-check auth_check"></i>
                        <i class="fa-solid fa-exclamation auth_false"></i>
                    </span>
                    <input type="button" class="btn" id="authCodeCheck_btn" value="인증">
                    <span id="auth_msg" class="msg"></span>
                </div>

                <input type="submit" class="btn join" id="join_btn" value="회원가입">

            </form>
        </div>
    </section>
</body>
</html>