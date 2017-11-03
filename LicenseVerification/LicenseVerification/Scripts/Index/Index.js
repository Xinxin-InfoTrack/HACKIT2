function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imageShow')
                .attr('src', e.target.result);

            $('#imageData').val(e.target.result);
        };


        $('#resultPage').hide();
        reader.readAsDataURL(input.files[0]);
    }
}

$(function () {
    

    //var firstName1 = $("#firstName1").value();
    //var firstName2 = $("#firstName2").value();
    //var firstDob = $("#firstDob").value();
    //var firstLicense = $("#firstLicense").value();



 

     
    $('#firstAnalyse').click(function () {
        $('.loader').show();

        var firstImageData = {
            FirstName: $("#firstName1").val(),
            LastName: $("#firstName2").val(),
            Birthday: $("#firstDob").val(),
            License: $("#firstLicense").val()
        }

        $.ajax({
            url: "/Home/AnalyseImage1",
            type: "post",
            data: JSON.stringify(firstImageData),
            processData: false,
            contentType: "application/json",
            success: function (result) {
                $('#nameMatch').removeClass();
                $('#birthMatch').removeClass();
                $('#matchResult').removeClass();
                $('#nameMatch').addClass(result.NameMatch ? 'matchSuccess' : 'matchFail');
                $('#birthMatch').addClass(result.BirthdayMatch ? 'matchSuccess' : 'matchFail');
                $('#licenseMatch').addClass(result.LicenseMatch ? 'matchSuccess' : 'matchFail');
                if (result.NameMatch && result.BirthdayMatch && result.LicenseMatch) {
                    $('#matchResult').addClass('SuccessResult');
                } else {
                    $('#matchResult').addClass('FailResult');
                }

                $("#googleAnalyseResult1").val(result.GoogleAnylyseResult);

                setTimeout(function () {
                    $('.loader').hide();
                    $('#resultPage').show();
                }, 1000);
            },
            complete: function () {
            }
        });
         
    });

    $('#firstBetterAnalyse').click(function () {
        $('.loader').show();

        var firstImageData = {
            FirstName: $("#firstName1").val(),
            LastName: $("#firstName2").val(),
            Birthday: $("#firstDob").val(),
            License: $("#firstLicense").val()
        }

        $.ajax({
            url: "/Home/BetterAnalyseImage1",
            type: "post",
            data: JSON.stringify(firstImageData),
            processData: false,
            contentType: "application/json",
            success: function (result) {
                $('#nameMatch').removeClass();
                $('#birthMatch').removeClass();
                $('#matchResult').removeClass();
                $('#nameMatch').addClass(result.NameMatch ? 'matchSuccess' : 'matchFail');
                $('#birthMatch').addClass(result.BirthdayMatch ? 'matchSuccess' : 'matchFail');
                $('#licenseMatch').addClass(result.LicenseMatch ? 'matchSuccess' : 'matchFail');
                if (result.NameMatch && result.BirthdayMatch && result.LicenseMatch) {
                    $('#matchResult').addClass('SuccessResult');
                } else {
                    $('#matchResult').addClass('FailResult');
                }

                $("#googleAnalyseResult1better").val(result.GoogleAnylyseResult);

                setTimeout(function () {
                    $('.loader').hide();
                    $('#resultPage').show();
                }, 1000);
            },
            complete: function () {
            }
        });

    });

     



    $('#secondAnalyse').click(function () {
        $('.loader').show(); 

        var secondImageData = {
            FirstName: $("#secondName1").val(),
            LastName: $("#secondName2").val(),
            Birthday: $("#secondDob").val(),
            License: $("#secondLicense").val()
        }
 
            $.ajax({
                url: "/Home/AnalyseImage2",
                type: "post",
                data: JSON.stringify(secondImageData),
                processData: false,
                contentType: "application/json",
                success: function (result) {
                    $('#nameMatch2').removeClass();
                    $('#birthMatch2').removeClass();
                    $('#matchResult2').removeClass();
                    $('#nameMatch2').addClass(result.NameMatch ? 'matchSuccess' : 'matchFail');
                    $('#birthMatch2').addClass(result.BirthdayMatch ? 'matchSuccess' : 'matchFail');
                    $('#licenseMatch2').addClass(result.LicenseMatch ? 'matchSuccess' : 'matchFail');
                    if (result.NameMatch && result.BirthdayMatch && result.LicenseMatch) {
                        $('#matchResult2').addClass('SuccessResult');
                    } else {
                        $('#matchResult2').addClass('FailResult');
                    }

                    $("#googleAnalyseResult2").val(result.GoogleAnylyseResult);
                    setTimeout(function () {
                        $('.loader').hide();
                        $('#resultPage2').show();
                    }, 1000);
                },
                complete: function () {
                }
            });  
    });

    $('#secondBetterAnalyse').click(function () {
        $('.loader').show();

        var secondImageData = {
            FirstName: $("#secondName1").val(),
            LastName: $("#secondName2").val(),
            Birthday: $("#secondDob").val(),
            License: $("#secondLicense").val()
        }

        $.ajax({
            url: "/Home/BetterAnalyseImage2",
            type: "post",
            data: JSON.stringify(secondImageData),
            processData: false,
            contentType: "application/json",
            success: function (result) {
                $('#nameMatch2').removeClass();
                $('#birthMatch2').removeClass();
                $('#matchResult2').removeClass();
                $('#nameMatch2').addClass(result.NameMatch ? 'matchSuccess' : 'matchFail');
                $('#birthMatch2').addClass(result.BirthdayMatch ? 'matchSuccess' : 'matchFail');
                $('#licenseMatch2').addClass(result.LicenseMatch ? 'matchSuccess' : 'matchFail');
                if (result.NameMatch && result.BirthdayMatch && result.LicenseMatch) {
                    $('#matchResult2').addClass('SuccessResult');
                } else {
                    $('#matchResult2').addClass('FailResult');
                }

                $("#googleAnalyseResult2better").val(result.GoogleAnylyseResult);

                setTimeout(function () {
                    $('.loader').hide();
                    $('#resultPage2').show();
                }, 1000);
            },
            complete: function () {
            }
        });
    });

    

});