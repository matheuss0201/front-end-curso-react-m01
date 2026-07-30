class Player { 
    name = ""
    score = 0

    showScore() { 
        console.log(`${this.name} tem ${this.score} pontos`)
    } 
}

const player1 = new Player()

player1.name ="Ana"
player1.score = 5000

const player2 = new Player()

player2.name = "matheus"
player2.score = 2000

console.log(player1.name)
console.log(player1.score)
player1.showScore()
