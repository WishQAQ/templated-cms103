
$(function() {
    //集体调用
    $(".form input").each(function(){
        $(this).setDefauleValue();
    });
    //单个调用
    $("#key").setDefauleValue();
    $("#key2").setDefauleValue();
    $("#key3").setDefauleValue();
})
 
//设置input,textarea默认值
$.fn.setDefauleValue = function() {
    var defauleValue = $(this).val();
    $(this).val(defauleValue).css("color","#b8b8b8");
 
    return this.each(function() {       
        $(this).focus(function() {
            if ($(this).val() == defauleValue) {
                $(this).val("").css("color","#333");//输入值的颜色
            }
        }).blur(function() {
            if ($(this).val() == "") {
                $(this).val(defauleValue).css("color","#b8b8b8");//默认值的颜色
            }
        });
    });
}

$(function(){
	$("#main .mains .mainCen .lie tr:odd").css("background","#f7f7f7")
	$("#main .news ul li:odd").addClass("last")
	$("#main .Data ul li:odd").addClass("last")
	$("#header .nav ul li:first").addClass("home")
	$("#header .nav ul li:last").addClass("last")
	$("#main .join .title2:odd").addClass("title3")
})

/*$(function(){
 $("#bottomB .bottom .bottomR .link .n3:has(span)").hover(function(){
  $(this).children('span').stop(true,true).slideDown(1)
  },function(){
  $(this).children('span').stop(true,true).slideUp(1)
  })
})*/

$(function(){
	$("#header .navs .search:has(.search1)").each(function(index){
		$("#header .navs .search .sh:eq("+index+")").toggle(function(){
		$("#header .navs .search:eq("+index+")").children(".search1").stop(true,true).slideDown(300)
		$("#header .navs .search .sh:eq("+index+")").addClass("hover")
		},function(){
		$("#header .navs .search:eq("+index+")").children(".search1").stop(true,true).slideUp(300)
		$("#header .navs .search .sh:eq("+index+")").removeClass("hover")
		})
	})
})


$(function (){
	$("#header .nav ul li .erji .tab p").each(function(index){//each变例，每一个a标签
		$(this).mouseover(function(){//鼠标滑过a的时候
			$("#header .nav ul li .erji .tabCen").addClass("dis")//给news添加样式dis
			$("#header .nav ul li .erji .tabCen:eq("+index+")").removeClass("dis")//给对应news的index索引值删除dis样式
			$("#header .nav ul li .erji .tab p").removeClass("hover")//先删除所有的a的样式hover
			$(this).addClass("hover")//给对应的a添加样式hover
		})
	})
})


/*导航*/
$(function(){
 $(".nav ul li:has(div)").hover(function(){
  $(this).children("div").stop(true,true).slideDown(300)
  },function(){
  $(this).children("div").stop(true,true).slideUp(1)
  })
})


$(function (){
	$(".nav ul li").each(function(index){
		$(this).mouseover(function(){
			$(".nav ul li").removeClass("hover")//先删除所有的a的样式hover
			$(this).addClass("hover")//给对应的a添加样式hover
		})
		$(this).mouseout(function(){
			$(".nav ul li").removeClass("hover")//先删除所有的a的样式hover
		})
	})
})


$(window).load(function() {
$(".width").width($(window).width());
$(window).resize(function(){
$(".width").width($(window).width());
})

});

$(function(){
	$("#main .join ul li:has(.tabCen)").each(function(index){
		$("#main .join .title2:eq("+index+")").toggle(function(){
		$("#main .join ul li:eq("+index+")").children(".tabCen").stop(true,true).slideDown(500)
		$("#main .join .title2:eq("+index+")").addClass("hover")
		},function(){
		$("#main .join ul li:eq("+index+")").children(".tabCen").stop(true,true).slideUp(500)
		$("#main .join .title2:eq("+index+")").removeClass("hover")
		})
	})
})



/*导航*/
$(function(){
 $(".menu ul li:has(div)").hover(function(){
  $(this).children("div").stop(true,true).slideDown(1)
  },function(){
  $(this).children("div").stop(true,true).slideUp(1)
  })
})


$(function (){
	$(".menu ul li").each(function(index){
		$(this).mouseover(function(){
			$(".menu ul li").removeClass("hover")//先删除所有的a的样式hover
			$(this).addClass("hover")//给对应的a添加样式hover
		})
		$(this).mouseout(function(){
			$(".menu ul li").removeClass("hover")//先删除所有的a的样式hover
		})
	})
})

