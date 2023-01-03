
if(process.platform==='linux'){

    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    let input = [];
    
    rl.on('line', function (line) {
      input.push(line)
    })
      .on('close', function () {
      console.log(input);
      process.exit();
    });
    
    var [firstLine, ...data] = input;
    
} else{

const filePath =require('path').join(__dirname, 'input.txt');

var [firstLine, ...data] = require('fs')
  .readFileSync(filePath,"utf8")
  .trim()
  .replace(/\r/g, '')
  .split('\n').map(i=>parseInt(i));
    
}


var arranged = data.sort((a,b)=>b-a);
function chunk(data=[],size=1){
    const arr =[];
    for (let i=0; i<data.length; i+=size){
        arr.push(data.slice(i,i+size));
    }

    return arr;
}


function pay(arr){
    let total = 0;
    for(let i=0; i<arr.length; i++){
        arr[i][0]!==undefined?total+=arr[i][0]:total+=0;
        arr[i][1]!==undefined?total+=arr[i][1]:total+=0;
    }

    return total;

}
var packaged = chunk(arranged,3);
const result = pay(packaged);
return console.log(result);