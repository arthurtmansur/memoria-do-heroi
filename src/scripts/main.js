const menu = document.getElementById('menu');
const select = document.getElementById('numCards');
const start = document.getElementById('start')

function urlBuilder(number) { 
    number+="";

    number = number.padStart(2, '0');

    return `./images/heros/card${number}.jpeg`;
}

const card = new cardManager(urlBuilder);
const board = new BoardManager('board', 50, card);

for (let i = 4; i <= 10; i += 2) {
    let n = i * i;
    let op = document.createElement('option');

    op.value = n;
    op.innerHTML = n;

    select.appendChild(op);
}


start.addEventListener('click', () => {
    menu.classList.add('hidden');
    board.node.classList.remove('hidden');
    board.fill(select.value);
})

board.node.addEventListener('click',()=>{
    if(board.check()){
        setTimeout(() => {
         menu.classList.remove('hidden');
         board.node.classList.add("hidden")   
        }, 2000);
    }
})






