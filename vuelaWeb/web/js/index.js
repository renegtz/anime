



function mostrar() {
    $(document).ready(function () {
        $("#para").show();
        $("#para").css({"transition-property": "font-size", "transition-duration": "2s", " transition-delay": "1s", "font-size": "26px"});
    });
}

function invisible() {
    $(document).ready(function () {
        $("#para").css({"font-size": "20px"});
        $("#para").hide();
    });
}
$(document).ready(function () {
    $("#para").hide();
});
function mensage() {
    swal("MENSAGE ENVIADO", "sd", "success");
}
