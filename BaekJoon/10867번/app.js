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

  const arrangedData = data.split(' ').map(i=>parseInt(i));
  const setData = new Set(arrangedData);
  const result = Array.from(setData);

  console.log(result.sort((a,b)=>a-b).join(" "));