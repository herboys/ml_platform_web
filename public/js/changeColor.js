$(function() {

    $("#header .header-right .span1").on("click", function() {
        var isShow = $(this).find(".arrow").hasClass("arrow-down");
        if (!isShow) {
            $("#palette").show().addClass("bounceIn");
            $(this).find(".arrow").addClass("arrow-down").removeClass("arrow-up");
            if (chooseTheme.index) {
                $("#palette .flex .check").removeClass("checked");
                var i = chooseTheme.index - 1;
                $("#palette .flex").eq(i).find(".check").addClass("checked");
            }

        } else {
            $("#palette").hide().removeClass("bounceIn");
            $(this).find(".arrow").removeClass("arrow-down").addClass("arrow-up");
        }
    })

    $(".cannel-btn").on("click", function() {
        $("#palette").hide();
        $("#header .header-right .span1").find(".arrow").removeClass("arrow-down").addClass("arrow-up");
        chooseTheme = JSON.parse(localStorage.getItem('themeRobot'));
        less.modifyVars(chooseTheme);
    })


    $(".success-btn").on("click", function() {
        $("#palette").hide();
        $("#header .header-right .span1").find(".arrow").removeClass("arrow-down").addClass("arrow-up");
        localStorage.setItem('themeRobot', JSON.stringify(chooseTheme));

    })


    $("#palette .flex").on("click", function() {
        $("#palette .flex .check").removeClass("checked");
        $(this).find(".check").addClass("checked");
    })

    $("#palette .flex1,#palette .flex2").on("click", function() {
        $("#palette .content2 i,#palette .content3 i").css({
            cursor: 'not-allowed'
        })
    })

    $("#palette .flex1").click(function() {
        // chooseTheme = {...themeConfig.dark
        // };

        chooseTheme = JSON.parse(JSON.stringify(themeConfig.dark))

        less.modifyVars(JSON.parse(JSON.stringify(chooseTheme)));
    })

    $("#palette .flex2").click(function() {
        // chooseTheme = {...themeConfig.white
        // };
        chooseTheme = JSON.parse(JSON.stringify(themeConfig.white))
        less.modifyVars(JSON.parse(JSON.stringify(chooseTheme)));
    });





})