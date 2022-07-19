const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const body = document.querySelector("body")
const startButton = document.querySelector("[data-action='start']");
const stopButton = document.querySelector("[data-action='stop']");

const unactivateButton = function() {
    startButton.setAttribute("disabled","true;");
    };

const activateButton = function() {
    startButton.removeAttribute("disabled","true;");
    };
        
const colorChanger = function() {
    const randomIntegerFromInterval = (min, max) => {
        return(Math.floor(Math.random() * (max - min + 1) + min));
    };
    body.setAttribute("style", `background-color: ${colors[randomIntegerFromInterval(1,6)]};`);
    };

let timerId = null;

startButton.addEventListener('click', () => unactivateButton());

startButton.addEventListener('click', () => {timerId = setInterval(colorChanger, 1000)});

stopButton.addEventListener('click', () => activateButton());

stopButton.addEventListener('click', (e) => clearInterval(timerId));