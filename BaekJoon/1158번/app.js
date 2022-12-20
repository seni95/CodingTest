const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : require('path').join(__dirname, 'input.txt');

const [data] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

  const input = data.split(" ").map(i=>parseInt(i));

  const yosepus = (x,arr)=>{
    var temp = x-1;
    var result = [];
    while(arr.length>0)
    {
    while(temp>=arr.length){
        temp-=arr.length;
    }    
    result.push(arr[temp]);
    arr = arr.filter(e=>e!==arr[temp]);
    temp+=(x-1);
    }
    return (result);
  }

  const makeArr = (x)=>{
    var arr =[];
    for(var i=01; i<=x;i++){
        arr.push(i);
    }
    return arr;
                    }


    var Arr = makeArr(input[0]);
    var result = yosepus(input[1],Arr);
    var refined ='<';
    for(var i=0; i<result.length; i++){
        if(i===result.length-1){
            refined+=`${result[i]}>`
        
        }else
        refined+=`${result[i]}, `

    } 
    console.log(refined);