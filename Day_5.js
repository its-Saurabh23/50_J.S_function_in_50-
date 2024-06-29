let arr = [1,2,3,4,5,6];

arr.push(0);  // add element at last

console.log(arr);

                       // will take two parameter first is search vlue,
                      // second will be index (if not specified it will
                      // take 0 baesd indexing) 
// element’s first occurrence in the array
const indexValue  = arr.indexOf(4,0); 

console.log("index " + indexValue);