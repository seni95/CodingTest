const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : require('path').join(__dirname, 'input.txt');

const [firstLine, ...data] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n').map(i=>parseInt(i));


const tipValue= (order,value)=>{
if((value-order)<0){
    return 0;
}
return (value-order);
}

const filtered = data.filter(i=>i>=0).sort((a,b)=>b-a);

var result = 0;

for(var i=0; i<filtered.length; i++){
    result+=tipValue(i,filtered[i]);
}

return console.log(result);