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

const arrangedData = data.sort((a,b)=>a-b);
const result = arrangedData.map(i=>i+"\n").join("");
console.log(result);