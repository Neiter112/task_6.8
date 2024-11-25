const TrafficLight1 = document.querySelector('#TrafficLight1');
const TrafficLight2 = document.querySelector('#TrafficLight2');
const TrafficLight3 = document.querySelector('#TrafficLight3');

function makeGreen() {
    TrafficLight1.style.background = ('green');
    TrafficLight2.style.background = ('black');
    TrafficLight3.style.background = ('black');
    TrafficLight1.removeEventListener('click', makeGreen);
    TrafficLight2.removeEventListener('click', makeGreen)
    TrafficLight3.removeEventListener('click', makeGreen)
    TrafficLight1.addEventListener('click', makeYellow);
    TrafficLight2.addEventListener('click', makeYellow);
    TrafficLight3.addEventListener('click', makeYellow);
}

function makeYellow() {
    TrafficLight1.style.background = ('black');
    TrafficLight2.style.background = ('yellow');
    TrafficLight3.style.background = ('black');
    TrafficLight1.removeEventListener('click', makeYellow);
    TrafficLight2.removeEventListener('click', makeYellow)
    TrafficLight3.removeEventListener('click', makeYellow)
    TrafficLight1.addEventListener('click', makeRed);
    TrafficLight2.addEventListener('click', makeRed);
    TrafficLight3.addEventListener('click', makeRed);
}

function makeRed() {
    TrafficLight1.style.background = ('black');
    TrafficLight2.style.background = ('black');
    TrafficLight3.style.background = ('red');
    TrafficLight1.removeEventListener('click', makeRed);
    TrafficLight2.removeEventListener('click', makeRed)
    TrafficLight3.removeEventListener('click', makeRed)
    TrafficLight1.addEventListener('click', makeGreen);
    TrafficLight2.addEventListener('click', makeGreen);
    TrafficLight3.addEventListener('click', makeGreen);
}

TrafficLight1.addEventListener('click', makeGreen);
TrafficLight2.addEventListener('click', makeYellow);
TrafficLight3.addEventListener('click', makeRed);
