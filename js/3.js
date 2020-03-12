  $(document).ready(function(){   
    $(".main3-box a").hover(function(){
        $(this).find(".main3-login1").stop(true,true).animate({"top":"50px","opacity":"1"},200);
    },function(){
        $(this).find(".main3-login1").stop(true,true).animate({"top":"-109px","opacity":"0"},200);
    });
});