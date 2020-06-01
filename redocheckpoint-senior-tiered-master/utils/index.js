// UTILITY FUNCTIONS

const utils = {};

utils.getInitials = (name) => {
    let newStr = ''
    const array = name.split(" ");
    newStr = array.map(word => word[0]).join("").toUpperCase();

    return newStr;
};

utils.makeObjectFromArray = input => {

    let obj = {}
    for (let i = 0; i < input.length; i = i + 2) {
        obj[input[i]] = input[i + 1]
    }
    return obj

    // INPUT arguments
    //   - A 1-dimensional array of key names followed by their values
    //     - example: ['name', 'R2-D2', 'home_planet', 'Tatooine']
    //
    // RETURN value
    //   - An object whose keys are the odd elements of the input array and whose values are the even elements of the input array
    //     - example: {name: 'R2-D2', home_planet: 'Tatooine'}
    //
    //your code here
};

utils.generateGroups = (array, numb) => {
    const toReturn = [];

    let i = 0,
        length = array.length;

    while (i < length) {
        toReturn.push(array.slice(i, i + numb));
        i = i + numb;
    }

    return toReturn
        // INPUT arguments
        //   - A 1-dimensional array
        //   - The length of each subgroup that should be created
        //
        // RETURN value
        //   - A 2-dimensional array of arrays. Each subarray should be as long as the length argument passed in to the function, except for the final subarray, which can be shorter and contain a "remainder" smaller than that length.
        //
        //your code here
};

module.exports = utils;