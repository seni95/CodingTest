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


   var answer = [];
  var initial = 0;
    while(initial<data.length)
 { 
    const presented = data[initial].split(" ").map(i=>Number(i));
    var candies = presented[0];
    const boxes = presented[1];
    const boxArr = data.slice(initial+1,initial+boxes+1);
    const boxSizeArr = [];

    for(var i=0; i<boxArr.length; i++){
        const boxSize = boxArr[i].split(" ").map(i=>Number(i));
        boxSizeArr.push(boxSize[0]*boxSize[1])
    }

    const arranged = boxSizeArr.sort((a,b)=>b-a);
    var result = 0;
    while(candies>0){
        candies-=arranged[result];
        result++;
    }
    answer.push(result);

    initial+=(boxes+1)}

    return console.log(answer.join("\n"));
