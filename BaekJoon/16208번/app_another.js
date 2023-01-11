const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : require('path').join(__dirname, 'input.txt');

const [firstLine, secondLine] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

 
var barList = secondLine.split(" ").map(i=>Number(i));
var arranged = barList.sort((a,b)=>a-b);
var result = 0;
var total = arranged.reduce((sum,currentValue)=>sum+currentValue);

while(arranged.length>0){
    const process1 = arranged.shift();
    const process2 =arranged.length>0?arranged.reduce((sum,currentValue)=>sum+currentValue):0;
    result+=(process1*process2);
}
return console.log(result+"\n");

//shift()함수에서 문제가 생겼을 것으로 추정11111111111111111111111