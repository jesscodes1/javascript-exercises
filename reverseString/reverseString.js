const reverseString = function(x) {
    let tempString = "";
    for(let i = x.length - 1; i >= 0; i--){
        tempString += x[i];
    }

    return tempString;
};

module.exports = reverseString;
