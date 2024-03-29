// Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

// In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

// 'X' --> busy
// 'O' --> empty
// If all rooms are busy, return "None available!"



// Parameters: an array of 'X' and 'O'

// Return: the index of the first 'O' in the argument array, or 'None available!' if there is no 'O'

// Examples:
meeting(['X', 'O', 'X']) // 1
meeting(['O','X','X','X','X']) // 0
meeting(['X','X','X','X','X']) // 'None available!'



const meeting = (arr) => {
    // if argument arr includes 'O' find the index of the first 'O' then return, else return 'None available!'
    return arr.includes('O')
        ? arr.findIndex((room) => room === 'O')
        : 'None available!';
}