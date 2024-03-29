// Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

// Note that numbers written as strings are strings and must be sorted with the other strings.



// Parameters: an array fo strings and numbers

// Return: an array with the numbers sorted in ascending order followed by the strings sorted in alphabetical order

// Examples:
dbSort([6, 2, 3, 4, 5]) // [2, 3, 4, 5, 6]
dbSort([14, 32, 3, 5, 5]) // [3, 5, 5, 14, 32]
dbSort([1, 2, 3, 4, 5]) // [1, 2, 3, 4, 5]
dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]) // [0,2,2,"Apple","Banana","Mango","Orange"]
dbSort(["C", "W", "W", "W", 1, 2, 0]) // [0,1,2,"C","W","W","W"]
dbSort(["Apple",46,"287",574,"Peach","3","69",78,"Grape","423"]) // [46, 78, 574, '287', '3', '423', '69', 'Apple', 'Grape', 'Peach']



const dbSort = (array) => {
    // filter argument array for numbers, sort in ascending order, then save to an array
    const output = array.filter( (el) => el === Number(el) )
        .sort((a,b) => a - b);

    // filter argument array for strings, sort in alphabetical order, then loop through and push each value to output
    array.filter( (el) => typeof el === 'string' )
        .sort( (a,b) => a.localeCompare(b) )
        .forEach( (str) => output.push(str) );

    return output;
}