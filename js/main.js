//search-list	搜索功能，显示隐藏，选中
$("body").click(function(){
	var _search = $(".search-list");
	if(!_search.hasClass("search-statu")){
		_search.addClass("search-statu");
	}
});
$(".search-text").click(function(){
	$(".search-list").removeClass("search-statu");
	return false;
});
$(".search-list-item").click(function(){
	var _val = $(this).find("span").text();
	$(".search-text").val( _val );
});
/* nav-box 导航区域 */
var timer = null;
$(".sublist-show").hover(function(){
	clearTimeout( timer );
	var _index = $(this).index();
	$(".sublist-box").show();
	$(".sublist-box").animate({ height : "230px"},200).find("li").eq(_index-1).show().siblings().hide();
},function(){
	navHide();
});
$(".sublist-box li").hover(function(){
	clearTimeout(timer);
},function(){
	navHide();
});
function navHide(){
	timer = setTimeout(function(){
		$(".sublist-box").animate({ height : "0px" },200,function(){$(".sublist-box").hide();});
	},100);
}
/* banner-slide 轮播区域 */
var _index = 0;
var bannerTimer = null;
$(".slide-point a").click(function(){
	_index = $(this).index();
	slideBanner();
});
$(".slide-next").click(function(){
	_index ++ ;
	_index > 5 ? _index = 0 : _index;
	slideBanner();
});
$(".slide-prev").click(function(){
	_index -- ;
	_index < 0 ? _index = 5 : _index;
	slideBanner();
});
function slideBanner(){
	$(".slide-point a").eq(_index).addClass("curr-point").siblings().removeClass("curr-point");
	$(".slide-box .slider-item").eq(_index).fadeIn().siblings().fadeOut();
}
/* 定时器自动轮播 */
function slideBannerAuto(){
	bannerTimer = setInterval(function(){
		_index ++ ;
		_index > 5 ? _index = 0 : _index;
		slideBanner();
	},2000);
}
slideBannerAuto();
$(".banner-slide").hover(function(){
	clearInterval(bannerTimer);
},function(){
	slideBannerAuto();
});
/* side-category 二级导航区域 */
$(".sub-item").hover(function(){
	$(this).find(".left-sub-list").show();
},function(){
	$(this).find(".left-sub-list").hide();
});
/* 函数封装实现商品区域列表图片轮播切换 */
var _indexmore = 0;
function common(obj,point,objClass,item,index){
	$(obj).click(function(){
		index = $(this).index();
		$(point).eq(index).addClass(objClass).siblings().removeClass(objClass);
		$(item).eq(index).fadeIn().siblings().fadeOut();
	});
}
common("#point1 a","#point1 a","curr-point","#box1 .slider-film",_indexmore);
common("#point2 a","#point2 a","curr-point","#box2 .slider-film",_indexmore);
common("#point3 a","#point3 a","curr-point","#box3 .slider-film",_indexmore);
common("#point4 a","#point4 a","curr-point","#box4 .slider-film",_indexmore);
common("#point5 a","#point5 a","curr-point","#box5 .slider-film",_indexmore);
common("#point6 a","#point6 a","curr-point","#box6 .slider-film",_indexmore);
common("#point7 a","#point7 a","curr-point","#box7 .slider-film",_indexmore);
common("#point8 a","#point8 a","curr-point","#box8 .slider-film",_indexmore);




