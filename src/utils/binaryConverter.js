// this takes a string from the input

function binaryConverter(text) {
  // Convert each character to its ASCII code, then to binary.
  return text.split('').map((char) => {
    return char.charCodeAt(0).toString(2).padStart(8, '0');
  }).join('')
}

console.log()

export default binaryConverter;



// .split('') --> converts to array of characters 'car' -> ['c', 'a', 'r']
// .map(char) --> itreats each character
// .charCodeAt(0) gets the ASCII code of the character
// .toString(2) converts it to binary string (3 would be ternary, and so on.)
// .padStart(8, '0') Ensure 8-bit format
// .join('') joins the array to a single string
