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

const total = parseInt(data);
const container1 = 3;
const container2 = 5;

if(total>=container1){
  var result=total;
  var i=0;
  while((result>=container1)){
    if((result%container2)===0){
      return console.log(i+(result/container2));
    }
    result-=container1;
    i++;
    }
    if(result==0){
      return console.log(i);
    }
      return console.log(-1);
  }
  return console.log(-1);