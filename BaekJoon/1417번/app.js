const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : require('path').join(__dirname, 'input.txt');

const [firstLine, ...data] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n').map(i=>parseInt(i));

  var mine = data[0];
  var counter = 0; 

  function updateArray(myArray, oldValue, newValue) {
    if (!myArray instanceof Array) return;
  
    const index = myArray.indexOf(oldValue);
    if (index !== -1) {
      myArray[index] = newValue;
    }

    mine = mine+1;
    counter++;
  }


  data.shift();
  while(data.find(el=>el>=mine)){
    const biggest = Math.max.apply(null,data);
    updateArray(data,biggest,biggest-1);
  }

console.log(counter);