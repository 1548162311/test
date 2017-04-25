$(function() {
    console.log("js");
    $("#list").click(function() {
        $("#fat").removeClass("curr");
        $("#list").addClass("curr");
        $("#lesson").addClass("lesson-list").removeClass("lesson-list2");
        $("#zhongji1").css("display", "none");
      	$(".timeandicon  .learn-number").css('display', 'none');
      	$(".lesson-list2 .lesson-infor p").css({"display":"none","height":"0px"})
    });


    $("#fat").click(function() {
        $("#list").removeClass("curr");
        $("#fat").addClass("curr");
        $("#lesson").addClass("lesson-list2").removeClass("lesson-list");
        $(".timeandicon dl dd").css("display", "block");
        $(".timeandicon  .learn-number").css('display', 'block');
        $(".lesson-list2 .lesson-infor p").css({"display":"block","height":"36px"})
    })


})
