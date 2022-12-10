const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : require('path').join(__dirname, 'input.txt');

const data = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

  const givenData = new Set(data[1].split(' '));

  const checkData = data[3].split(' ');

  const result = checkData.map(i=>givenData.has(i)?1:0).join(" ");

  console.log(result);
