const repeatString = function(x,y) {
    let tempString;
    for(let i = 0; i < y; i++){
        return(x.repeat(y));
    }

    if(y === 0){
        return "";
    }
    else if(y < 0){
        return "ERROR";
    }
};

module.exports = repeatString;
