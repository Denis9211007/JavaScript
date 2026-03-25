const quotes = [
    "Be yourself; everyone else is already taken.",
    "So many books, so little time.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "A room without books is like a body without a soul.",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams." ,
    "You only live once, but if you do it right, once is enough.",
    "Be the change that you wish to see in the world.",
    "In three words I can sum up everything I've learned about life: it goes on."
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
if(usedIndexes.size >= quotes.length){
    usedIndexes.clear()
}

    while(true){
        const randomIdx = Math.floor(Math.random()* quotes.length)

        if (usedIndexes.has(randomIdx)) continue
        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;

        usedIndexes.add (randomIdx)
        break;
    }
}