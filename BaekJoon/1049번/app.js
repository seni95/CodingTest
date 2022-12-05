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

var givenData = firstLine.split(' ');

var toRepair = parseInt(givenData[0]);
var givenBrand = parseInt(givenData[1]);

var packagePrices = [];
var singlePrices = [];
for(var i=0; i<data.length; i++){
    var prices = data[i].split(' ');
    packagePrices.push(parseInt(prices[0]));
    singlePrices.push(parseInt(prices[1]));
}

packagePrices.sort((a,b)=>a-b);
singlePrices.sort((a,b)=>a-b);


var buySingle = toRepair;
var buyPackage = Math.ceil(toRepair/6);
var mixBuying = [Math.floor(toRepair/6),(toRepair%6)];

const singleTotalPrices = buySingle*singlePrices[0];
const packageTotalPrices = buyPackage*packagePrices[0];
const mixTotalPrices = (mixBuying[0]*packagePrices[0])+(mixBuying[1]*singlePrices[0]);

var result = singleTotalPrices<=packageTotalPrices?singleTotalPrices:packageTotalPrices;

result = mixTotalPrices<=result?mixTotalPrices:result;

console.log(result);