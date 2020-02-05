
class Satan {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = 2;
        this.vy = 1;
        this.offset = -55;
        this.veerconstante = .05;
        this.demping = .8;
    }

    maken(url) {
        this.satan = document.createElement('img');
        this.satan.src = 'afb/' + url + '.png';
        this.satan.alt = 'satan' + url;
        this.satan.className = 'ster';
        document.body.appendChild(this.satan);
        this.satan.style.left = this.x + 'px';
        this.satan.style.top = this.y + 'px';
    }

    verplaats(doelX, doelY, i) {
        this.vx += (doelX -this.x)*this.veerconstante;
        this.vy += (doelY -this.y)*this.veerconstante;
        this.vx *= this.demping;
        this.vy *= this.demping;
        this.x += this.vx;
        this.y += this.vy;
        this.satan.style.left = this.x + this.offset + 'px';
        this.satan.style.top = this.y + this.offset + 'px';
        this.satan.style.transform = 'rotate(' + i + this.x + 'deg)'

    }
}