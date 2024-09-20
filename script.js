// app.js
let timerInterval;
let elapsedTime = 0;
let isRunning = false;

const timeDisplay = document.getElementById('time-display');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

// Event listeners
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;
        resetBtn.disabled = false;
        timerInterval = setInterval(updateTime, 1000);
    }
}

function stopTimer() {
    if (isRunning) {
        isRunning = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;
        clearInterval(timerInterval);
    }
}

function resetTimer() {
    stopTimer();
    elapsedTime = 0;
    timeDisplay.textContent = '00:00:00';
    resetBtn.disabled = true;
}

function updateTime() {
    elapsedTime++;
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;
    
    timeDisplay.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(unit) {
    return unit < 10 ? '0' + unit : unit;
}

// Initial state
stopBtn.disabled = true;
resetBtn.disabled = true;
