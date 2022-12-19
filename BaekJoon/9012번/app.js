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


  var result = [];
    for(const arr of data){
        const test = arr.split("");
        var count = 0;
        var stack = [];
        for (const element of test){
            if(element==="("){
            count++;
            } else if(element===")")
            {
              count--;
            }

            if(count<0)
            break;
        }
        if(count===0){
          result.push("YES")
        }else result.push("NO");
      
    }

    console.log(result.join("\n"));

