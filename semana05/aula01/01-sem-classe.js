const player1 = {
    name:"Heloisa",
    score:0,
    showscore(){
        console.log(`A jogadora ${this.name} tem ${this.score} ponto`)
    }
}

const player2 = {
    name:"Carla",
    score: 5,
    showscore(){
        console.log(`A jogadora${this.name} tem ${this.score} ponto`)
    }

}

player1.showscore()
player2.showscore()
