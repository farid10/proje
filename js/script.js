$(".loadMore").click(function(){
	$(".myHidden").css("display","block")
	$(".loadMore").css("display","none")
});
$(".loadMore1").click(function(){
	$(".myHidden1").css("display","block")
	$(".loadMore1").css("display","none")
});


//plugin 

$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
    loop:true,
    // margin:10,
    nav:true,
    autoHeight:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        765:{
            items:4,
            nav:true
        }
        
    }
})
})


// $("#receive input").focus(function(){
// 	$("#receive input::placeholder").css("color","red")
// })
// $("#receive input").blur(function(){
// 	$("#receive input[placeholder]").css("background","blue")
// })

// $('#receive input').blur(function()
// {
//   if( !this.value ) {
//             $(this).parents('p').addClass('warning');
//       }
// });
$('#receive input').blur(function()
{
    if( $(this).val().trim() == 'a' ) {
          $(this).css("background","red");
    }
});




var clickk = false;
$(".inputClick").focusin(function(z) {
    clickk = true;
    var input = $('.inputClick').val();
    $('.inputLabel').css({ "top": "5px" });






// responsiveMenu
$(".menuRes").click(function() {
    var widthNav = $(".navBarLeft").width();
    $(".j").toggleClass("menuResButton");
    if ($(".j").hasClass("menuResButton")) {
        $(".navBarLeft").css({ "left": "0" });
        $(".navUpRes").css({ "left": widthNav });
    } else {
        $(".navBarLeft").css({ "left": "" });
        $(".navUpRes").css({ "left": "" });
    }
})

$(".inputClick").focusout(function(e) {

    var input = $('.inputClick').val();

    if (input == '' && e.target.closest('.r')) {
        $('.errorMessage').css({ "display": "block" });
        $('.inputLabel').css({ "top": "" });
        $('.submit').css({ "background": "#e4e4e4" });
    }
    //console.log(e.target.parent());


})