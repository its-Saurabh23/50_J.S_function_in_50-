
var arr = [1,2,3,4,5,6];

var newarr = [];
newarr = arr.slice(1,3);   // start index added ,end will not, no new array return 
console.log('List of array ' + newarr);
 
 
console.log('Lenght of Array '+ arr.length);

 
 
const firstelement =  arr.shift();  // no new array return 
console.log('firstelement ' + firstelement);
console.log('Lenght of Array '+ arr.length);