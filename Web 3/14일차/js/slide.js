$(document).ready(function(){
    $(".btn>li").each(function(num){
        $(this).attr({
            "data-num": num
        });
    });

    $(".btn>li").click(function(){
        var i = $(this).attr("data-num");
        console.log(i);
        
        // img slide
        $(".img_wrap").animate({
            left: -800 * i
        });
        
        //.btn>li addClass
        $(".btn>li").removeClass("btn_active");
        $(".btn>li").eq(i).addClass("btn_active");

        //text>li addClass
        $(".text>li").removeClass("text_active");
        $(".text>li").eq(i).addClass("text_active");
        
    });
}); //end