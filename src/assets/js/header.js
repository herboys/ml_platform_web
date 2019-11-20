function lineFn(obj) {
    var left = $(obj).position().left;
    var width = $(obj).width();
    $(obj).addClass("active").siblings("li").removeClass("active");
    $("#line").css({
        "left": left + 20,
        "width": width - 40
    })
};


lineFn("#header li.active");

$("#header li").on("click", function(el) {
    var _this = $(this);
    lineFn(_this);
})

$("#header li").on("mouseover", function(el) {
    var _this = $(this);
    var left = _this.position().left;
    var width = _this.width();
    $("#line").css({
        "left": left + 20,
        "width": width - 40
    })
})

$("#header li").on("mouseout", function(el) {
    var left = $("#header .active").position().left;
    var width = $("#header .active").width();
    $("#line").css({
        "left": left + 20,
        "width": width - 40
    })
})


$("#header .userInfo .down").on("click", function() {
    $(".loginInOut").toggleClass("show")
})

// $("#header .userInfo .down").on("mouseover", function() {
//     $(".loginInOut").show()
// })
// var timer;
// $("#header .userInfo .down").on("mouseout", function() {
//     timer = setTimeout(function() {
//         $(".loginInOut").hide()
//     }, 1000)
// })

// $(".loginInOut").on("mouseover", function() {
//     clearTimeout(timer);
//     $(".loginInOut").show()
// })

// $(".loginInOut").on("mouseout", function() {
//     $(".loginInOut").hide()
// })
