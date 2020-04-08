// №1

let str = "И дни ходит Марко, и ночи в лесу над рекою Дунаем, всё ищет, всё стонет: 'Где фея?' Но волны смеются: 'Не знаем'. Но он закричал им: 'Вы лжёте! Вы сами играете с нею!'";

function replaceText(text) {
    let regexp = /'/g;
    text = text.replace(regexp, '"');
    return text;
}

replaceText(str)

//№2

let str = "'Один за всех и все за одного'- сказал Д'Артаньян";

function replaceText(text) {
    let regexp = /'\B|\B'/g;
    text = text.replace(regexp, '"');
    return text;
}

replaceText(str)

