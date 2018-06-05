const hello = (name) => {
    console.info("What's Up,"+name);
}

const changeColor = () => {
    let circle= document.getElementById("yellowcircle");
    
    let randomNumber=Math.random();

    if (randomNumber > 0.5){
        circle.style.backgroundColor="yellow";
    } else {
        circle.style.backgroundColor="purple";
    }
   
}
const moveRandom = () => {
    let circle= document.getElementById("yellowcircle");
    let randomNumberOne=Math.random();
    let randomNumberTwo=Math.random();


    circle.style.top= 500* randomNumberOne;
    circle.style.left=200*randomNumberTwo;
}

const move= (direction) => {
    let circle= document.getElementById("yellowcircle");

    let rect= circle.getBoundingClientRect();

    let top = circle.style.top;
    let left= circle.style.left;

    if (direction == 'ArrowRight'){
        circle.style.left = rect.x +5;
    }else if (direction == 'ArrowLeft'){
        circle.style.left= rect.x -5;
    }else if (direction == 'ArrowUp'){
        circle.style.top= rect.y -5;
    }else if (direction == 'ArrowDown'){
        circle.style.top= rect.y +5;
    }
}
const init = () => {
    
    setInterval(() => {
        changeColor()
        moveRandom()
        // move('R')
        // move('L')
        // move('U')
        // move ('D')
    },200 )
    
}

window.onload = init

document.onkeydown= e => {
    console.info(e)
        move(e.key)
}