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

const minDistance = Math.min.apply(null,distances);
const checkDevide = (arr,x)=>{
    for (var i=0; i<arr.length; i++){
        if(arr[i]%x!==0) return false;
    }
    return true;
}

var value=false;
var checkNum = minDistance;
var checkNumArr = Math.ceil(Math.sqrt(checkNum));
while(value!==true){
    
    value = checkDevide(distances,checkNum);
    if(value===false)
    {checkNum=checkNumArr;
    checkNumArr--;}
}



const total = data[data.length-1]-data[0];//나무가 심겨지는 전체 거리 

const totalTreeNum = parseInt(total/checkNum)+1; //간격마다 나무를 심었을 때 필요한 갯수

const result = totalTreeNum-firstLine;
return console.log(result);

