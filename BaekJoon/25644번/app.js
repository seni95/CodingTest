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

  const rate = data.split(" ").map(i=>Number(i));
  const arragned = data.split(" ").map(i=>Number(i)).sort((a,b)=>a-b);
    var result = 0;
    
    for(var i=1; i<arragned.length+1; i++)
    { 
    var max = arragned[arragned.length-i];
   for(var j=0; j<arragned.length; j++){
    var min = arragned[j];
    var big = rate.indexOf(max);
    var small = rate.lastIndexOf(min);
    if(max-arragned[j]<=result)
    break;  
  }
    if(big>small)
    {result=result>(max-min)?result:max-min;
    break;}
   
    if(max-arragned[0]<=result)
    break;
    }
return console.log(result);