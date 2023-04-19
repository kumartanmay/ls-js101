/*
8-4-4-4-12

hexa: 0-9 + a-f 
*/

const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']

function uuid() {
  let hexaEight =  '00' + generateRandomNum(8);
  let hexaFirstFour = '00' + generateRandomNum(4);
  let hexaSecondFour = '00' + generateRandomNum(4);
  let hexaThirdFour = '00' + generateRandomNum(4);
  let hexaTwelve = '00' + generateRandomNum(12);
  console.log(`${hexaEight.slice(-8)}-${hexaFirstFour.slice(-4)}-${hexaSecondFour.slice(-4)}-${hexaThirdFour.slice(-4)}-${hexaTwelve.slice(-12)}`);
}

function generateRandomNum (digits) {
  return Math.floor(Math.pow(10, digits) + Math.random() * 9 * Math.pow(10, digits)).toString(16);
}

uuid();
uuid();
uuid();
uuid();