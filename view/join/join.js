$(document).ready(function(){
    fnIdCehck();
    fnPwCehck();
    fnPw2Check();
    fnNameCehck();
    fnEmailCehck();
    fnAuthCodeCehck();
    fnLastCheck();    
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
        }
        $.ajax({
            
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
        }
    })
}

function fnEmailCehck(){
    $('#email').on('blur', function(){
        if($('#email').val() == ''){
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
    });
}

function fnAuthCodeCehck(){
    if($('#authCode').val() == ''){

    }else{
        
    } 
}

function fnLastCheck(){

}