//시간초과 버전

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

const coordinate = data.map(i=> i.split(' '));

const pickX = coordinate.map(i=>parseInt(i[0]));
const min = Math.min.apply(null,pickX);
const max = Math.max.apply(null,pickX);

var result = [];
for(var i=min; i<=max; i++){
    var group =[];
    for(var j=0; j<pickX.length; j++){
        if(parseInt(coordinate[j][0])===i){
            group.push(coordinate[j]);
        }
    }
    if(group.length>1){
        const pickY = group.map(i=>parseInt(i[1]));
        const minY = Math.min.apply(null,pickY);
        const maxY = Math.max.apply(null,pickY);
        for(var s = minY; s<=maxY; s++){
            var miniGroup =[];
            for(var y = 0; y<pickY.length; y++){
                if(parseInt(group[y][1])===s){
                    miniGroup.push(group[y].join(" "));
                }
            }
            result.push(...miniGroup);
        }
    }else{
        group = group.map(i=>i.join(" "));
        result.push(...group);
    }
}
console.log(result.join("\n"));
