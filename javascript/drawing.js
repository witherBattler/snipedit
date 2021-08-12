let color = "white"
let size = 5

function setup() {
    var canvas = createCanvas(900, 500)
    canvas.style("border", "black 1px solid")
}

function draw() {
    if(pasted) {
        image(initialImage, 0, 0, initialImage.width * coefficientRatio, initialImage.height * coefficientRatio);
    }
}