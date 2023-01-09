const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : require('path').join(__dirname, 'input.txt');

const [firstLine, secondLine] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n').map(BigInt);

 
const barList = secondLine.split(" ").map(i=>Number(i));

var result = 0;
while(barList.length>0){
    const process1 = barList.shift();
    var process2 = 0;
    barList.map(i=>process2+=i);
    result+=(process1*process2);
}
return console.log(result+"\n");