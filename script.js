var str = prompt("Введіть будь-яке слово")

function change_register(str){
var newstr = ""
  for(var i = 0; i < str.length; i++){
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