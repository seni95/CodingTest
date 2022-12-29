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

function removeItem(arr,value){
    var index = arr.indexOf(value);
    if(index>-1){
        arr.splice(index,1);
    }
    return arr;
}

var snake = firstLine.split(" ").map(i=>parseInt(i))[1];

var fruits = data.split(" ").map(i=>parseInt(i));

var minimum = Math.min.apply(null,fruits);

while(minimum<=snake){
    fruits = removeItem(fruits,minimum)
    minimum = Math.min.apply(null,fruits);
    snake++;
}

return console.log(snake);