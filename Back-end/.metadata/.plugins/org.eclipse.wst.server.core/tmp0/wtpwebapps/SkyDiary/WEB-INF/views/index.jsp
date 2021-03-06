<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/index.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/js/index.js">
    <script src="index.js"></script>
    <title>SkyDiary</title>
</head>
<body>
	
    <section>
         
        <div class="login_box">

            <h1 class="title"><a href="">SkyDiary</a></h1>

            <form action="member/login" method="post">
                <div class="input_box">
                    <label for="id">아이디</label>
                    <input type="text" id="id" name="id" placeholder="ID">
                </div>
                <div class="input_box">
                    <label for="pw">비밀번호</label>
                    <input type="password" id="pw" name="pw" placeholder="PW">
                </div>
                <button>로그인</button>
            </form>

            <span class="join">
                <a href="member/joinForm">회원가입</a><a href="">아이디/비밀번호 찾기</a>
            </span>
        </div>

    </section>
</body>
</html>