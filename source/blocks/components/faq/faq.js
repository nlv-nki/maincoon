$(document).ready(function() {


  $(".faq__question").click(function () {
    $(this).toggleClass('faq__active-btn');

    $(this).siblings(".faq__answer").slideToggle("slow");


  });


});
