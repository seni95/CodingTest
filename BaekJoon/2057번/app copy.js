const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : require('path').join(__dirname, 'input.txt');

const [number] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split(" ").map(i=>Number(i));



  function factorial(num){
    if(num<0){
        return -1;
    }else if(num===0){
        return 1;
    }else{
        return (num*factorial(num-1));
    }
  }

  const list = [];
  for(i=0; i<number; i++){
    const value = factorial(i);
    if(value>number){
        break;
    }
    list.push(value);
  }
  var check = 0;

  for(var i=list.length-1; i>=0; i--){
    const a = list[i];
    if((check+a)<=number)
    check+=list[i];
    
    if(check===number){
        return console.log("YES");
    }
    // if(value>number){
    //     return console.log("NO");
    // }
    }
    return console.log("NO");