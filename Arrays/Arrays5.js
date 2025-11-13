let minInArray = function(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return "Error: array must be non-empty";
    }
    
    let min = array[0];
    
    for (let element of array.slice(1)) {
        if (element < min) {
            min = element;
        }
    }
    
    return min;
}

