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
    const test = data.map(i=>i.split(" ").map(i=>Number(i)));
    const arranged = test.sort((a,b)=>a[0]-b[0])
    var waitingTime = 0;
    for (const element of arranged)
    {   
    const arrive = element[0];
    const progress = element[1];

    waitingTime = waitingTime>arrive?waitingTime:arrive;
    waitingTime = waitingTime + progress;

    }

    return console.log(waitingTime);