var fontColor = 'black';

$("#bio").show();
$("#pub").show();
$("#pat").show();
$("#ser").show();


$("#homeButton").click(function () {
    $("#bio").show();
    $("#pub").show();
    $("#pat").show();
    $("#ser").show();
});

$("#bioButton").click(function () {
    $("#bio").show();
    $("#pub").hide();
    $("#pat").hide();
    $("#ser").hide();
});

$("#pubButton").click(function () {
    $("#bio").hide();
    $("#pub").show();
    $("#pat").hide();
    $("#ser").hide();
});

$("#patButton").click(function () {
    $("#bio").hide();
    $("#pub").hide();
    $("#pat").show();
    $("#ser").hide();
});

$("#serButton").click(function () {
    $("#bio").hide();
    $("#pub").hide();
    $("#pat").hide();
    $("#ser").show();
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