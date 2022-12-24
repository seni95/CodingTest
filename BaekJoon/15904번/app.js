const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : require('path').join(__dirname, 'input.txt');

const [firstLine] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');
var test = firstLine;
var first =test.indexOf('U');
var failed = 'I hate UCPC';
if(first===-1){
    return console.log(failed);
}
test = test.substr(first+1);
var second = test.indexOf('C');
if(second===-1){
    return console.log(failed);
}
test = test.substr(second+1);
var third = test.indexOf('P');
if(third===-1){
    return console.log(failed);
}
test = test.substr(third+1);
var fourth = test.indexOf('C');
if(fourth===-1){
    return console.log(failed);
}
return console.log('I love UCPC')
