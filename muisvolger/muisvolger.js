const deAfbeeldingen = ['satan', 'satan2', 'satan3'];
let muisX = 0;
let muisY = 0;
const alleVolgers = []; //hierin komen alle gemaakte sterren

const haalMuisPositie = (e) => {
    muisX = e.clientX;
    muisY = e.clientY;
    document.getElementById('xpos').innerText = muisX;
    document.getElementById('ypos').innerText = muisY;
}

for (i = 0; i < deAfbeeldingen.length; i++) {
    let lucifer = new Satan(100 + 130 * i, 50 + 80 * i);
    lucifer.maken(deAfbeeldingen[i]);
    alleVolgers.push(lucifer);
    console.log(lucifer)
}
window.addEventListener('mousemove', haalMuisPositie);


const bewegen = () => {
    // console.log('help')
    const verplaats = requestAnimationFrame(() => {
        alleVolgers[0].verplaats(muisX,muisY,i);
        for (let i=1; i < alleVolgers.length; i++) {
            alleVolgers[i].verplaats(alleVolgers[i-1].x, alleVolgers[i-1].y, i);
        }
        bewegen();
    })
}
bewegen();