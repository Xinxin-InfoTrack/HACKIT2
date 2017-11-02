﻿function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imageShow')
                .attr('src', e.target.result);
        };


        $('#resultPage').hide();
        reader.readAsDataURL(input.files[0]);
    }
}

$(function () {
    
    $('form').submit(function (event) {

        event.preventDefault();

        if ($(this).valid()) {
            var formdata = new FormData($(this).get(0));

            $.ajax({
                url: this.action,
                type: this.method,
                data: formdata,
                processData: false,
                contentType: false,
                success: function (result) {
                    $('#nameMatch').removeClass();
                    $('#birthMatch').removeClass();
                    $('#matchResult').removeClass();
                    $('#nameMatch').addClass(result.NameMatch ? 'matchSuccess' : 'matchFail');
                    $('#birthMatch').addClass(result.BirthdayMatch ? 'matchSuccess' : 'matchFail');
                    if (result.NameMatch && result.BirthdayMatch) {
                        $('#matchResult').addClass('SuccessResult');
                    } else {
                        $('#matchResult').addClass('FailResult');
                    }
                    $('#resultPage').show();
                },
                complete: function () {
                }
            });
        }
        return false;
    });

});