var previousId = 1
var elementsList = []
function getId() {
    previousId++
    return previousId.toString();
}

/*function createElementObject(type, data) {
    var elementObject = {id: getId(), type: type, data: data}
    elementsList.push(elementObject)
    return elementObject
}*/

function getElementById(id) {
    for(var i = 0; i != elementsList.length; i++){
        if(elementsList[i].id == id){
            return elementsList[i]
        }
    }
    return null
}