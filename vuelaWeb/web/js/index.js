

var anime = ["boku", "anitore_xx", "bishouj_yuugi_unit_crane_game_girls_galaxy", "brave_witches", "hibike_euphonium", "kiitarou_shounen_no_youkai_enikki", "mahou_shoujo_nante_mou_ii_desukara_2nd_season", "nazotokine", "teekyuu_8", "yuri_on_ice"];

function mostrar(y) {
    $(document).ready(function () {
        $("#image"+y).css({"-webkit-filter": "grayscale(100%)"});
        $("#text" + y).show();
        $("#text" + y).css({"transition-property": "font-size", "transition-duration": "2s", " transition-delay": "1s", "font-size": "36px", "color": "white"});
    });
}

function imagenes() {
    var x = 0;
    $(document).ready(function () {
        for (var y = 1; y <= 8; y++) {
            $("#text" + y).css({"transition-property": "font-size"});
            $("#image" + y).attr('style', 'background-image:url("' + "img/" + anime[x] + ".jpg" + '") !important');

            x += 1;
        }
    });
}

function invisible() {
    $(document).ready(function () {
        for (var y = 0; y <= 8; y++) {
            $("#text" + y).css({"font-size": "20px"});
            $("#text" + y).hide();
            $("#image"+y).css({"-webkit-filter": "grayscale(0%)"});

        }

    });
}
$(document).ready(function () {
    for (var y = 1; y <= 8; y++) {
        $("#text" + y).hide();


    }


});
imagenes();
setInterval("tamaño()", 500);

function tamaño() {
//    alert( $("body").width());
    

    if (105 <= $("body").width() && 566 >= $("body").width()) {
        for (var y = 1; y <= 4; y++) {
            $("#tamaño" + y).removeClass("col-sm3");
            $("#tamaño" + y).removeClass("col-xs-3");
            $("#tamaño" + y).removeClass("col-xs-4");
            $("#tamaño" + y).removeClass("col-xs-6");
            $("#tamaño" + y).removeClass("col-xs-12");
            $("#tamaño" + y).removeClass(" col-sm-3");
            $("#tamaño" + y).removeClass(" col-sm-4");
            $("#tamaño" + y).addClass("col-xs-12");
        }
    }
    if (567 <= $("body").width() && 990 >= $("body").width()) {
        for (var y = 1; y <= 4; y++) {
            $("#tamaño" + y).removeClass("col-sm3");
            $("#tamaño" + y).removeClass("col-xs-3");
            $("#tamaño" + y).removeClass("col-xs-4");
            $("#tamaño" + y).removeClass("col-xs-6");
            $("#tamaño" + y).removeClass("col-xs-12");
            $("#tamaño" + y).removeClass(" col-sm-3");
            $("#tamaño" + y).removeClass(" col-sm-4");
            $("#tamaño" + y).addClass("col-xs-6");
            $("#tamaño" + y).addClass("col-sm4");
        }
    }
    if (991 <= $("body").width() && 1190 >= $("body").width()) {
        for (var y = 1; y <= 4; y++) {
            $("#tamaño" + y).removeClass("col-sm3");
            $("#tamaño" + y).removeClass("col-xs-3");
            $("#tamaño" + y).removeClass("col-xs-4");
            $("#tamaño" + y).removeClass("col-xs-6");
            $("#tamaño" + y).removeClass("col-xs-12");
            $("#tamaño" + y).removeClass(" col-sm-3");
            $("#tamaño" + y).removeClass(" col-sm-4");
            $("#tamaño" + y).addClass("col-sm3");
            $("#tamaño" + y).addClass("col-xs-3");
        }
    }
}
function mensage() {
    swal("MENSAGE ENVIADO", "sd", "success");
}


