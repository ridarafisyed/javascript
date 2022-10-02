// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

const fullName = "rida Rafi syed"

console.log("upper case :", fullName.toUpperCase())
console.log("lower case :", fullName.toLowerCase())

function titleCase(sentance) {
    return sentance.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
console.log("title case :", titleCase(fullName))