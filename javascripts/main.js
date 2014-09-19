if ($("h2").length == 0){
    $("#side-nav-toc").css({
        display: "none",
        visibility: "hidden"
    });
    console.log("Hide TOC");
}

$("h2").each(function(index, heading){
    var $el = $(heading);
    if($el.attr('id')){
        $("#side-nav-toc ul").append("<li><a href='#"+$el.attr('id')+"'>"+$el.text()+"</a></li>");
    }

});
