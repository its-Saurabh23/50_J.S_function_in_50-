 
const a = [1,23,4,5];

// remove the last element
const data = a.pop();

console.log(data);

const str = 'ABC'
// we do not have direct string conversion split->it spilt 
// each letter inot array->then reverse it -> join it again to make it string. 
const value = str.split('').reverse().join();
console.log(value);
