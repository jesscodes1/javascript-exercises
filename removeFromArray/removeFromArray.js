const removeFromArray = function(...args) {
    const arr = args[0];

    const newArray = [];

    arr.forEach(element => {
        if(!args.includes(element)){
            newArray.push(element);
        }
    })

    return newArray;

    
};

module.exports = removeFromArray;
