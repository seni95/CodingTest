const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : require('path').join(__dirname, 'input.txt');

const [firstLine, secondLine, ...data] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');


  const playground = firstLine.split(" ").map(i=>parseInt(i));

const background = playground[0];
var basketRange = [1,playground[1]];
var counter = 0;
const moveBasket = (direction) =>{
    counter++;
    if(direction==="right"){
        return basketRange.map(i=>i+1);
    }else{
        return basketRange.map(i=>i-1);
    }
}

for (const el of data){
    if(el<basketRange[0]){
    // console.log(el);
    // console.log(basketRange[0])
            while(el<basketRange[0]){
            basketRange=moveBasket("left")
    }
    }
    if(el>basketRange[1]){
        // console.log(el);
        // console.log(basketRange[1])
        while(el>basketRange[1]){
            basketRange=moveBasket("right")
    }
    }
}

console.log(counter);