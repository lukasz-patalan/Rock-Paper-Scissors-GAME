
const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0

}

const game = {
    playerHand: "",
    aiHand: "",
}


const hands = [...document.querySelectorAll('.select img')]


hands.forEach(hand => hand.addEventListener('click', handSelection))

function handSelection() {


    hands.forEach(hand => hand.style.boxShadow = '')
    this.style.boxShadow = "0 0 0  4px yellow"
    game.playerHand = this.dataset.option
}

document.querySelector('.start').addEventListener('click', startGame)

function startGame() {

    if (game.playerHand === "") { //1.
        return alert("wybierz dłoń")
    }


    aiChoice()

    function aiChoice() {
        const randomAiChoice = hands[Math.floor(Math.random() * 3)].dataset.option
        game.aiHand = randomAiChoice
    }

    const gameResault = checkResault(game.playerHand, game.aiHand)
    console.log(gameResault)

    function checkResault(player, ai) {
        console.log(player, ai)
        if (player === ai) {
            return 'draw'
        } else if ((player === "papier" && ai === "kamień") ||
            (player === "kamień" && ai === "nożyczki") ||
            (player === "nożyczki" && ai === "papier")) {
            return "win!"
        } else {
            return "loss!..."
        }
    }

    function publishResult() {
        document.querySelector('[data-summary="your-choice"]').textContent = game.playerHand
        document.querySelector('[data-summary="ai-choice"]').textContent = game.aiHand

        gameSummary.numbers++
        document.querySelector('p.numbers span').textContent = gameSummary.numbers
        if (gameResault === "win!") {
            gameSummary.wins++
            document.querySelector('p.wins span').textContent = gameSummary.wins
            document.querySelector('h2 span').textContent = "Ty!"
        } else if (gameResault === "loss!...") {
            gameSummary.losses++
            document.querySelector('p.losses span').textContent = gameSummary.losses
            document.querySelector('h2 span').textContent = "Komputer..."
        } else {
            gameSummary.draws++
            document.querySelector('p.draws span').textContent = gameSummary.draws
            document.querySelector('h2 span').textContent = "Remis"
        }

    }
    publishResult()

}

