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

  var Deque = [];

  const push_frontX = (arr,x) =>{
    arr.unshift(x);
  }

  const push_backX = (arr,x) =>{
    arr.push(x);
  }

  const pop_front = (arr)=>{
    if(arr.length===0)
    return -1;
    return arr.shift();
  }

  const pop_back = (arr)=>{
    if(arr.length===0)
    return -1;
    return arr.pop();
  }

  const size = (arr)=>{
    return arr.length;
  }

  const empty = arr=>{
    if(arr.length===0)
    return 1;
    return 0;
  }

  const front =arr=>{
    if(arr.length===0)
    return -1;
    return arr[0];
  }

  const back =arr=>{
    if(arr.length===0)
    return -1;
    return arr[arr.length-1];
  }

  var result = [];
  for (const command of data){
    switch(command){
        case 'pop_front':
            result.push(pop_front(Deque));
        break;
        case 'pop_back':
            result.push(pop_back(Deque));
        break;
        case 'size' :
            result.push(size(Deque));
        break;
        case 'empty':
            result.push(empty(Deque));
        break;
        case 'front':
            result.push(front(Deque));
        break;
        case 'back':
            result.push(back(Deque));
        break;
        default:
            
            if(command.includes('front'))
            {const value = command.substr(11);
            push_frontX(Deque,value);
            }
            else{
                const value = command.substr(10);
                push_backX(Deque,value);
            }
        break;
    }
  }


  console.log(result.join("\n"));