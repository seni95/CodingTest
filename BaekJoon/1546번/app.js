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


  const scores = data.split(" ").map(Number);
const maximum = Math.max.apply(null,scores);

    const newScores = scores.map(i=>i/maximum*100);
    var result = 0;
    newScores.map(i=>result+=i);
    result/=Number(firstLine);
    console.log(result);