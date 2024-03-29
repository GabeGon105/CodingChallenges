// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.



// Parameters: a string of lowercase letters and numbers

// Return: an integer representing the largest number in the argument string

// Examples:
solve('gh12cdy695m1') // 695
solve('2ti9iei7qhr5') // 9
solve('vih61w8oohj5') // 61
solve('f7g42g16hcu5') // 42
solve('lu1j8qbbb85') // 85



const solve = (string) => {
    // spread argument string, match all numbers, then find the max value and return
    return Math.max(...string.match(/\d+|$/g))
}
