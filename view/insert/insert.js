$(document).ready(function(){
    
});

function previewFile() {
    var preview = document.querySelector('img');
    var file = document
        .querySelector('input[type=file]')
        .files[0];
    var reader = new FileReader();

    reader.addEventListener("load", function () {
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
        $("#img_box").css('display', 'block');
        $("#upload_icon").css('display', 'none');
    }
}

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