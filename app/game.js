
const Game = function(tuner) {
    this.goalNote = tuner.noteStrings[0]
    this.tuner = tuner;
    this.scale =  [
        'C',
        'D',
        'E',
        'F',
        'G',
        'A',
        'B'
      ]
    this.displayNote()
  }

Game.prototype.update = function(note) {
    if (note.name == this.goalNote) {
        console.log(this.goalNote);
        this.goalNote = this.scale[getRandomInt(this.scale.length)] // this.tuner.noteStrings[getRandomInt(this.tuner.noteStrings.length)];
        this.displayNote()
    }
  }

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

Game.prototype.displayNote = function() {
    const gameDiv = document.querySelector('.game')
    gameDiv.innerHTML = this.goalNote;
}