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


  const participants = [1,2,3,4,5,6,7,8,9];
  var positions = [];

  for(var i=0; i<data.length; i++){
    const [player] = participants.filter(it=>data[i].includes(it));
    const position = data[i].indexOf(player);
    if(position!==-1)
    positions.push([position,player]);
  }

  positions = positions.sort((a,b)=>a[1]-b[1]);

  var answer = [];
  for (var i=0; i<positions.length; i++){
    var rate = 1;
    const compare = [];
    const value = positions[i][0];
    for(var j=0; j<positions.length; j++){
      if((positions[j][0]>positions[i][0])&&(!compare.includes(positions[j][0])))
      {rate++;
      compare.push(positions[j][0])}
    }
    answer.push(rate);
  }

  console.log(answer.join("\n"));
  // console.log(arr);
  // const result = arr.sort((a,b)=>a[1]-b[1]).map(i=>i[0]);
  // console.log(result);
  // const upper = Math.max.apply(null,result);
  // const downer = Math.min.apply(null,result);
  // const middle = parseInt(upper/2);

  // const answer = result.map(i=>upper%2!==0?i>middle?i-((i-middle)*2):i+((middle-i)*2):i>=middle?i-((i-middle)*2)+1:i+((middle-i)*2)+1);
  // console.log(answer.join("\n"));