const tilt = document.querySelector('.box-js');

let persp = 600;

const height = tilt.clientHeight;
const width = tilt.clientWidth;



const tiltMoveHtml = (x, y) => `perspective(${persp}px)
                                scale(1.1)
                                rotateX(${x}deg)
                                rotateY(${y}deg)`;


tilt.addEventListener('mousemove', (e) =>
{
    const {layerX, layerY} = e;

    const mult = 50;

    const xRotate = mult * ((layerX - width / 2) / width);
    const yRotate = - mult * ((layerY - height / 2) / height);

    tilt.style.transform = tiltMoveHtml(xRotate, yRotate);

    
});

tilt.addEventListener('mouseout', () => 
tilt.style.transform = tiltMoveHtml(0, 0) );