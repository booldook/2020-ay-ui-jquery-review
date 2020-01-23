/*
## 접근자 - $("객체명")
index(), eq(), sibling(),
## 이벤트
scroll, keypress, keyup
on(), off(), one(), trigger(), delegate(), undelegate(), live(), die()
## Animation
1. animate({css}, 속도, easing, cb)
5. delay(), clearQueue()
## DOM
1. 생성
append(), appendTo(), prepend(), prependTo(), clone(), html(), text(), insertAfter(), insertBefore(), after(), before(), wrapAll(),
2. 삭제
empty(), remove()
3. 반복: each()
## css관련
1. hasClass();
## 속성관련
1. attr("src"), attr("src", "./img/a.jpg"), data(), prop()
*/

$(window).resize(onResize).trigger("resize");
$(".navi").mouseenter(onSubShow);	//메인네비에 마우스 올렸을때 서브 나타나기
$(".navi").mouseleave(onSubHide);	//메인네비에 마우스 올렸을때 서브 사라지기
$(".navi-mobile").click(onMobileSubToggle);	//모바일에서 햄버거 클릭시...
$(".sub-mobile").find(".title").click(onMobileListToggle);

function onMobileListToggle() {
	//$(this).parent().find(".fa")
	/*
	if($(this).next().is(":visible")) {
		$(this).find(".fa-angle-down").css({"transform": "rotate(0)"});
	}
	else {
		$(this).find(".fa-angle-down").css({"transform": "rotate(-180deg)"});
	}
	*/
	$(this).find(".fa-angle-down").toggleClass("down");
	$(this).next().stop().slideToggle(300);
}

function onMobileSubToggle() {
	$(".sub-mobile").stop().fadeToggle(300, function(){
		if(!$(this).is(":visible")) initMobileSub();
	});
}

function onSubShow() {
	$(this).find(".sub-wrap").stop().fadeIn(300);
}

function onSubHide() {
	$(this).find(".sub-wrap").stop().fadeOut(300);
}

function onResize() {
	var wid = $(window).outerWidth();
	initMobileSub();
	if(wid <= 768) {

	}
	if(wid <= 576) {
		
	}
}

function initMobileSub() {
	$(".sub-mobile").hide();
	$(".sub-wrap").hide();
	$(".subs").find(".fa-angle-down").removeClass("down");
}