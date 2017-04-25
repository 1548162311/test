$(function() {
    var timeoutId;
    var isLogin = false;
    $("#login").click(function() {
        $('html').css('background', 'green');
        $("#s_lg_img").attr('src', "img/loginbaidu.png");
        $("#qrcode").css('display', 'none');
        $("#lh").css('display', 'none');
        $("#qrcode").css('display', 'none');
        $("#cp").css('display', 'none');
        $("#jp").css('display', 'none');
        $(".loginMode").css("display", "block");
        isLogin = true;

    });

    $("#tabfirst li").each(function(index) {
        var that = this;
        $(this).click(function() {
            $("div .tabContent").removeClass("tabContent");
            $("#tabfirst li.tabin").removeClass("tabin");
            $(".tabBody div").eq(index).addClass("tabContent");
            $(that).addClass("tabin");


        })
    })

    $("#brimore").mouseover(function() {

        if (isLogin) {
            $("#more").css({
                "background-color": "#fff",
                "color": "#000"
            })

            $("#moreChice").css("display", "block");
        }
    }).mouseout(function() {
        if (isLogin) {
            $("#more").css({
                "background-color": "#38f",
                "color": "#fff"
            })
            $("#moreChice").css("display", "none");
        }

    });

    $("#wrapperdiv").scroll(function(){
    	console.log("srcoll");
    })

})
