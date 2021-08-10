let chosenColor = "black"
function toggleColorPicker() {
    if($("#colorPicker").attr("class") == "colorPickerUnopened"){
        $("#colorPicker").removeClass("colorPickerUnopened")
        $("#colorPicker").addClass("colorPickerOpened")
    }else{
        $("#colorPicker").removeClass("colorPickerOpened")
        $("#colorPicker").addClass("colorPickerUnopened")
    }
}

$(document).on("click",".colorButton", function () {
    chosenColor = $(this).css("background-color")
    $(".selected").first().removeClass("selected")
    $(this).addClass("selected")
    
});
