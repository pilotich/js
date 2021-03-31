const body = document.body;
let paragraph = ["Текст первый", "Текст второй", "Текст третий"];
let classes = ["a" , "b", "c"];

for (let i = 0; i < paragraph.length; i++){

    let p = document.createElement('p');

    p.innerHTML = paragraph[i];
    p.classList.add(classes[i]);

    body.append(p);

    if(i===1){
        setTimeout(function() { p.remove() }, 1000);
    }
}