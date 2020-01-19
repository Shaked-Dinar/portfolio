function readMore(parameter) {
    var num = parameter[0];
    if (parameter.includes('open')) {
        $("#readMoreBtn").attr("onclick", "readMore('"+num+"close')");
        $("#project"+num+" .readMore").css("display", "block");
        $("#readMoreBtn").html("Read Less");
      }
    else {
        $("#readMoreBtn").attr("onclick", "readMore('" + num + "open')");
        $("#project" + num + " .readMore").css("display", "none");
        $("#readMoreBtn").html("Read More")
    }
}

function showHide(parameter) {
    if (parameter == 'show') {
        $("#show").attr("onclick", "showHide('hide')");
        $(".wireframes").css("display", "block");
        $("#show").html("Hide Wireframes")
      //  $(".wireframes")[0].scrollIntoView({ block: 'start', behavior: 'smooth' });

    } else {
        $("#show").attr("onclick", "showHide('show')");
        $(".wireframes").css("display", "none");
        $("#show").html("Show Wireframes")
        $("#show").scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
}
