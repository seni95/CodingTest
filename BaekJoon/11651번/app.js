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

const coordinate = data.map(i=>i.split(" ").map(i=>parseInt(i)));

coordinate.sort((a,b)=>a[1]!==b[1]?a[1]-b[1]:a[0]-b[0]);

const result = coordinate.map(i=>i.join(" "));
console.log(result.join("\n"));