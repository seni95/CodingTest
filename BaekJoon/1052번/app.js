var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var input = fs.readFileSync('./input.txt').toString().split(' ');

const total = parseInt(input[0]);
const k = parseInt(input[1]);

if(total>k){
var a=total;
var rest=[];
var i=0;
var newOne =1;
    while(k<=((a/2)/2)){
        i++;
        a = parseInt(a/2);
        rest.push(a%2);
    }
var cal = rest.indexOf(1);
var list = [];

while(cal != -1){
list.push(cal);
cal = rest.indexOf(1,cal+1);
}

var result = list.map(i=> {
    var miniResult = 1;
    for(var h=i; h<rest.length; h++){
        miniResult*=2;
    }
    return miniResult;
})

}else console.log(-1);

console.log(a);
console.log(rest);
console.log(rest.length);
console.log(i);
console.log(newOne);
console.log(list);
console.log(result);