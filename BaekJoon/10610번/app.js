const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : require('path').join(__dirname, 'input.txt');

const [data] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

var numArr = data.split('');
numArr = numArr.map(i=>parseInt(i));
numArr = numArr.sort((a,b)=>b-a);

var numLength = numArr.length-1;
if(numArr[numLength]===0){
var calculator = 0;
numArr.forEach(element => {
    calculator+=element;
    if(calculator%3===0){
        calculator=0;
    }
});;
if(calculator%3===0){
        var result = numArr.join("");
        return console.log(result);
}
    }

    return console.log(-1);