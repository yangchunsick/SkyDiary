$(document).ready(function(){
    fnIdCehck();
    fnPwCehck();
    fnPw2Check();
    fnNameCehck();
    fnEmailCehck();
    fnLastAllCheck();    
});

// 아이디 정규식
let regId = /^[a-zA-Z0-9_-]{4,12}$/;
// 비밀번호 정규식
let regPw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;
// 이름 정규식
let regName = /^[a-zA-Z가-힣]{1,30}$/;
// 이메일 정규식
let regEmail = /^[0-9a-zA-Z-_]+@[a-zA-Z0-9]+([.][a-zA-Z]{2,}){1,2}/;

let id_result = false; 
let pw_result = false;
let name_result = false;
let email_result = false;
let auth_result = false;

function fnIdCehck(){
    $('#id').on('blur', function(){
        // 정규식 검사
        if($('#id').val() == ''){
            $('.id_false').css('display', 'block');
            $('.id_check').css('display', 'none');
            $('#id_msg').text('필수 정보 입니다.');
            id_result = false;
            return;
        }else if(regId.test($(this).val()) == false){
            $('.id_false').css('display', 'block');
            $('.id_check').css('display', 'none');
            $('#id_msg').text('아이디는 4 ~ 12자의 영문 소문자, 숫자만 사용 가능합니다.');
            id_result = false;
            return;
        }else{
            $('.id_false').css('display', 'none');
            $('.id_check').css('display', 'block');
            $('#id_msg').text('');
            id_result = true;
        }
        // 아이디 중복확인
        $.ajax({
            url: 'idCheck',
            type: 'post',
            data: 'id=' + $(this).val(),
            dataType: 'json',
            success: function(map){
                if(map.result == null){
                    $('.id_false').css('display', 'none');
                    $('.id_check').css('display', 'block');
                    $('#id_msg').text('');
                    id_result = true;
                }else{
                    $('.id_false').css('display', 'block');
                    $('.id_check').css('display', 'none');
                    $('#id_msg').text('사용 중인 아이디입니다.');
                    id_result = false;
                    return;
                }
            },
            error: function(){
                alert('알 수 없는 오류(!)');
            }
        });
    })
}

function fnPwCehck(){
    $('#pw').on('blur', function(){
        // 정규식 검사
        if($('#pw').val() == ''){
            $('.pw_false').css('display', 'block');
            $('.pw_check').css('display', 'none');
            $('#pw_msg').text('필수 정보 입니다.');
            pw_result = false;
            return;
        }else if(regPw.test($(this).val()) == false){
            $('.pw_false').css('display', 'block');
            $('.pw_check').css('display', 'none');
            $('#pw_msg').text('비밀번호는 영문 대/소문자, 숫자, 특수문자를 조합해야 합니다.');
            pw_result = false;
            return;
        }else{
            $('.pw_false').css('display', 'none');
            $('.pw_check').css('display', 'block');
            $('#pw_msg').text('');
            pw_result = true;
        }
    })
}

function fnPw2Check(){
    $('#pw2').on('blur', function(){
        if($('#pw').val() != $('#pw2').val()){
            $('.pw2_false').css('display', 'block');
            $('.pw2_check').css('display', 'none');
            $('#pw2_msg').text('비밀번호를 확인 해주세요.');
            pw2_result = false;
            return;    
        }else{
            $('.pw2_false').css('display', 'none');
            $('.pw2_check').css('display', 'block');
            $('#pw2_msg').text('');
            pw2_result = true;
        }
    })
}

function fnNameCehck(){
    $('#name').on('blur', function(){
        if($('#name').val() == ''){
            $('.name_false').css('display', 'block');
            $('.name_check').css('display', 'none');
            $('#name_msg').text('필수정보 입니다.');
            name_result = false;
            return;                
        }else if(regName.test($(this).val()) == false){
            $('.name_false').css('display', 'block');
            $('.name_check').css('display', 'none');
            $('#name_msg').text('이름이 올바르지 않습니다.');
            name_result = false;
            return;                                    
        }else{
            $('.name_false').css('display', 'none');
            $('.name_check').css('display', 'block');
            $('#name_msg').text('');
            name_result = true;
        }
    })
}

function fnEmailCehck(){
    $('#email').on('blur', function(){
        if($('#email').val() == ''){
            console.log("기재한 이메일 정보 : " + $('#email').val());
            $('.email_false').css('display', 'block');
            $('.email_check').css('display', 'none');
            $('#email_msg').text('필수정보 입니다.');
            email_result = false;
            return;                  
        }else if(regEmail.test($(this).val()) == false){
            $('.email_false').css('display', 'block');
            $('.email_check').css('display', 'none');
            $('#email_msg').text('이메일 형식이 올바르지 않습니다.');
            email_result = false;
            return;      
        }else{
            $('.email_false').css('display', 'none');
            $('.email_check').css('display', 'block');
            $('#email_msg').text('');
        }
        // 이메일 중복 확인
        $.ajax({
            url: 'emailCheck',
            type: 'post',
            data: 'email=' + $('#email').val(),
            dataType: 'json',
            success: function(map){
                if(map.result == null){
                    $('.email_false').css('display', 'none');
                    $('.email_check').css('display', 'block');
                    $('#email_msg').text('');
                    email_result = true;
                }else if(map.result.email == $('#email').val()){
                    $('.email_false').css('display', 'block');
                    $('.email_check').css('display', 'none');
                    $('#email_msg').text('동일한 이메일이 존재 합니다.');
           			email_result = false;
           			return;
                }
            },
            error: function(){
                alert("알 수 없는 오류(!)");
                email_result = false;
            }
        });// EmailCheck_AJAX
    });
    $('#authCodeSend_btn').on('click', function(){
        if($('#email').val() == ''){
            $('.email_false').css('display', 'block');
            $('.email_check').css('display', 'none');
            $('#email_msg').text('필수정보 입니다.');
            email_result = false;
            return;
        }else if(email_result == false){
            $('.email_false').css('display', 'block');
            $('.email_check').css('display', 'none');
            alert("이메일을 확인 해주세요.");
            $('#email_msg').text('이메일을 확인 해주세요.');
            return;
        }else if(email_result == true){
            $.ajax({
                url: 'sendAuthCode',
                type: 'post',
                data: 'email=' + $('#email').val(),
                dataType: 'json',
                success: function(map){
                    console.log("발급 받은 인증 코드 : " + map.authCode);
                    alert("인증 코드 발급 완료(!)");
                    fnVerifyAuthCode(map.authCode);
                    $(".auth_box").css('display', 'block');
                },
                error: function(){
                    alert("알 수 없는 오류(!)");
                    $(".auth_box").css('display', 'none');
                }
            });// AuthCode_AJAX
        }
    });
}

function fnVerifyAuthCode(authCode){
    $('#authCodeCheck_btn').click(function(){
        console.log("원하는 인증 번호 : " + authCode);
        if($('#authCode').val() == authCode){
            $('.auth_false').css('display', 'none');
            $('.auth_check').css('display', 'block');
            alert("이메일 인증 완료(!)");
            $('#auth_msg').text('');
            auth_result = true;
        }else{
            $('.auth_false').css('display', 'block');
            $('.auth_check').css('display', 'none');
            $('#auth_msg').text('인증번호를 다시 확인 해주세요.');
            auth_result = false;
            return;
        }
    });
}

function fnLastAllCheck(){
    $('#join_form').on('submit', function(event){
        if(id_result == false){
            event.preventDefault();
            alert('아이디를 확인 해주세요.');
            return false;
        }else if(pw_result == false){
            event.preventDefault();
            alert('비밀번호를 확인 해주세요.');
            return false;
        }else if(pw2_result == false){
            event.preventDefault();
            alert('비밀번호를 확인 해주세요.');
            return false;
        }else if(name_result == false){
            event.preventDefault();
            alert('이름을 확인 해주세요.');
            return false;
        }else if(auth_result == false){
            event.preventDefault();
            alert('이메일 인증을 받아주세요.');
            return false;
        }
        return true;
    });
}