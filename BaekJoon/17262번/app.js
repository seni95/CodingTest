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

const times = data.map(i=>i.split(" ").map(i=>Number(i)));

const latestStart = Math.max.apply(null,times.map(i=>i[0]));
const earlistEnd = Math.min.apply(null,times.map(i=>i[1]));
const result = earlistEnd-latestStart;
if(result>=0){
return console.log(0);
}
return console.log(-result);


// const stayTime = [];
// for(var i=0; i<times.length; i++){
//     const st = times[i][0];
//     const en = times[i][1];
//     var value = [];
//     for(var j=times[i][0]; j<=times[i][1]; j++){
//         value.push(j);
//     }
//     stayTime.push(value);
// }
// let check = [];
// for(var i=0; i<stayTime.length-1; i++){
//     check = stayTime[i].filter(x=>stayTime[i+1].includes(x));
// }

// if(check.length!==0){
//     return console.log(0)
// }

// const latestStart = Math.max.apply(null,times.map(i=>i[0]));
// var latestEnd = times.map(i=>i[1]);
// latestEnd = latestEnd.filter(i=>i<=latestStart);
// latestEnd = Math.min.apply(null,latestEnd);
// return console.log(latestStart-latestEnd);