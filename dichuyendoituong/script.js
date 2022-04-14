function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += 40;
        console.log('ok: ' + this.left);
    }
    this.moveLeft = function () {
        this.left -= 40;
        console.log('ok: ' + this.left);
    }
    this.moveDown =function (){
        this.top +=40;
        console.log('ok: ' + this.top);
    }
    this.moveUp = function (){
        this.top-=40;
        console.log('ok: '+ this.top);
    }
}

let hero = new Hero('meo.png', 0, 0, 200);

//
let flag = 'moveDown';

function setFlag() {
    if (hero.top <= 0 && hero.left < window.innerWidth - hero.size) {
        return 'moveRight';
    } else if (hero.left >= window.innerWidth - hero.size && hero.top < window.innerHeight - hero.size) {
        return 'moveDown';
    } else if (hero.top >= window.innerHeight - hero.size && hero.left > 0) {
        return 'moveLeft';
    } else if (hero.left <= 0 && hero.top > 0) {
        return 'moveUp';
    }
}



function start() {
    flag = setFlag();
    switch (flag) {
        case 'moveRight':
            hero.moveRight();
            break;
        case 'moveLeft':
            hero.moveLeft();
            break;
        case 'moveUp':
            hero.moveUp();
            break;
        case 'moveDown':
            hero.moveDown();
            break;
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 150)
}

start();
