/*
  В index.html мы подключили файл lib.js. Он даёт вам доступ к двум библиотекам:

    esprima – http://esprima.org
    esquery – https://github.com/estools/esquery

    Они дотупны глобально и их можно использовать, чтобы проверить JS код студента.
*/

/*
  В этом комментарии напишите список, что бы вы проверили в коде студента:
  Проверить, есть ли теги <script></script> после тега <body>
  Если <script></script> внутри <body> есть, то, смотрим, что там внутри, а именно
  есть ли там alert('Привет, мир!')
*/

const errors = [];

// здесь напишите ваш код проверок
var script = document.querySelector('body script:first-child');
var attr = script.getAttribute('src');

console.log('Inner Text:', script.innerText);


if(script.getAttribute('src')!=null){
    errors.push('Нет тега <script> сразу после тега <body>');
}else{
    
    if(script.innerText.trim()!="alert('Привет, мир!');"){
        errors.push('Неверный код внутри тега script');  
    }
}

console.log('script text:',script);
console.log('attr:',attr);


console.log(errors);