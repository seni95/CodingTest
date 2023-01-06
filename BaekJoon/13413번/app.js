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

for(var j=0; j<data.length; j+=3)
  {
  const length = data[j];
  const origin = data[j+1];
  const goal = data[j+2];
  var reverseW = 0;
  var reverseB = 0;
  for (var i=0; i<origin.length; i++){
    if(origin[i]==='W'&&goal[i]==='B'){
        reverseW++;
    }else if(origin[i]==='B'&&goal[i]==='W'){
        reverseB++;
    }
  }

  console.log(reverseB>reverseW?reverseB:reverseW);}