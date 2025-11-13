function getFirstUniqueSymbol(str) {
    let countSymbol = {};
    
    for (let sym of str) {
        countSymbol[sym] = (countSymbol[sym] ?? 0) + 1;
    }
    
    for (let sym of str) {
        if (countSymbol[sym] === 1) {
            return sym;
        }
    }
    
    return null;
}