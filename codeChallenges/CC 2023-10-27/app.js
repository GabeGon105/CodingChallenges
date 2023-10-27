// I have the par value for each hole on a golf course and my stroke score on each hole. I have them stored as strings, because I wrote them down on a sheet of paper. Right now, I'm using those strings to calculate my golf score by hand: take the difference between my actual score and the par of the hole, and add up the results for all 18 holes.

// For example:

// If I took 7 shots on a hole where the par was 5, my score would be: 7 - 5 = 2
// If I got a hole-in-one where the par was 4, my score would be: 1 - 4 = -3.
// Doing all this math by hand is really hard! Can you help make my life easier?

// Task Overview
// Complete the function which accepts two strings and calculates the golf score of a game. Both strings will be of length 18, and each character in the string will be a number between 1 and 9 inclusive.



// Parameters: two strings of numbers of equal length

// Return: find the difference between same-indexed values from the two arrays, then return the sum of these differences

// Examples:
golfScoreCalculator('443454444344544443', '353445334534445344') // -1
golfScoreCalculator('123456123456123456', '123456123456123456') // 0



const golfScoreCalculator = (parList, scoreList) => {
    // split parList to an array then reduce through
    return parList.split('').reduce( (sum, str, i) => {
        // convert str and scoreList[i] to nums
        // add the difference to sum
        return sum += scoreList[i] - str;
    }, 0 );
}