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

const filter=  new Set(data);
const filtered = Array.from(filter);
const lengthArr = filtered.map(str=>str.length);
const maxLength = Math.max.apply(null, lengthArr);
const minLength = Math.min.apply(null, lengthArr);


var result = [];

for(let length = minLength; length<=maxLength; length++){
    const group = [];
    for(var i=0; i<filtered.length; i++){
        if(filtered[i].length===length){
                group.push(filtered[i]);
        }
    }
    if(group.length>1){
        result.push(...group.sort())
    }else{
        result.push(...group);
    }

}

console.log(result.join("\n"));

