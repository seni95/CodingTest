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

const baggage = firstLine.split(" ")[0];
const size = firstLine.split(" ")[1];
var weighList = data.split(" ").map(i=>parseInt(i));

function deleteItem(item){
    for(var i =0; i<weighList.length; i++){
      if(weighList[i]===item){
          return weighList.splice(i,1);
      }
    }
  }

if(baggage===0)
return console.log(0);

var minimum = Math.min.apply(null,weighList);
var maximum = Math.max.apply(null,weighList);

var packaged = 0;

while(weighList.length>2){
    if((maximum+minimum)>size){
        return console.log(weighList.length);
    }
    
    
    
    deleteItem(maximum);
    deleteItem(minimum);
    
    packaged++;
    
}
    return console.log((weighList.length)+packaged);


