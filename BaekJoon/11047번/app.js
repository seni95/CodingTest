const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : require('path').join(__dirname, 'input.txt');

const [firstLine, ...data] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');



const moneyData = firstLine.split(' ');
const count = moneyData[0];
const totalValue = moneyData[1];

const coins = data.map(i=>parseInt(i));

var num = 0;
while(coins[num]<=totalValue){
    num++;
}
num--;

var calValue = totalValue;
var result = 0;
while(num>=0){
    while(coins[num]<=calValue){
    calValue-=coins[num];
    result++;
    }
    num--;
}

console.log(result);