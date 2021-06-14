const sumAll = function(x, y) {
    let sum = 0;

    // checks to make sure that the parameters were of number type before moving on
    if(x < 0 || y < 0){
        return "ERROR";
    }
    else if(typeof(x) != "number" || typeof(y) != "number" ){
        return "ERROR";
    }

    if(x < y){
        for(let i = x; i <= y; i++){
            sum += i;
        }
    }
    else if(x > y){
        for(let i = y; i <= x; i++){
            sum += i;
        }
    }
    return sum;
};

module.exports = sumAll;
