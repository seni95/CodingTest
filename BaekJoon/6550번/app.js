const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : require('path').join(__dirname, 'input.txt');

const data = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');


const check = (el)=>{
    const list = el.split(" ");
    const origin = list[0];
    var test = list[1];

    for(var i =0; i<origin.length; i++){
        if(test.indexOf(origin[i])!==-1){
            test=test.substr(test.indexOf(origin[i])+1);
        }else{
            return "No";
        }
    }
    return "Yes";

}

for(const i of data){
   console.log(check(i));
}