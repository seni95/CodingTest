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


  const presented = data.split(" ").map(i=>Number(i));

  const property = new Set(presented);
  const result = [];
  property.forEach((value)=>{
    const count = presented.filter(item=>value===item);
    result.push(count.length);
  })
 return console.log(Math.max.apply(null,result));