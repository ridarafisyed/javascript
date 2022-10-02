const fullName = "rida Rafi syed"

console.log("upper case :", fullName.toUpperCase())
console.log("lower case :", fullName.toLowerCase())

function titleCase(sentance) {
    return sentance.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
console.log("title case :", titleCase(fullName))