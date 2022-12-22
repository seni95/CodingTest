const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : require('path').join(__dirname, 'input.txt');

const [firstLine,...data] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n').map(i=>parseInt(i));

var distances =[];
for(var i=1; i<data.length; i++){
const value = data[i]-data[i-1];
distances.push(value);
}

const getGCM = (n,m) =>{
if(m===0) return n;
return getGCM(m, n%m);
}

var gCM = distances[0];

for(const element of distances){
gCM = getGCM(gCM,element);

}


const total = data[data.length-1]-data[0];//나무가 심겨지는 전체 거리 

const totalTreeNum = parseInt(total/gCM)+1; //간격마다 나무를 심었을 때 필요한 갯수

const result = totalTreeNum-firstLine;
return console.log(result);

