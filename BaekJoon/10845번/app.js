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


  var Queues = [];

  const push=(arr,x)=>{
    arr.push(x)
  }

  const pop =(arr)=>{
    if(arr.length===0){
        return -1
    }
    return arr.shift();
  }

  const size =(arr)=>{
    return arr.length;
  }

  const empty = (arr)=>{
    if(arr.length===0)
    return 1;
    return 0;
  }

  const front = (arr)=>{
    if(arr.length===0)
    return -1;
    return arr[0];
  }

  const back = (arr)=>{
    if(arr.length===0)
    return -1;
    return arr[arr.length-1];
  }

  var result = [];
  for(var i=0; i<data.length; i++){
    const command=data[i];
    switch(command){
        case 'pop':
            result.push(pop(Queues));
        break;

        case 'size':
            result.push(size(Queues));
        break;

        case 'empty':
            result.push(empty(Queues));
        break;
        case 'front':
            result.push(front(Queues));
        break;
        case 'back':
            result.push(back(Queues));
        break;
        default:
            const value = command.substr(5);
            push(Queues,value);
            break;
    }
  }

  console.log(result.join("\n"));