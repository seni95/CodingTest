const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : require('path').join(__dirname, 'input.txt');

const [firstLine, secondLine,...data] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');


  const initial = firstLine.split(" ").map(i=>parseInt(i))[0];
  const destination = firstLine.split(" ").map(i=>parseInt(i))[1];
  const abs = Math.abs(initial-destination);


  const test =(value)=>{
    const check = Math.abs(destination-value);
    return check;
  }

  if(initial===destination)
  return console.log(0);

  const checkList = data.map(i=>test(i))
  const route = Math.min.apply(null,checkList);
  const result = abs<=route?abs:route+1;
  
  return console.log(result);