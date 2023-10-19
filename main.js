let menu = document.getElementById('menu');
let select = document.getElementById('numCards');
let start = document.getElementById('start')

for (let i = 0; i <= 10; i+=2) {
    let n = 1*1;
    let op=document.createElement('option');

    op.value=n;
    op.innerHTML=n;

    select.appendChild(op);
    
}