let randomNum = Math.floor(Math.random() * 100) + 1;

const predicts = document.querySelector('.predicts');
const lastAnswer = document.querySelector('.lastAnswer');
const lowOrHi = document.querySelector('.lowOrHi');

const predictsSubmit = document.querySelector('.predictsSubmit');
const predictsField = document.querySelector('.predictsField');

let pridictsCount = 1;
let resetButton;

<div class="answerParas">
  <p class="predicts"></p>
  <p class="lastanswer"></p>
  <p class="lowOrHi"></p>
</div>

{/* <label for="predictField">Enter a prediction: </label><input type="text" id="predictField" class="predictField">
<input type="submit" value="Submit prediction" class="predictsSumbit"> */}

function checkPredict() {
  alert('i am a potato');
}
checkGuess();

function checkpredict() {
    let userpredict = Number(predictField.value);
    if (predictsCount === 1) {
      predicts.textContent = 'Previous predicts: ';
    }
    predicts.textContent += userPredict + ' ';

    if (userPredict === randomNum) {
      lastAnswer.textContent = 'Congratulations! You got it right!';
      lastAnswer.style.backgroundColor = 'green';
      lowOrHi.textContent = '';
      setGameOver();
    } else if (predictCount === 10) {
      lastAnswer.textContent = '!!!GAME OVER!!!';
      setGameOver();
    } else {
      lastAnswer.textContent = 'Wrong!';
      lastAnswer.style.backgroundColor = 'red';
      if(userPredict < randomNum) {
        lowOrHi.textContent = 'Last guess was too low!';
      } else if(userPredict > randomNum) {
        lowOrHi.textContent = 'Last guess was too high!';
      }
    }
  
    predictCount++;
    predictField.value = '';
    predictField.focus();
  }

  predictCount === 1

  predictsSubmit.addEventListener('click', checkPredict);

  function setGameOver() {
    perdictField.disabled = true;
    predictSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
  }

  function resetGame() {
    predictCount = 1;
  
    const resetParas = document.querySelectorAll('.answerParas p');
    for (let i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    predictField.disabled = false;
    predictSubmit.disabled = false;
    predictField.value = '';
    predictField.focus();
  
    lastAnswer.style.backgroundColor = 'white';
  
    randomNum = Math.floor(Math.random() * 100) + 1;
  }