let scoreH2 = document.getElementById('score');
let timeLeftH2 = document.getElementById('timeLeft');
let startGameButton = document.getElementById('startNewGame');
let pauseGameButton = document.getElementById('pauseGame');
let squares = document.querySelectorAll('.square');
let gameMusic = new Audio("Assets/gameMusic.mp3");
let hitMusic =new Audio('Assets/hitMusic.mp3');
let score =0;
let timeLeft =60; 
let hitPosition =null;
let timerId =null;
let randomMoleId =null;
let grid = document.getElementsByClassName('grid')[0];

gameMusic.play();
//randomly place mole
function randomMolePosition(){
    squares.forEach(square =>{
    square.classList.remove('mole');
    })
    let randomSquare = squares[Math.floor(Math.random()*squares.length)];
    randomSquare.classList.add('mole');
    hitPosition = randomSquare.id;
}
function countDown(){
    timeLeft--;
    timeLeftH2.innerText = `Time Left: ${timeLeft}`;
    if(timeLeft === 0){
        clearInterval(timerId);
        clearInterval(randomMoleId);
        grid.style.display = 'none';
    }
}
randomMolePosition();
function startGame(){
    score = 0;
    timeLeft = 60;
    gameMusic.play();
    scoreH2.innerText = `Score: 0`;
    timeLeft.innerText = `Time Left: 60`;
    pauseGameButton.style.display = 'inline-block';
    grid.style.display = 'flex';
    pauseGameButton.innerHTML = `Pause`;
    //callBack Function -> a function who is called by another function
    clearInterval(timerId);
    clearInterval(randomMoleId);
    randomMoleId =setInterval(randomMolePosition, 800);
    timerId = setInterval(countDown, 1000);
}
function pauseResume(){
    if (pauseGameButton.textContent ==='Pause'){
        gameMusic.pause();
        clearInterval(timerId);
        clearInterval(randomMoleId);
        timerId = null;
        randomMoleId = null;
        pauseGameButton.textContent = 'Resume';
    }else{
        gameMusic.play();
        randomMoleId =setInterval(randomMolePosition, 800);
        timerId = setInterval(countDown, 1000);
        pauseGameButton.textContent = 'Pause';
    }
}
squares.forEach(square=>{
    square.addEventListener('mousedown',()=>{
        if(timerId !== null){ 
            if(square.id===hitPosition){
                hitMusic.play();
                setTimeout(()=>{
                    hitMusic.pause();
                },1000);
                score++;
                scoreH2.innerText = `Score: ${score}`;
                hitPosition=null;
            }
        }
    });
})




startGameButton.addEventListener('click',startGame);
pauseGameButton.addEventListener('click',pauseResume);



const slider = document.querySelector('.slider');
const level = slider.querySelector('.level');

level.addEventListener('input', function() {
  const value = this.value;
  console.log(`Volume set to ${value}`);
});




// get the toggle button element and the body element
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// add an event listener to toggle the dark mode
darkModeToggle.addEventListener('change', () => {
  // check if the toggle button is checked or not
  if (darkModeToggle.checked) {
    // activate the dark mode by adding a class to the body element
    body.classList.add('dark-mode');
  } else {
    // deactivate the dark mode by removing the class from the body element
    body.classList.remove('dark-mode');
  }
});
