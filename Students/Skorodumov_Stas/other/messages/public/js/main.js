let strMessage = `Албания связывает диспозитивный имидж. Опыт разрушаем. Учитывая, что (sin x) ’ = cos x, возмущение плотности выслеживает конструктивный верлибр, на этих моментах останавливаются Л.А.Мазель и В.А.Цуккерман в своем "Анализе музыкальных произведений".`

document.getElementById('user-text').innerHTML = strMessage;

class yourTextarea {
 constructor(){  
  strMessage = strMessage.replace(/'/, '"');
  replaceText(strMessage)
 }
 
}

class yourName {
 constructor(event) {
  
   document.querySelector('#user-text').addEventListener('keyup', function (event) {
    if (document.getElementById('user-text').value.match(/\d/g) != null) {
     console.log('Имя содержит только буквы?');
   }
   
  });
}
    

/* class yourEmail {
 constructor() {

 }
}

class yourPhone {
 constructor() {

 }
} */