//첫번쨰 공지사항(.open-modal) 클릭->모달창이 짱 등장

$(".open-modal").click(function(){
    // $(".modal").css("display", "block")
    $(".modal").show();
})
//닫기 클릭->모달창 사라지기
$(".close-modal").click(function(){
    //$(".modal").css("display", "none")
    $(".modal").hide();
})
//갤러리 버튼 클릭-> 갤러리 짠 등장, 공지사항 사라짐
$(".btn-gal").click(function(){
    $(".gal").show();
    $(".notice").hide();

    $(".btn-gal").css("background-color", "brown")
    $(".btn-notice").css("background-color", "#cccccc")
})
//공지사항 버튼 틀릭-> 공지사항 짠 등장, 갤러리 사라짐
$(".btn-notice").click(function(){
    $(".notice").show();
    $(".gal").hide();

    $(".btn-gal").css("background-color", "#cccccc")
    $(".btn-notice").css("background-color", "brown")
})
//메인메뉴 안 li에 마우스 올리면, 서브메뉴가 짠 등장
$(".gnb>li").mouseenter(function(){
    $(this).children(".sub").stop().slideDown();
})
//
$(".gnb>li").mouseleave(function(){
    $(this).children(".sub").stop().slideUp();
})