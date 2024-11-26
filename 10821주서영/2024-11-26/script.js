//메인메뉴 안에있는 li태그에 마우스를 올렸을 때, 서브메뉴 등장~
$(".main-menu>li").mouseenter(function () {
  $(this).children(".sub-menu").show();
})

//메인메뉴 안에있는 li태그에 마우스가 떠낫을 때(.mouseleave), 서브메뉴 사라짐( .hide() )~
$(".main-menu>li").mouseleave(function () {
  $(this).children(".sub-menu").hide();
})

$(".gallery").hide();

$(".btn-gallery").click(function(){
    $(".gallery").show();
    $(".news").hide();
})

$(".btn-news").click(function(){
    $(".news").show();
    $(".gallery").hide();
})

$(".open-modal").click(function(){
    $(".modal").show();
})

$(".close-modal").click(function(){
    $(".modal").hide();
})
$(".modal2").hide();

$(".open-modal2").click(function(){
    $(".modal2").show();
})

$(".close-modal2").click(function(){
    $(".modal2").hide();
})