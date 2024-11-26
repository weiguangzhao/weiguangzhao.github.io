var fontColor = 'black';

$("#bio").show();
$("#pub").show();
$("#pat").show();
$("#ser").show();
$("#pro").show();


$("#homeButton").click(function () {
    $("#bio").show();
    $("#pub").show();
    $("#pat").show();
    $("#ser").show();
    $("#pro").show();
});

$("#bioButton").click(function () {
    $("#bio").show();
    $("#pub").hide();
    $("#pat").hide();
    $("#ser").hide();
    $("#pro").hide();
});

$("#pubButton").click(function () {
    $("#bio").hide();
    $("#pub").show();
    $("#pat").hide();
    $("#ser").hide();
    $("#pro").hide();
});

$("#patButton").click(function () {
    $("#bio").hide();
    $("#pub").hide();
    $("#pat").show();
    $("#ser").hide();
    $("#pro").hide();
});

$("#serButton").click(function () {
    $("#bio").hide();
    $("#pub").hide();
    $("#pat").hide();
    $("#ser").show();
    $("#pro").hide();
});

$("#proButton").click(function () {
    $("#bio").hide();
    $("#pub").hide();
    $("#pat").hide();
    $("#ser").hide();
    $("#pro").show();
});





$("div#menu > ul li").mouseover(function () {
    $(this).animate({
        color: fontColor,
        margin: '0 0 0 0px'
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