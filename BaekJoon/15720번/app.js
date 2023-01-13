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


  const total = firstLine.split(" ").map(i=>Number(i));
  const burgers = data[0].split(" ").map(i=>Number(i)).sort((a,b)=>b-a);
const sides = data[1].split(" ").map(i=>Number(i)).sort((a,b)=>b-a);
const beverages = data[2].split(" ").map(i=>Number(i)).sort((a,b)=>b-a);

const bundled = Math.min.apply(null,total);

const not_applied = burgers.reduce((sum,currValue)=>sum+currValue)
                    +sides.reduce((sum,currValue)=>sum+currValue)
                    +beverages.reduce((sum,currValue)=>sum+currValue);

var d_burgers =0;
var j= bundled;
for(var i=0; i<burgers.length; i++){
    const value = j>0?burgers[i]-(burgers[i]*0.1):burgers[i];
    d_burgers+=value;
    j--;}

    var d_sides =0;
var j= bundled;
for(var i=0; i<sides.length; i++){
    const value = j>0?sides[i]-(sides[i]*0.1):sides[i];
    d_sides+=value;
    j--;}


    var d_beverages =0;
var j= bundled;

for(var i=0; i<beverages.length; i++){
    const value = j>0?beverages[i]-(beverages[i]*0.1):beverages[i];
    d_beverages+=value;
    j--;}
const applied = d_burgers+d_sides+d_beverages;

return console.log(not_applied+"\n"+applied);