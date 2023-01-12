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

var answer = '';
var turn =1;
for (var i=0; i<data.length; i+=2){
    const items = data[i];
    var prices = data[i+1].split(" ").map(i=>Number(i));
  
    const compare = 75/100;
  
    var result = [];
    for (var k=0; k<prices.length; k++){
      const value = compare*prices[k];
      const origin = prices[k];
      if(prices.includes(value))
     { result.push(value);
       for(let j=0; j<prices.length; j++){
        if(prices[j]===value){
            prices.splice(j,1);
            k--;
            break;
        }
       } 
       for(let j=0; j<prices.length; j++){
        if(prices[j]===origin){
            prices.splice(j,1);
            k--;
            break;
        }
       } 
    }
      }
  
  answer+=`Case #${turn}: ${result.join(" ")}\n`;  
    turn++;
}
 return console.log(answer);
