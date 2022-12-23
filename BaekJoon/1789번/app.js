const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : require('path').join(__dirname, 'input.txt');

const [given] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n').map(i=>parseInt(i));

  var num = 0;
var i=1;
var numbers = [];
  while(num<=given){
num+=i;
numbers.push(i);
i++;
}

console.log(numbers.length-1);
//num이 결국 given보다 커졌을 때도.. while문때문에 한번 더 더해지게 되니까 -1을 해줘야함.