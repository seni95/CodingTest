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
var counter = 0;
const check = (num)=>{
    if(num<=1){
        return counter++;
    }
    const testNum = Math.sqrt(num);
    for (var i=0; i<=testNum; i++){
        if(i!==1&&num%i===0){
            return counter++;
        }
    }
}

const numArr = data.split(" ").map(i=>parseInt(i));

numArr.map(i=>check(i));
console.log(parseInt(numArr.length-counter));