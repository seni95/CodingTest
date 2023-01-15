const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : require('path').join(__dirname, 'input.txt');

const [firstLine, secondLine,thirdLine] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

var damaged = secondLine.split(" ").map(i=>Number(i));
var prepared = thirdLine.split(" ").map(i=>Number(i));
var common = damaged.filter(i=>prepared.includes(i));
//카약을 두개 가진 팀 중에서 카약이 파손된 팀
damaged = damaged.filter(i=>!common.includes(i));
prepared = prepared.filter(i=>!common.includes(i));

var afford = prepared.map(i=>[i-1,i+1]);
//카약을 가져온 팀이 빌려 줄 수 있는 팀의 경우의 수
var taken = [];
for (var i=0; i<afford.length; i++){
    for(var j=0; j<afford[i].length; j++){
        const index = damaged.indexOf(afford[i][j]);
        //만약 경우의 수 중에, damaged 안에 들어가있는 수가 있으면
        if(index!==-1){
            damaged.splice(index,1);
            break;
        }
    }
}
return console.log(damaged.length);

//시발 존나 오래걸렸다.
//코드가 잘못되었거나 검사할 게 있을 때는 
//그냥 눈으로 일일히 검사하는것보다 
//한줄 한줄씩 주석을 달아서 일일히 검사하는게
//훨씬 빠르고 정확하구나...!!
//앞으로는 틀리거나 검사할 거 있으면 무조건 한줄한줄씩 주석 달아봐야겠다.