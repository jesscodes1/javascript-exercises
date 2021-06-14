const leapYears = function(x) {
    if(x % 4 != 0){
        return false;
    }

    if(x % 100 != 0){
        return true;
    }

    if(x % 400 === 0){
        return true;
    }
    else{
        return false;
    }
};

module.exports = leapYears;
