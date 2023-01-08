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


 
const barList = secondLine.split(" ").map(i=>Number(i));

const arranged = barList.sort((a,b)=>a-b);
var result = 0;
while(arranged.length>0){
    const process1 = arranged.shift();
    var process2 = 0;
    arranged.map(i=>process2+=i);
    result+=(process1*process2);
}
return console.log(result);