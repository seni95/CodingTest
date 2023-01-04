const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : require('path').join(__dirname, 'input.txt');

const firstLine = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split(' ').map(i=>Number(i));


var balls = firstLine[0];
var basketNum = firstLine[1];
var baskets = [];

for(var i=0; i<basketNum; i++){
    baskets.push(0);
}

var index =0;
var bundle =1;
while(index<basketNum){
    baskets[index]+=bundle;
    balls-=bundle;   
    bundle++;
    index++;

}

if(balls<0){
    return console.log(-1);
}
//남은 공 처리
index =basketNum-1;
while(balls>0){
    baskets[index]++;
    balls--;
    index<=0?index=basketNum-1:index--;
}

const maximum = Math.max.apply(null,baskets);
const minimum = Math.min.apply(null,baskets);

return console.log(maximum-minimum);