const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : require('path').join(__dirname, 'input.txt');

const data = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

var change = parseInt(data);


const container1=5;
const container2=2;
var count = 0;

while(change>=0){
    if(change%container1==0){
        return console.log((change/container1)+count);
    }else{
        change -=container2;
        count++;
        if(change===0){
            return console.log(count);
        }    
    }
}

return console.log(-1);