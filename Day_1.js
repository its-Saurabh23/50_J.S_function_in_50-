 DAY 1 Code 

var b = 'c2f1asdk234f7dc5h98g89g';

var a= [];
var j = 0;
for(var i = 0; i<b.length; i++){
    if(parseInt(b[i])){
        a[j++] = b[i];
    }
console.log(Number(b[i]));    
}

console.log("Array Integer  value");

for(var j = 0; j<a.length; j++){
    console.log('Loop values ' + j);
    console.log(a[j]);
}
