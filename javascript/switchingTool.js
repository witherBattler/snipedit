var idToToolRule = {brushButton: "brush", textButton: "text"}
$(document).on("click",".toolButton", function () {
    $(".toolButton").css("filter", "inverted(0%)")
    $(this).css("filter", "inverted(100%)")
    tool = idToToolRule[$(this).attr("id")]
})


