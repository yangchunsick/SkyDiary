<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<!-- font-awesome cdn -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<!-- CSS -->
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/board.css">
</head>
<body>
	<jsp:include page="/WEB-INF/views/layout/header.jsp" flush="true" />

        <section>
            <div class="user_profile_box">
                <span class="user_profile">
                    <img src="/images/루피_군침이 싹_도노...png">
                </span>
                <span class="user_id"> ${loginUser.name} </span>
                
            </div>
            
            <div class="content_box">

                <div class="img-box">
                    <img alt="" src="/images/루피_군침이 싹_도노...png">
                </div>

                <div class="icon_box">
                    <a href=""><i class="fa-solid fa-heart"></i></a>
                    <a href=""><i class="fa-solid fa-comment"></i></a>
                </div>

                <span class="like_count">좋아요 0개</span>

                <div class="content">
                    <span id="user_name"> ${loginUser.name} </span>
                    <span id="board_content"> 군침이 싹 도는 루피..! </span>
                </div>
                
                <div class="reply_box">
                    <span id="reply"><a href="">댓글 보기</a></span>
                </div>
            </div> 
        </section>

</body>
</html>