var elementsChain = []
var initialImageScaleModifier
var coefficientRatio
var pasted = false
var initialImage
var tool = "none";

function retrieveImageFromClipboardAsBlob(pasteEvent, callback){
	if(pasteEvent.clipboardData == false){
        if(typeof(callback) == "function"){
            callback(undefined);
        }
    };

    var items = pasteEvent.clipboardData.items;

    if(items == undefined){
        if(typeof(callback) == "function"){
            callback(undefined);
        }
    };

    for (var i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") == -1) continue;
        var blob = items[i].getAsFile();

        if(typeof(callback) == "function"){
            callback(blob);
        }
    }
}

window.addEventListener("paste", function(e){
    if(!pasted){
        retrieveImageFromClipboardAsBlob(e, function(imageBlob){
            if(imageBlob){
                var URLObj = window.URL || window.webkitURL;
                src = URLObj.createObjectURL(imageBlob);
                elementsChain.push({type: "initial image", src: src});
                initialImage = loadImage(elementsChain[0].src, function() {
                    pasted = true;
                    coefficientRatio = Math.min(width / initialImage.width, height / initialImage.height);
                })
            }
        });
    }
}, false);




