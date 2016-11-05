

var anime = ["boku", "anitore_xx", "bishouj_yuugi_unit_crane_game_girls_galaxy", "brave_witches", "hibike_euphonium", "kiitarou_shounen_no_youkai_enikki", "mahou_shoujo_nante_mou_ii_desukara_2nd_season", "nazotokine", "teekyuu_8", "yuri_on_ice"];
var NombreAnime = ["boku no hero academy", "anitore xx", "bishouj yuugi unit crane game girls galaxy", "brave witches", "hibike euphonium", "kiitarou shounen no youkai enikki", "mahou shoujo nante mou ii desukara 2nd season", "nazotokine", "teekyuu 8", "yuri on ice"];
var tamañoAnime=10;

function mostrar(y) {
    $(document).ready(function () {
        $("#image"+y).css({"-webkit-filter": "grayscale(100%)"});
        $("#text" + y).show();
        $("#text" + y).css({"transition-property": "font-size", "transition-duration": "1s", " transition-delay": "1s", "font-size": "41px", "color": "#5dc2f1"});
   $( "#image" ).hide( "Fade", 50, 1000 );
    });
    
  
}

function imagenes() {
    var x = 0;
    $(document).ready(function () {
        for (var y = 1; y <= tamañoAnime; y++) {
            var div1 = $( " <div id='tamaño"+y+"' class='col-xs-6  col-sm-3 ' onmousemove='mostrar("+y+")' onmouseout='invisible()'><div><p  onmousemove='imagecambio("+y+")' id='text"+y+"'>boku no hero academy #12</p>  <div id='image"+y+"' class='image'> </div> </div></div>" );
            
            $( ".row" ).append( div1 );
            $("#text" + y).html(NombreAnime[x]);
            $("#text" + y).css({"transition-property": "font-size"});
            $("#image" + y).attr('style', 'background-image:url("' + "img/" + anime[x] + ".jpg" + '") !important');

            x += 1;
        }
        invisible();
    });
}
function imagecambio(y){
     $(document).ready(function () {
      $("#image" + y).addClass("imagecam");
      
        });
}
function invisible() {
    $(document).ready(function () {
        for (var y = 1; y <= tamañoAnime; y++) {
            $("#text" + y).css({"font-size": "38px"});
            $("#text" + y).hide();
            $("#image"+y).css({"-webkit-filter": "grayscale(0%)","transition-duration": "2s"});
               $("#image" + y).removeClass("imagecam");
        }

    });
}
$(document).ready(function () {
    for (var y = 1; y <= tamañoAnime; y++) {
        $("#text" + y).hide();


    }


});
imagenes();
setInterval("tamaño()", 500);

function tamaño() {
//    alert( $("body").width());
    

    if (105 <= $("body").width() && 566 >= $("body").width()) {
        for (var y = 1; y <= tamañoAnime; y++) {
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
        for (var y = 1; y <= tamañoAnime; y++) {
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
    if (991 <= $("body").width() ) {
        for (var y = 1; y <= tamañoAnime; y++) {
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


