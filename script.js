let str = prompt("Введіть будь-яке слово")

function change_register(str){
let newstr = ""
  for(let i = 0; i < str.length; i++){
     if (str.charAt(i) === str.charAt(i).toLowerCase()){
        newstr += str.charAt(i).toUpperCase();
     }
     else {
       newstr += str.charAt(i).toLowerCase()
     }
  }
  return newstr;
}
alert(change_register(str));

//скрипт (код, що призведе до краху вкладки)
//1
let a = 0;
while (a < 5) {
  a += 0.001;
  if (a > 4.5 && a < 4.55) alert(a);
}
//2
let a = 5;
while (a > 2) {
  a++;
  alert('?');
}
