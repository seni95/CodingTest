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

  var stack =[];
  const push =(arr,x)=>{
    arr.unshift(x);
  //정수 X를 스택에 넣는 연산
  }
  const pop = (arr)=>{
    //스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다.
    const value = arr.shift();
    return value===undefined?-1:value;
  }
  
  const size= (arr)=>{
    return arr.length;
  }

  const empty =(arr)=>{
    if(arr.length===0)
    return 1;
    return 0;
  }

  const top =(arr)=>{
    if(arr.length===0)
    return -1;
    return arr[0];
  }

var result = [];
  for(var i=0; i<data.length; i++){
    var command = data[i];
    switch(command){
      case 'pop':
        result.push(pop(stack));
      break;
      case 'size':
        result.push(size(stack));
      break;
      case 'empty':
        result.push(empty(stack));
      break;
      case 'top':
      result.push(top(stack));
      break;
       default:
        const value = command.substr(5);
        push(stack,value)
        break;
    }

  }

  console.log(result.join("\n"));