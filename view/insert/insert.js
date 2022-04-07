$(document).ready(function(){
    
});

/*
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            document
                .getElementById('previewImg')
                .src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
        $('.img_box').css('display', 'block');
        $('.upload_icon').css('display', 'none');

    } else {
        document
            .getElementById('previewImg')
            .src = "";
    }
}
*/
// 이미지 및 비디오 확장자 및 크기  체크
function fnFileCheck(){
		
    $("#img_upload").on('change',function(){
        let origin = $(this).val();      // 첨부된 파일명
        let extName = origin.substring(origin.lastIndexOf(".")+1 ).toUpperCase();     // 확장자 대문자로 저장 
        
        // 확장자 정보
        if( $.inArray(extName, ["JPG", "PNG", "JPEG", "GIF","MP4", "MPEG", "AVI", "MOV", "M4V", "JFIF"])  == -1 )  {  // 첨부된 파일이 ["JPG", "PNG", "JPEC", "GIF"] 중 하나가 아니면
            alert('업로드 할 수 없는 확장자입니다.');
            return;
       }
        
        // 파일크기점검
        let maxSize = 1024 * 1024 * 1000;   		   // 최대크기 10MB
        let fileSize = $(this)[0].files[0].size;       // 첨부된 파일 크기
        if ( fileSize > maxSize ){
            alert('1GB 이하의 파일만 업로드가 가능합니다.');
            $(this).val('');
            return;
        }
    });
}

function readURL(input) {
    if (input.files && input.files[0]) {
        let image = ["JPG", "PNG", "JPEG", "GIF","JFIF"];
        let video = ["MP4", "MPEG", "AVI", "MOV", "M4V"];
        var reader = new FileReader();
        reader.onload = function(e) {
            if(image.includes(input.files[0].name.split('.').pop().toUpperCase())){
            document.getElementById('previewImg').src = e.target.result;
            $("#previewImg").css('display', 'block');
            $("#previewVideo").css('display', 'none');
            }
             else if (video.includes(input.files[0].name.split('.').pop().toUpperCase())){
                 document.getElementById('previewVideo').src = e.target.result;
                    $("#previewVideo").css('display', 'block');
                    $("#previewImg").css('display', 'none');
             }
        };
            reader.readAsDataURL(input.files[0]);
            $('.img_box').css('display', 'block');
            $('.upload_icon').css('display', 'none');
    } else {
        document.getElementById('preview').src = "";
    }
}