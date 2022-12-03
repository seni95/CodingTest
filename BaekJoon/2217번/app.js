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

  var rows = data.map(i=>parseInt(i));
  rows = rows.sort((a,b)=>a-b);
  var caseNum = [];
  var remainder = firstLine;
  for(var i=0; i<rows.length; i++){
    caseNum.push(rows[i]*remainder);
    remainder--;
    }

  var result = 0;
  for(var i=0; i<caseNum.length; i++){
    if(result<caseNum[i]){
        result=caseNum[i];
    }
  }
  console.log(result);