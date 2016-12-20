/**
 * Created by Administrator on 2015/7/18.
 */
$(document).ready(function(){

    //导航
    $(".header_bottom li").on("mouseenter",function(){
        $(this).find("dl").show();
    });
    $(".header_bottom li").on("mouseleave",function(){
        $(this).find("dl").hide();
    });

    //置顶
    $('.up').click(function() {
        $('html,body').animate({
                scrollTop: '0px'
            },
            800);
    });

    //大事记
    $('label').click(function(){
        $('.event_year>li').removeClass('current');
        $(this).parent('li').addClass('current');
        var year = $(this).attr('for');
        $('#'+year).parent().prevAll('div').slideUp(800);
        $('#'+year).parent().slideDown(800).nextAll('div').slideDown(800);
    });
	
	//加入我们
	$(".dl_l dd").on('click',function(){
	   $(this).addClass("dd_on").siblings().removeClass("dd_on");
	   $(".j_all .hiring").eq($(this).index()).show().siblings().hide();
	});



});

