let text_1 = document.getElementById('text-1'); 
let text_2 = document.getElementById('text-2');

const changeText = () => {
    let str = text_1.textContent;
    console.log(str);

    text_2.innerText = str.replace(/^'|(\s)'|'(\s)|'$/g, '$1"$2');
};