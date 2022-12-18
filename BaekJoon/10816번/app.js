const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : require('path').join(__dirname, 'input.txt');

const [firstLine, cards,thirdLine,numbers] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const cardsList = cards.split(" ");
const cardsMap = new Map();
for(const card of cardsList){
    if(cardsMap.get(card)===undefined){
        cardsMap.set(card,1);
    }else{
        var value = cardsMap.get(card);
        cardsMap.set(card,++value);
    }
}
const numberList = numbers.split(" ");
const result = numberList.map(i=>cardsMap.get(i)===undefined?0:cardsMap.get(i));
console.log(result.join(" "));