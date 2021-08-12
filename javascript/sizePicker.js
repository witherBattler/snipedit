let chosenSize = 5

function toggleSizePicker() {
    if($("#sizePicker").attr("class") == "sizePickerUnopened" && $("#colorPicker").attr("class") == "colorPickerUnopened"){
        $("#sizePicker").removeClass("sizePickerUnopened")
        $("#sizePicker").addClass("sizePickerOpened")
        updateSizeIndicator();
    }else{
        $("#sizePicker").removeClass("sizePickerOpened")
        $("#sizePicker").addClass("sizePickerUnopened")
    }
}

function submitSize() {
    size = chosenSize
    $("#pickSizeButton").html(size)
    toggleSizePicker()
}

function updateSizeIndicator() {
    $("#sizeIndicator").html(document.getElementById("sizeInput").value)
    chosenSize = parseInt(document.getElementById("sizeInput").value)
}

$(document).on("input", "#sizeInput", function() {
    updateSizeIndicator()
});
