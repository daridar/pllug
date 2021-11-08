//завдання про алфавіт
const numbers = [8, 5, 12, 12, 15]
 
 function alphabet(array){
   let charAt = array.map((value, index) => {
     return (value + 9).toString(36)
   })
   return charAt
 }
console.log(alphabet(numbers).join(''))

//об'єкт
//не виходить вивести саме values об'єкта, а тільки keys(
let obj = {a:2, b:3, c:'hello', d:-1, e:{num: 23, query: 2}, f:4};
let numbers = Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, typeof value !== 'string' && typeof value !== 'object' &&  value >= 0]));

var keys = Object.keys(numbers);

var filtered = keys.filter(function(key) {
    if(typeof key !== true)
    return numbers [key]
    typeof filtered == 'object';
});
let filt = Object.assign({}, filtered);
console.log(filt)

//camelCase