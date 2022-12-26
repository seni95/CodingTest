const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : require('path').join(__dirname, 'input.txt');

const [firstLine,data] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');


const trees = data.split(" ").map(i=>parseInt(i));

const calculate = trees.sort((a,b)=>b-a);
//무슨 순서대로 심을지는 구함.
//배열의 인덱스는 
var results = [];

for (var i=0; i<trees.length; i++){
   const value =  calculate[i] +i+1;
    results.push(value);
}
console.log(Math.max.apply(null,results)+1);