// Description: John is really excited about coffee. He wrote some text messages earlier, but he's worried that they didn't convey his enthusiasm for coffee, so he's decided to resend them with coffee in all-caps:

// COFFEE

// Task: Write a function "coffee" that accepts a string as a parameter and returns that string with every instance of coffee in all caps.

// Input: string. The word "coffee" may occur more than once. It may have some capital letters or already be in all-caps. There may be punctuation in the string too. It will not be part of another word like "Coffeeburger", which isn't a word anyway.

// Output: string with all instances of coffee in all-caps:



// Parameters: a string of words

// Return: the argument string but with all instances of 'coffee' (in any capitalization and possibly with punctuation) replaced with 'COFFEE'

// Examples:
coffee("Did I only have two cups of coffee this morning? I need more.") // "Did I only have two cups of COFFEE this morning? I need more."
coffee("Coffee! Buy me a COFFEE!") // "COFFEE! Buy me a COFFEE!"



const coffee = (string) => {
    // replace every instance of 'coffee' in any capitalization to 'COFFEE'
    return string.replace(/coffee/ig, "COFFEE");
}