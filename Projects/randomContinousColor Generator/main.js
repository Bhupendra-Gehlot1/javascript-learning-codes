function randomColorGenerator() {
    const colors="0123456789ABCDEF";
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {        
        randomColor+=(colors[parseInt(Math.random()*16)]);
    }
    return randomColor;
}
let interval;
function startChangingColor() {
    interval=setInterval(changeColor,1000);
    function changeColor() {
        document.body.style.backgroundColor=randomColorGenerator();
    }
}
function stopChangingColor() {
    clearInterval(interval);
    interval=null;
}

document.querySelector('#start').addEventListener('click',function(e){
    startChangingColor();
})
document.querySelector('#stop').addEventListener('click',function(e){
    stopChangingColor();
})