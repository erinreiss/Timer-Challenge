var time = 0;
var myInterval;
var fontsize = 12;

$(".image").hide()

$('#stop').prop('disabled', true);
$('#reset').prop('disabled', true);

$("#start").click(function(){
    $(".instructions").text("OMG!!");
    $(".instructions2").text("Now stop this timer!!!:");
    $('#stop').prop('disabled', false);
$('#reset').prop('disabled', false);
    myInterval = setInterval(function(){
        time = time + 1;
        $(".clock").text(time);
    }, 1);
});

 $("#stop").click(function(){
       fontsize = fontsize * 2;
       $(".message").text("uh-oh");
       $(".message").css("font-size", fontsize * 2 + "px");
    // $(".message").css("color", red);
});


$("#reset").click(function(){
    time = 0;
   $(".clock").text(time);
   clearInterval(myInterval);
   $(".clock").text(time);
// $(".message").css("font-size", 17 + "px");
   $(".instructions").text("I never actually programmed a stop function -");
   $(".instructions2").text("Nice problem solving!");
   $(".clock").text("");
   $(".message").text("");
   $('#start').prop('disabled', true);
   $('#stop').prop('disabled', true);
   $('#reset').prop('disabled', true);
//  $(".image").show()
   alert ("You Win!");
   myInterval = setInterval(function(){
       $(".instructions").text("Hi!");
       $(".instructions2").text("Start this timer:");
       $(".clock").text("0");
       $('#start').prop('disabled', false);
       $('#stop').prop('disabled', true);
       $('#reset').prop('disabled', true);
//     $(".image").hide()
   },6500);
});