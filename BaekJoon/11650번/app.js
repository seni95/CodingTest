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

const coordinate = data.map(i=> i.split(' ').map(nums=>parseInt(nums)));


var result = coordinate.sort((a,b)=>{if(a[0]!==b[0])
    return a[0]-b[0]
    return a[1]-b[1]
})


result = result.map(i=>`${i[0]} ${i[1]}`);
console.log(result.join("\n"));