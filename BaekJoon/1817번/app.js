const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : require('path').join(__dirname, 'input.txt');

const [firstLine, data] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const baggage = firstLine.split(" ").map(i=>parseInt(i))[0];
const size = firstLine.split(" ").map(i=>parseInt(i))[1];

if(baggage===0)
return console.log(0);

var weighList = data.split(" ").map(i=>parseInt(i));




var box =0;
var packaged = 0;
for(const i of weighList){

    box+=i;
    if(box>size){
        packaged++;
        box=i;
    }

}

return console.log(packaged+1);