var fontColor = 'black';

$("#pat").hide();
$("#pub").hide();
$("#exp").hide();
$("#pro").hide();
$("#awa").hide();


$("#aboutButton").click(function () {
    $("#about").show("slow");
    $("#pub").hide("slow");
    $("#exp").hide("slow");
    $("#awa").hide("slow");
    $("#pro").hide("slow");
    $("#pat").hide("slow");
});
$("#pubButton").click(function () {
    $("#about").hide("slow");
    $("#exp").hide("slow");
    $("#pro").hide("slow");
    $("#awa").hide("slow");
    $("#pub").show("slow");
    $("#pat").hide("slow");
});
$("#expButton").click(function () {
    $("#about").hide("slow");
    $("#pub").hide("slow");
    $("#exp").show("slow");
    $("#awa").hide("slow");
    $("#pro").hide("slow");
    $("#pat").hide("slow");
});
$("#proButton").click(function () {
    $("#about").hide("slow");
    $("#pub").hide("slow");
    $("#exp").hide("slow");
    $("#pro").show("slow");
    $("#awa").hide("slow");
    $("#pat").hide("slow");
});

$("#awaButton").click(function () {
    $("#about").hide("slow");
    $("#pub").hide("slow");
    $("#exp").hide("slow");
    $("#pro").hide("slow");
    $("#awa").show("slow");
    $("#pat").hide("slow");
});


$("#patButton").click(function () {
    $("#about").hide("slow");
    $("#pub").hide("slow");
    $("#exp").hide("slow");
    $("#pro").hide("slow");
    $("#pat").show("slow");
    $("#awa").hide("slow");
});

$("div#menu > ul li").mouseover(function () {
    $(this).animate({
        color: fontColor,
        margin: '0 0 20 0px'
    }, 200)
}).mouseout(function () {
    $(this).animate({
        color: fontColor,
        margin: '0'
    }, 200)
});
$("h1").mouseover(function () {
    $(this).animate({
        color: '#1C8FE1'
        // color: '#972'
    }, 200)
}).mouseout(function () {
    $(this).animate({
        color: fontColor
    }, 200)
});