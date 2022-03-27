    $(document).ready(function(){
        fnIdCheck();
        fnPwCheck();
    })

	// 아이디 정규식
	let regId = /^[a-zA-Z0-9_-]{4,12}$/;
	// 비밀번호 정규식
	let regPw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;

    let id_result = false;
    let pw_result = false;

    /*아이디 정규식*/
    function fnIdCheck(){
        $('#id').on('blur', function(){
            if($('#id').val() == ''){
             alert('아이디를 입력 해주세요.');
             id_result = false;
             return;   
            }else{
                $.ajax({
                    url:,
                    type:,
                    data:,
                    dataType:,
                    success: function(){
                        /*
                            동일한 아이디가 없을 경우
                            존재하지 않은 아이디 입니다.
                        */
                    },
                    error: function(){

                    }
                }) /* ID AJAX */
            }
        });
    }

    /*비밀번호 정규식*/
    function fnPwCheck(){
        $('#pw').on('blur', function(){
            if($('#pw').val() == ''){
             alert('비밀번호를 입력 해주세요.');
             pw_result = false;
             return;   
            }else{
                $.ajax({
                    url:,
                    type:,
                    data:,
                    dataType:,
                    success: function(){
                        /*
                            비밀번호가 틀렸을 때
                            비밀번호가 일치 하지 않습니다.

                        */
                    },
                    error: function(){

                    }
                }) /* PW AJAX */
            }
        });
    }