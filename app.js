/*Variables*/
const timeLeftDisplay = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const startPauseButton = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')
const logsLeft = document.querySelectorAll('.log-left')
const logsRight = document.querySelectorAll('.log-right')
const carsLeft = document.querySelectorAll('.car-left')
const carsRight = document.querySelectorAll('.car-rigth')
let totalTime = 20;
let timer;
let timerOutcome;

/*Movement frog function*/
timeLeftDisplay.textContent = totalTime
let currentIndex = 76
let width=9
function moveFrog(e) {
    squares[currentIndex].classList.remove('frog')
    switch (e.key) {
        case 'ArrowLeft':
            if(currentIndex % width !==0) currentIndex-=1
            break
        case 'ArrowRight':
            if(currentIndex % width < width-1) currentIndex+=1
            break
        case 'ArrowUp':
            if(currentIndex - width >= 0) currentIndex-=width
            break
        case 'ArrowDown':
            if(currentIndex + width < width*width) currentIndex+=width
            break
    }
    squares[currentIndex].classList.add('frog')
}
 


/*Movement logs function*/

function autoMoveObjects() {
    totalTime--
    timeLeftDisplay.textContent = totalTime
    logsLeft.forEach(logsLeft => moveLogLeft(logsLeft))
    logsRight.forEach(logsRight => moveLogRight(logsRight))
    carsLeft.forEach(carsLeft => moveCarsLeft(carsLeft))
    carsRight.forEach(carsRight => moveCarsRight(carsRight))
}

function checkOutcome() {
    lose()
    win()
}

function lose() {
    if (squares[currentIndex].classList.contains('c1') ||
        squares[currentIndex].classList.contains('l4') ||
        squares[currentIndex].classList.contains('l5') ||
        totalTime <= 0
    ) {
        squares[currentIndex].classList.remove('frog')
        clearInterval(timer);
        clearInterval(timerOutcome);
        document.removeEventListener("keyup", moveFrog)
        resultDisplay.textContent='You lose'
    }
}

function win() {
    if (squares[currentIndex].classList.contains('ending-block')
    ) {
        clearInterval(timer);
        clearInterval(timerOutcome);
        document.removeEventListener("keyup", moveFrog)
        resultDisplay.textContent='You win'
    }
}

startPauseButton.addEventListener("click",()=> {
    if(timer) {
        clearInterval(timer);
        clearInterval(timerOutcome);
        document.removeEventListener("keyup", moveFrog)
        timer = null;
        timerOutcome = null;
    }else{
        timer = setInterval(autoMoveObjects, 1000);
        timerOutcome = setInterval(checkOutcome, 50);
        document.addEventListener("keyup", moveFrog)
    }
})

function moveLogLeft(logsLeft){
    switch (true) {
        case logsLeft.classList.contains('l1'):
            logsLeft.classList.remove('l1')
            logsLeft.classList.add('l2')
            break
        case logsLeft.classList.contains('l2'):
            logsLeft.classList.remove('l2')
            logsLeft.classList.add('l3')
            break
        case logsLeft.classList.contains('l3'):
            logsLeft.classList.remove('l3')
            logsLeft.classList.add('l4')
            break    
        case logsLeft.classList.contains('l4'):
            logsLeft.classList.remove('l4')
            logsLeft.classList.add('l5')
            break    
        case logsLeft.classList.contains('l5'):
            logsLeft.classList.remove('l5')
            logsLeft.classList.add('l1')
            break  
    }
}

function moveLogRight(logsRight){
    switch (true) {
        case logsRight.classList.contains('l1'):
            logsRight.classList.remove('l1')
            logsRight.classList.add('l5')
            break
        case logsRight.classList.contains('l2'):
            logsRight.classList.remove('l2')
            logsRight.classList.add('l1')
            break
        case logsRight.classList.contains('l3'):
            logsRight.classList.remove('l3')
            logsRight.classList.add('l2')
            break    
        case logsRight.classList.contains('l4'):
            logsRight.classList.remove('l4')
            logsRight.classList.add('l3')
            break    
        case logsRight.classList.contains('l5'):
            logsRight.classList.remove('l5')
            logsRight.classList.add('l4')
            break  
    }
}

function moveCarsLeft(carsLeft){
    switch (true) {
        case carsLeft.classList.contains('c1'):
            carsLeft.classList.remove('c1')
            carsLeft.classList.add('c2')
            break
        case carsLeft.classList.contains('c2'):
            carsLeft.classList.remove('c2')
            carsLeft.classList.add('c3')
            break
        case carsLeft.classList.contains('c3'):
            carsLeft.classList.remove('c3')
            carsLeft.classList.add('c1')
            break     
    }
}

function moveCarsRight(carsRight){
    switch (true) {
        case carsRight.classList.contains('c1'):
            carsRight.classList.remove('c1')
            carsRight.classList.add('c3')
            break
        case carsRight.classList.contains('c2'):
            carsRight.classList.remove('c2')
            carsRight.classList.add('c1')
            break
        case carsRight.classList.contains('c3'):
            carsRight.classList.remove('c3')
            carsRight.classList.add('c2')
            break     
    }
}



