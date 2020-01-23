/*
## 접근자 - $("객체명")
index(), eq(), find(), children(), sibling(), parent(), next(), prev()

## 이벤트
click, mouseover, mouseleave, scroll, resize, keypress, keyup
on(), off(), one(), trigger(), delegate(), undelegate(), live(), die()

## Animation
1. animate({css}, 속도, easing, cb)
2. fadeIn(), fadeOut(), fadeToggle() 
3. hide(), show(), toggle()
4. slideUp(), slideDown(), slideToggle()
5. stop(), delay(), clearQueue()

## DOM
1. 생성
append(), appendTo(), prepend(), prependTo(), clone(), html(), text(), insertAfter(), insertBefore(), after(), before(), wrapAll(),
2. 삭제
empty(), remove()
3. 반복: each()

## css관련
1. addClass(), removeClass(), toggleClass(), hasClass();
2. css("color"), css({"color": "red"}), css("color", "red")
~~~js
var color = $(".box").css("color"); // Getter
$(".box").css({"color": "red"}) // Setter
~~~

## 속성관련
1. attr("src"), attr("src", "./img/a.jpg"), data(), prop()
*/

$(window).resize(onResize).trigger("resize");
$(".navi").mouseenter(onSubShow);	//메인네비에 마우스 올렸을때 서브 나타나기
$(".navi").mouseleave(onSubHide);	//메인네비에 마우스 올렸을때 서브 사라지기
$(".navi-mobile").click(onMobileSubToggle);	//모바일에서 햄버거 클릭시...

function onMobileSubToggle() {
	$(".sub-mobile").stop().fadeToggle(300);
}

function onSubShow() {
	$(this).find(".sub-wrap").stop().fadeIn(300);
}

function onSubHide() {
	$(this).find(".sub-wrap").stop().fadeOut(300);
}

function onResize() {
	
}