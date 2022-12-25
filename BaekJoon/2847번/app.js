const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : require('path').join(__dirname, 'input.txt');

const [firstLine,...data] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n').map(i=>parseInt(i));

  var count = 0;

  data.length;
  for(var i=data.length; i>0; i--){

    var a = data[i-1];
  var b = data[i];
  while(a>=b){
    a--;
    data[i-1]=a;
    count++;
  }
  }
  

  console.log(count);