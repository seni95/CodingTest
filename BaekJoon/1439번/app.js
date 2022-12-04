const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : require('path').join(__dirname, 'input.txt');

const [data] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

  var changeCount = 0;
  var temp = data[0];
  for(var i=0; i<data.length; i++){
    if(temp!==data[i]){
        changeCount++;
    }
    temp=data[i];
}


const result = Math.ceil(changeCount/2);
return console.log(result);