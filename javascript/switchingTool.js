var idToToolRule = {brushButton: "brush"}
$(document).on("click",".toolbarButton", function () {
    tool = idToToolRule[$(this).attr("id")]
})