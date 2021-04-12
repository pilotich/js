let td;
let table= document.querySelector('table');

table.onclick = function(event) {
    let target = event.target;
    if(target.tagName === 'TD'){
        ChangeColor(target);
        return 0;
    }
}

let ChangeColor = function(x) {
        if(td){
            td.classList.remove('ChangeColor')
        }

        td = x;
        td.classList.add('ChangeColor');
    }

