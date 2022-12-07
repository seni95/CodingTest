const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : require('path').join(__dirname, 'input.txt');

const data = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('');

const container1 = ['A','A','A','A'];
const container2 = ['B','B'];

var result = [];
var count = 0;


while(count<data.length){
var temp1 = data.slice(count,count+4);
var temp2 = data.slice(count,count+2);
if(!temp1.includes('.')&&(temp1.length===4)){
    for(var i=0; i<container1.length; i++){
        result.push(container1[i]);
    }
    count+=4;
}else if(!temp2.includes('.')&&(temp2.length===2)){
    for(var i=0; i<container2.length; i++){
        result.push(container2[i]);
    }
    count+=2;
}else if(temp1[0]==='.'){
    result.push('.');
    count++;
}else {
    return console.log(-1);
}
}
var formalResult = '';
for(var i=0; i<result.length; i++){
    formalResult+=result[i];
}
return console.log(formalResult.toString());