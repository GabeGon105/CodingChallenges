// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)



// Parameters: a positive integer n

// Return: an integer representing the sum of all cubes from 1 to n



export const sumCubes = ( n: number ): number => {
    let sum = 0;

    // loop from 1 to n
    for ( let i = 1 ; i <= n ; i++ ) {
        // add i cubed to sum
        sum += i**3;
    }

    return sum;
}



console.log( sumCubes(1), 1 );
console.log( sumCubes(2), 9 );
console.log( sumCubes(3), 36 );