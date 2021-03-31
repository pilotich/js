/*const age = prompt('how old r u?');
const positive = prompt('how r u?');
const step = prompt('where r u?');
let i = 0;

if (+age === 18){
   i++;
}
if (positive === 'nice'){
    i++;
}
if (step === 'courses'){
    i++;
}

alert(i);*/

const body = document.body;
const div = document.createElement('div');
div.classList.add('main');
const ul =  document.createElement('ul');

let text = ["Раз", "Два", "Три", "Четыре"];

for (let i = 0; i < text.length; i++){
    let li = document.createElement('li');
    li.innerHTML = text[i];
    ul.append(li);
}

body.append(div);
div.append(ul);