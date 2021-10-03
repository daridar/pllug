//Пустий об'єкт
const a = {};
//Пустий об'єкт без прототипу
const obj = Object.create(null);
let user = new Object();
//Додані поля до об'єкта різними способами 
a.number = "One";
a['name'] = Tom;
//
const n = "Nationality";
a[n] = "American";
//
let c = {};
let t = {type: 'clock' };
let m = {mode: 'off'};
let result = {
    type: t.type,
    mode: m.mode
};

Object.assign({}, c, t, m, );//1. мутує перший аргумент, що був переданий (пустий об'єкт); 2.чим правіший аргумент, тим він має більший пріоритет

//Пустий масив
let arr = []; 
let arr = new Array();

//Пустий масив довжиною 100500
let a = [];
a.length = 100500;
console.log(a);
//або
let a = new Array(100500);
console.log(a);

//Масив з декількома елементами
let array = [12, 14, 16];

//Зробити заповнений масив пустим
//1
let array = [12, 14, 16];
array.length = 0;
console.log(array);
//2
let array = [12, 14, 16];

while (array.length > 0) {
    array.shift();
}
console.log(array);

//задача №1
let arr = [1, 2, 3, 4, 5];
let arr1 = arr.splice(0, 1)// в методі splice() параметр start вказує на індекс того елемента в масиві, що потрібно видалити 
console.log(arr);

let arr = [1, 2, 3, 4, 5];
let iforrem = function (i){
    arr.splice(i, 1);
    return arr;
    }
console.log(iforrem(0));

//задача №2

//задача №3

//задача №4
function conCat () {
    let arr = [1, 2, 3]
    let arr1 = [4, 5, 6]
let arr2 = arr.concat(arr1);
return arr2;}
console.log(conCat())

//задача №5
const arr1 = [1, 3, 5];
const arr2 = arr1.map(function(item) {
  return Math.pow(item, 3);
});
console.log(arr2);

//
let a = [1, 2, 3];
let b = [4, 5, 6];

const c = a.concat(b) 
console.log(c);

//вивести непарні елементи масиву
function number () {
let arr1 = [1, 3, 5, 4, 12, 8, 10];
let arr2 = arr1.filter((value) => value % 2 === 1) 
return arr2; }
console.log(number())

//вивід цілих чисел
let arr = [1, 1.23, 5.6, 67, 78.98, 90];

var newarr = arr.filter((i) => {
   return (i ^ 0) === i;
})
console.log(newarr);

//функція, яка нічого не повертає
function sayName (name, surname) {
    let str = "Ваше ім'я:" + name + " " + "Ваше прізвище:" + surname;
console.log(str);
}