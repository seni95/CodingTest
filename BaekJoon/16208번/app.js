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
var total = arranged.reduce((sum,currentValue)=>sum+currentValue);
var result = 0;
for(const num of arranged){
  result+=num*(total-num);
  total-=num;
}
return console.log(result+"\n");