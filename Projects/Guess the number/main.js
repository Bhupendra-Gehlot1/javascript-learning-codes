let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const input = document.querySelector("#inputNum");
const submit = document.querySelector("#submitBtn");
let GuessVal = document.querySelector(".GuessVal");
let previousVal = document.querySelector(".previousVals");
let lowOrHigh = document.querySelector('.lowOrHigh')

let Guesses = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    let inputVal = parseInt(input.value);
    if (validate(inputVal) && Guesses <= 10) {
      GuessVal.innerHTML = `${10 - Guesses}`;
      Guesses++;
      previousVal.textContent += `${inputVal}, `;      
      displayMessage(inputVal);
      input.value = "";
    } else {        
      endGame();
    }
  });
}
function validate(number) {
  if (isNaN(number)) {
    alert("please enter a number");
  } else if (number < 1) {
    alert("please enter a number greater than 1");
  } else if (number > 100) {
    alert("please enter a number less than 100");
  } else {
    return true;
  }
}

function displayMessage(number) {
  if (number === randomNumber) {
    lowOrHigh.innerHTML= '<h2>Correct Answer!!!</h2>'    
    lowOrHigh.style.display = "flex"
    lowOrHigh.style.flexDirection = "column"
    endGame();
  }else if(number<randomNumber){
    lowOrHigh.innerHTML= '<h2>TOO Low!!!</h2>'
    lowOrHigh.style.display = "flex"
    lowOrHigh.style.flexDirection = "column"
  }else if(number>randomNumber){
    lowOrHigh.innerHTML= '<h2>TOO High!!!</h2>'
    lowOrHigh.style.display = "flex"
    lowOrHigh.style.flexDirection = "column"
  }
}

function endGame() {    
    playGame=false;    
    lowOrHigh.innerHTML=`Game over! Correct answer is: ${randomNumber}`;
    input.setAttribute('disabled','')    
    const newGame=document.createElement('button');
    newGame.innerHTML= `<h2 id="newGameId">Start New Game</h2>`;
    lowOrHigh.appendChild(newGame)
    startGame();
}

function startGame() {
    const newGameButton = document.querySelector('#newGameId');
    newGameButton.addEventListener('click',function(e){
        e.preventDefault();
        randomNumber= parseInt(Math.random() * 100 + 1);        
        input.value="";
        previousVal.innerHTML="";
        Guesses=1;
        playGame=true;
        GuessVal.innerHTML=`10`
        input.removeAttribute('disabled')
        lowOrHigh.innerHTML="";
        lowOrHigh.style.display = "none"    
    })    
}
