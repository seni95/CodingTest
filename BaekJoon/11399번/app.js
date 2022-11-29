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

  const total = firstLine;
  const people = data[0].split(' ');
  var peopleArr = people.map(i=>parseInt(i));
    peopleArr.sort((a,b)=>a-b);
  var result = 0;
  let count = 0;
  peopleArr.map(i=>{
    var index = count;
    while(index!=-1){
        result+=peopleArr[index];
        index--;
    }
    count++;
  })

  console.log(result);