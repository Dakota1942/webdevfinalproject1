$(document).ready(function(){
    $('.nick').hide();
    $('.simon').hide();
    $('.john').hide();
    $('.roger').hide();
});

$('#photo1').mouseover(function(){
    $('#bio1').show();
});
$('#photo1').mouseout(function(){
    $('#bio1').hide();
});

$('#photo2').mouseover(function(){
    $('#bio2').show();
});
$('#photo2').mouseout(function(){
    $('#bio2').hide();
});

$('#photo3').mouseover(function(){
    $('#bio3').show();
});
$('#photo3').mouseout(function(){
    $('#bio3').hide();
});

$('#photo4').mouseover(function(){
    $('#bio4').show();
});
$('#photo4').mouseout(function(){
    $('#bio4').hide();
});