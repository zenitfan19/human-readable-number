module.exports = function toReadable (number) {
  let numArray = String(number).split('');
  let numStr = "";
  let dictionary = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
    '20': 'twenty',
    '30': 'thirty',
    '40': 'forty',
    '50': 'fifty',
    '60': 'sixty',
    '70': 'seventy',
    '80': 'eighty',
    '90': 'ninety'
  };
  if(numArray.length === 1) {
    numStr += convertFirstOrder(numArray, dictionary);
  }
  if(numArray.length === 2) {
    numStr += convertSecondOrder(numArray, dictionary);
  }
  
  if(numArray.length === 3) {
    numStr += convertThirdOrder(numArray, dictionary);
  }

  return numStr;
}

function convertFirstOrder (numArray, dictionary) {
  return dictionary[numArray[0]];
} 

function convertSecondOrder (numArray, dictionary) {
  let result = "";
  if(numArray[0] === '1') {
      result += dictionary[numArray.join('')];
    } else {
      result += dictionary[numArray[0]+'0'];
      if(numArray[1] !== '0') {
        result += ' ' + dictionary[numArray[1]];
      }      
    }
  return result;
}

function convertThirdOrder (numArray, dictionary) {
  let result = "";
  result += convertFirstOrder(numArray.splice(0, 1), dictionary) + ' hundred';
  if(numArray[0] !== '0') {
    result += ' ' + convertSecondOrder(numArray, dictionary);
  } else if(numArray[1] !== '0') {
    result += ' ' + convertFirstOrder(numArray.splice(1, 1), dictionary)
  }
  return result;
}
