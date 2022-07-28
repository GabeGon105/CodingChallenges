// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.



// Parameters: an array of arrays

// Return: an array

// Examples:
flatten([1,2,3]) // [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // [[1,2,3]]



const flatten = function (array){
    // concat all the array in argument array then return
    return [].concat(...array);
}