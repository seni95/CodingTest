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

  const marbles = data.split(" ").map(i=>Number(i));

  const top = Math.max.apply(null,marbles);
  const bottom = Math.min.apply(null,marbles);

  const upward = [];
  const downward = [];

  const arragned = marbles.sort((a,b)=>a-b);

  for(var i=0; i<arragned.length; i++){

    if(arragned[i]===top||arragned[i]===bottom)
    continue
    else if(i%2===0)
    upward.push(arragned[i]);
    else
    downward.push(arragned[i]);

    }
  var result = 0;
  var temp = bottom;
  for(var i=0; i<upward.length; i++){
   const value = upward[i]-temp;
   temp=upward[i];
   result +=value;
  }
  var temp = top;
  for(var i=downward.length-1; i>=0; i--){
   const value = temp-downward[i];
   temp = downward[i];
   result +=value;
    }
    
  const value = upward.length!==0?top-upward[upward.length-1]:top-bottom;
  result+=value;

  const value2 = downward[0]-bottom;
  result+=value2;

  return console.log(result);