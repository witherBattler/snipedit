let color = "white"
let size = 5
let element = null
let mouseIsOverCanvas = false;
let takingBrushData
let previousPixel
let textPickerOpened = false;
let fonts = {"Arial": "arial", "Impact": "impact", "Verdana": "verdana", "Rockwell": "rockwell", "Arial Black": "arial black", "projekt-blackbird": ""}

function setup() {
    frameRate(60)
}

function getId() {
    previousId++
    return previousId.toString();
}

function setup() {
    var canvas = createCanvas(900, 500)
    canvas.mouseOver(function() {mouseIsOverCanvas = true})
    canvas.mouseOut(function() {mouseIsOverCanvas = false})
    canvas.style("border", "black 1px solid")
    frameRate(60)
}

function openTextPicker() {
    if(!textPickerOpened) {
        toggleTextPicker()
    }
}

function closeTextPicker() {
    if(textPickerOpened) {
        toggleTextPicker()
    }
}



function draw() {
    if(textPickerOpened) {
        if(keyIsDown(32)) { 
            closeTextPicker()
            textFont()
            
        }
    }
    if(pasted) {
        image(initialImage, 0, 0, initialImage.width * coefficientRatio, initialImage.height * coefficientRatio);
        drawElements()
    }
    
}

function keyReleased() {
    if(keyCode == 32 && textPickerOpened) {
        openTextPicker()
    }
}

function mousePressed() {
    if(pasted){
        if(mouseIsOverCanvas) {
            if(element == null) {
                if(tool == "brush") {
                    element = {id: getId(), type: "brush", data: {color: chosenColor, size: chosenSize * 3, pixels: [{x: mouseX, y: mouseY}]}, graphics: null, finishedRendering: false}
                    elementsList.push(element)
                    takingBrushData = setInterval(function() {
                        if(element.type == "brush") {
                            element.data.pixels.push({x: mouseX, y: mouseY})
                            element.data.pixels = [...new Set(element.data.pixels)]
                        }
                    }, 1)
                } else if(tool == "text") {
                    toggleTextPicker();
                    console.log("s")
                }
            }
        }
    }   
}

function mouseReleased() {
    if(pasted){
        if(element != null) {
            if(element.type == "brush") {
                element.graphics = returnGraphicsForElement(element);
                element.finishedRendering = true;
                element = null
            }  
        }
        clearInterval(takingBrushData)
    }
}

function drawElements() {
    for(var i = 0; i != elementsList.length; i++) {
        if(elementsList[i].graphics == null){
            if(elementsList[i].type == "initial image") {
                continue;
            }else if(elementsList[i].type == "brush"){
                fill(elementsList[i].data.color)
                for(var x = 0; x != elementsList[i].data.pixels.length; x++) {
                    var pixelObject = elementsList[i].data.pixels[x]
                    noStroke();
                    ellipse(pixelObject.x, pixelObject.y, elementsList[i].data.size, elementsList[i].data.size)
                    if(x != 0) {
                        strokeWeight(elementsList[i].data.size * 2)
                        stroke(elementsList[i].data.color)
                        line(previousPixel.x, previousPixel.y, pixelObject.x, pixelObject.y)
                    }
                    previousPixel = pixelObject;
                }
            }
        }else {
            if(elementsList[i].finishedRendering == true){
                image(elementsList[i].graphics, 0, 0);
            }
        }
    }
}

function returnGraphicsForElement(elementToProcess) {
    var graphics = createGraphics(900, 500)
    if(elementToProcess.type == "brush") {
        graphics.fill(elementToProcess.data.color)
        for(var x = 0; x != elementToProcess.data.pixels.length; x++) {
            var pixelObject = elementToProcess.data.pixels[x]
            graphics.noStroke();
            graphics.ellipse(pixelObject.x, pixelObject.y, elementToProcess.data.size, elementToProcess.data.size)
            if(x != 0) {
                graphics.strokeWeight(elementToProcess.data.size * 2)
                graphics.stroke(elementToProcess.data.color)
                graphics.line(previousPixel.x, previousPixel.y, pixelObject.x, pixelObject.y)
            }
            previousPixel = pixelObject;
        }
    }
    return graphics
}

function toggleTextPicker() {
    if($("#textPicker").attr("class") == "textPickerUnopened" && $("#sizePicker").attr("class") == "sizePickerUnopened" && $("#colorPicker").attr("class") == "colorPickerUnopened"){
        $("#textPicker").removeClass("textPickerUnopened")
        $("#textPicker").addClass("textPickerOpened")
        textPickerOpened = true
    }else{
        $("#textPicker").removeClass("textPickerOpened")
        $("#textPicker").addClass("textPickerUnopened")
        textPickerOpened = false
    }
}

function updateFontDropdown() {
    var font = $("#fontDropdown").find(":selected").text()
    if(font == "Projekt Blackbird") {
        font = "projekt-blackbird"
    }else if(font == "Newake") {
        font = "newake"
    }
    $("#fontDropdown").css("font-family", font)
}
