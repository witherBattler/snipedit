let chosenColor = "white"
function toggleColorPicker() {
    if($("#colorPicker").attr("class") == "colorPickerUnopened"){
        $("#colorPicker").removeClass("colorPickerUnopened")
        $("#colorPicker").addClass("colorPickerOpened")
    }else{
        $("#colorPicker").removeClass("colorPickerOpened")
        $("#colorPicker").addClass("colorPickerUnopened")
    }
}

function submitColor() {
    color = chosenColor
    toggleColorPicker()
    $("#pickColorButton").css("background-color", chosenColor)
}

$(document).on("click",".colorButton", function () {
    chosenColor = $(this).css("background-color")
    $(".selected").first().removeClass("selected")
    $(this).addClass("selected")
    $("#colorPickerDone").css("background-color", chosenColor)
    if(chosenColor == "rgb(0, 0, 0)" || chosenColor == "rgb(47, 79, 79)" || chosenColor == "rgb(83, 0, 128)" || chosenColor == "rgb(6, 8, 140)"){
        $("#colorPickerDone").css("color", "white")
    }else{
        $("#colorPickerDone").css("color", "black")
    }
})


