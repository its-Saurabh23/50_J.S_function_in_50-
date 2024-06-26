let number  = [1,2,3,4,5,6,7,8,9];
number.filter(index=>{
    if(index %2 == 1){
        console.log(index);
    }
})

let str = ['Apple','Banana','Mango','Grapes'];
var data ='appLe';   // case-sensitive
console.log(str.includes());


var value = str.map(id=>id.toLowerCase()).includes(data.toLowerCase());
console.log(value);
