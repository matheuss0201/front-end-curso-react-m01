class  player {
    constructor(n,s,){
        this.name = n 
        this.score = s
        
    }
    showscore(){
        console.log(`${this.name} tem ${this.score}  pontos `);
    

    }
    addpoints(){
        this.score = this.score + 100;
    }
}

const player1 = new player ("ana",500)
const player2= new player ("paulo",400)
const player3 = new player ("matheus",600)
const player4 = new player ("caio",10)
player1.showscore()
player2.showscore()
player3.showscore()
player4.showscore()

player2.addpoints()
player2.showscore()