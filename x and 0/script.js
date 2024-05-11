function lines(){
    let sizeW = Math.random() * 12;
    let duration = Math.random() * 3;
    let e = document.createElement('div');
    e.setAttribute('class', 'circle');
    document.body.appendChild(e);
    e.style.width = 2+sizeW+'px';
    e.style.left = Math.random() * + innerWidth + 'px';
    e.style.animationDuration = 2 + duration+ 's';

    setTimeout(function(){
        document.body.removeChild(e)
    },5000);
}

setInterval(function(){
    lines();

},200);





let counter = 0;
const cells = document.querySelectorAll('#field td');
const header = document.getElementById('header');


function isVictory() {
    const combos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let combo of combos) {
        if (cells[combo[0]].innerHTML == cells[combo[1]].innerHTML && cells[combo[1]].innerHTML == cells[combo[2]].innerHTML && cells[combo[0]].innerHTML != '') {
            return true;
        }
    }
    return false;
}


function tap(event) {
    if (counter % 2 == 0) {
        event.target.innerHTML = '<img src="cross-mark-emoji-clipart-xl.png" width=100>';
    }
    else {
        event.target.innerHTML = '<img src="circle.png" width=100>';
    }

    if (isVictory()) {
        for (let cell of cells) {
            cell.removeEventListener('click', tap);
        }
        if (counter % 2 == 0) {
            header.innerText = 'X is winner!';
        }
        else {
            header.innerText = 'O is winner!';
        }
    }
    else if (counter == 8) {
        header.innerText = 'Draw!';
    }

    counter++;
    event.target.removeEventListener('click', tap);
}


function startGame() {
    header.innerText = 'X and 0';
    counter = 0;
    for (let cell of cells) {
        cell.innerHTML = '';
        cell.addEventListener('click', tap);
    }
}

startGame()





