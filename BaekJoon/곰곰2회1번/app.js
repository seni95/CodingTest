// import fs from 'fs';

var fs = require('fs');

var input = fs.readFileSync("./input.txt").toString().split('\n');

var data = [];

for(let i=0; i<input.length; i++){
    if(input[i]!=''){
        data.push(input[i]);
    }
}


const totalCount = parseInt(data[0]);


var gifts = [];
for (var i=1; i<data.length; i++){
    gifts.push(parseInt(data[i].substring(2)));
}
///gifts 배열에 String 'D-' 뒤에 나오는 숫자를 넣어줌. 


var results = gifts.filter(i=> i<=90);
var result = parseInt(results.length);
console.log(result);