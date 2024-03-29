// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// Arguments (Other languages)
// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.



// Parameters: a string of words and an optional string of standalone words separated by spaces

// Return: the first argument string written in title case, excluding the words in the option second string

// Examples:
titleCase('') // ''
titleCase('a clash of KINGS', 'a an the of') // 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // 'The Wind in the Willows'
titleCase('the quick brown fox') // 'The Quick Brown Fox'



const titleCase = ( string, excep ) => {
    // split argument string to an array by ' ', map through to set each word capitalized (not including exceptions), join to a string by ' ', then assign to a variable
    let titleCase = string.split(' ').map( ( word, i ) => {
        // if argument excep split to an array includes word and is not index 0, return word lowercase
        if ( i !== 0 && excep && excep.toLowerCase().split(' ').includes(word.toLowerCase()) ) {
            return word.toLowerCase();
        }
        // else return word capitalized
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        
    } )
    .join(' ');

     return titleCase;
}