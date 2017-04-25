$(function() {
    var timeoutId;
    var isLogin = false;
   
    $("#login").click(function() {
      Singletons.getInstance('html','background','green');
      Singletons.getInstance('#s_lg_img','src','img/loginbaidu.png');

      Singletons.getInstance('#lh','display','none');
      Singletons.getInstance('#qrcode','display','none');

      //单例模式主要是避免重复创建对象,在我认为我用的最多的还是网络请求的时候
      //但是我这个作业由于对js不熟悉还不知道js在哪种场合应用和如何使用单例模式 
    //在此作业中 我认为单例模式并不合适 我还是创建了很多对象




        // $("#s_lg_img").attr('src', "img/loginbaidu.png");
        // $("#qrcode").css('display', 'none');
        // $("#lh").css('display', 'none');
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
var Singletons=(function(){

    function Singleton(name,attr,value){
        $(name).css(attr,value);
        // this.name=name;
        // this.attr=attr;
        // this.value=value;
        // create();
    }
   
    var instance;
    return{
        getInstance:function(name,attr,value){
            if(instance===undefined){
                instance=new Singleton(name,attr,value);
            }
            return instance;
        }
    }


})();

// Singletons.prototype={
//     create:function(){
//             var this_=this;
//             $( this.name=name).css(this.attr,this.value);
//     }
// }