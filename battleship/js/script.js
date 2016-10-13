"use strict";

var numberOfBlocks = 7, temp, isSunk = false, i, temp, 
    shot, attempt = 0, hit = 0, tryAgain = false, pctOfHits,
    checked = [], ship = [];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

temp = getRandomInt(0, 5);
for (i = 0; i < 3; i++) {
    ship[i] = temp;
    temp++;
}

while (isSunk == false) {
    shot = prompt('Введи число от 0 до 6');
    if (shot < 0 || isNaN(shot) || shot > numberOfBlocks) {
        alert("Некорректные данные. Попробуй еще раз");
    } else {
        if (attempt == 0) {
            checked[attempt] = shot;
            attempt++;
            if ((shot == ship[0]) || (shot == ship[1]) || (shot == ship[2])) {
                alert('Ранил');
                hit++;
            } else {
                alert('Мимо');
            } 
        } else {
        
            for (i = 0; i < attempt; i++){
                if (shot == checked[i]) {
                    alert("Ты уже стрелял сюда");
                    tryAgain = true;
                } 
            }
            if (tryAgain == false) {
                checked[attempt] = shot;
                attempt++;
                if ((shot == ship[0]) || (shot == ship[1]) || (shot == ship[2])) {
                    alert('Ранил');
                    hit++;
                } else {
                    alert('Мимо');
                } 
            }
            tryAgain = false;        
        }
    }
    if (hit == 3){
        isSunk = true;
        pctOfHits = (3 / attempt) * 100;
        alert('Корабль уничтожен! Позиция:  [' + ship[0] + '-' + ship[1] + '-' + ship[2] + '] / Процент попадания: ' + pctOfHits + '%');
    }
}

