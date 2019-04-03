/*
  В этом комментарии напишите список, что бы вы проверили в коде студента:
  
  1)Проверить в index.html, задан (присвоен) ли div'у класс content

  2) Проверить, есть ли в style.css этот селектор, и если есть, то есть ли в нём свойство height со значением 100vh  
*/

const errors = [];

// здесь напишите ваш код
var elem = document.getElementsByClassName('content')[0];
console.log('elem=',elem);
if(elem.length!=0){
    console.log('Есть такой элемент');
    //var height = window.getComputedStyle(elem, null).height;
    var height = elem.offsetHeight;
    

    

    if(height==window.innerHeight){
        console.log('100vh');
    }else{
        errors.push('Ошибка! Неверное значение высоты элемента');
    }
    
}else{
    errors.push('Ошибка! Нет элемента с классом content');
    //errors = 'Ошибка! Нет элемента с классом content';
}

console.log(errors);