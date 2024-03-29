// A boy is walking a long way from school to his home. To make the walk more fun he decides to add up all the numbers of the houses that he passes by during his walk. Unfortunately, not all of the houses have numbers written on them, and on top of that the boy is regularly taking turns to change streets, so the numbers don't appear to him in any particular order.

// At some point during the walk the boy encounters a house with number 0 written on it, which surprises him so much that he stops adding numbers to his total right after seeing that house.

// For the given sequence of houses determine the sum that the boy will get. It is guaranteed that there will always be at least one 0 house on the path.



// Parameters: an array of integers, always including at least one 0

// Return: the sum of all numbers in the argument array only before the first 0

// Examples:
houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]) // 11
houseNumbersSum([4, 2, 1, 6, 0]) // 13
houseNumbersSum([4, 1, 2, 3, 0, 10, 2]) // 10
houseNumbersSum([0, 1, 2, 3, 4, 5]) // 0



const houseNumbersSum = ( numsArr ) => {
    // find the index of the first 0 in argument numsArr
    const i = numsArr.indexOf(0);

    // slice numsArr from 0 to i, reduce to find the total sum, then return
    return numsArr.slice(0, i).reduce( ( sum, num ) => sum+= num , 0 );
}