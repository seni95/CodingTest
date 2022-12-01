const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : require('path').join(__dirname, 'input.txt');

const [firstLine, ...data] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const arrA = data[0].split(' ');
const arrB = data[1].split(' ');
const arrayA = arrA.map(i=>parseInt(i));
const arrayB = arrB.map(i=>parseInt(i));

const sortedArrA = arrayA.sort((a,b)=>a-b);
const sortedArrB = arrayB.sort((a,b)=>b-a);
var result = 0;
for(var a = 0; a<arrayA.length; a++){
    var num1 = sortedArrA[a];
    var num2 = sortedArrB[a];
    var num3 = num1*num2;
    result += num3;
}

console.log(result);