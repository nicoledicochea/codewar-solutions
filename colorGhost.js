// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

let Ghost = function() {
    const random = Math.floor(Math.random() * 4) + 1
    if(random === 1) {
      this.color = 'white'
    } else if (random === 2) {
      this.color = 'yellow'
    } else if (random === 3) {
      this.color = 'red'
    } else {
      this.color = 'purple'
    }
}