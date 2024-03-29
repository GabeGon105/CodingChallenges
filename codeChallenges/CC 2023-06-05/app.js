// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].



// Parameters: An array of integers and an integer

// Return: the argument array with each integer repeat up to a maximum of the argument integer numb of times

// Examples:
deleteNth([20,37,20,21], 1) // [20,37,21]
deleteNth([1,1,3,3,7,2,2,2,2], 3) // [1, 1, 3, 3, 7, 2, 2, 2]



const deleteNth = (arr, n) => {
    // create an array to hold the output
    const output = [];

    // loop through argument arr
    arr.forEach( (num) => {
        // if the number of times that num occurs in output is less than argument n, push num to output
        if ( output.filter( (int) => int === num ).length < n ) output.push(num);
    } );

    return output;
}