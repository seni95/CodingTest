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

var money = firstLine.split(" ").map(i=>Number(i))[1];
var coins = 0;
const rate = data.map(i=>Number(i));


function buyCoins(value){
    coins = parseInt(money/value);
    money-=value*coins;
}

function sellCoins(value){
    money+=value*coins;
    coins =0;
}

for(var i=0; i<rate.length; i++){
    const previous = i>0?rate[i-1]:undefined;
const current = rate[i];
const next = rate[i+1];
if(coins===0&&current<next&&(previous==undefined||current<=previous)){
    buyCoins(current);
}
//최저점에 산다.
if(coins!==0&&current>previous&&next<=current){
    sellCoins(current);
}
//최고점에 판다
}

sellCoins(rate[rate.length-1]);
return console.log(money)

