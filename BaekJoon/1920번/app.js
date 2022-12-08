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

  var givenNumberArr = data[1].split(' ');
  var nums = new Set()
  for (var value of givenNumberArr) {
    nums.add(value)
  }
  var toCheck = data[3].split(' ');
  var result = toCheck.map(i=>nums.has(i)?"1\n":"0\n").join("");

  console.log(result);
