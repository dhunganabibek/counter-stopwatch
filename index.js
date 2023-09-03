class Timer{
    constructor(durationInput, startButton, pauseButton){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click',this.start);
        this.pauseButton.addEventListener('click', this.stop);
    }

    start = () => { 
        this.tick();
        this.interval = setInterval(this.tick, 1000);
    }

    stop = () => {
        clearInterval(this.interval);
    }

    tick = () => console.log('tick')     
}


const durationInput = document.querySelector('#duartion');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause')

const timer = new Timer(durationInput, startButton, pauseButton);
