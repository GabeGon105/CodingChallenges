// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.



// Parameters: a string consisting of parentheses, brackets and curly braces: ()[]{}

// Return: true or false depending on if all braces are closed properly

// Examples:



const validBraces = (braces) => {
    // create a variable to hold a regex
    const regex = /\(\)|\[\]|\{\}/;

    // search for a math between argument braces and the regex, then return true or false
    return regex.test(braces)
    ? validBraces(braces.replace(regex, ''))
    : '' === braces
}