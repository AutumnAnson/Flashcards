const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;


// Start with this function to simply display the card
function displayCard() {
    if(showingTerm) {
        let term = flashcards[currentIndex].term
        let cardContent = document.getElementById('card-content')
        cardContent.innerText = term
    }else{
        let definition = flashcards[currentIndex].definition
        let cardContent = document.getElementById('card-content')
        cardContent.innerText = definition
    }
}

// The rest of the code you will write is apart of event listeners
document.getElementById('prev-btn').addEventListener('click', ()=> {
    currentIndex--;
    if(currentIndex === -1){
        currentIndex = flashcards.length-1;
    }
    displayCard();
})
document.getElementById('next-btn').addEventListener('click', ()=> {
    currentIndex++;
    if(currentIndex === flashcards.length){
        currentIndex = 0;
    }
    displayCard();
})
document.getElementById('flashcard').addEventListener('click', ()=> {
    if(showingTerm) {
        showingTerm=false;
    }else {
        showingTerm=true;
    }
    displayCard();
})
document.getElementById('add-card-btn').addEventListener('click', ()=> {
    let newTerm = document.getElementById('new-term').value;
    let newDefinition = document.getElementById('new-definition').value;
    flashcards.push({
        term: newTerm,
        definition: newDefinition
    })
    document.getElementById('new-term').value = "";
    document.getElementById('new-definition').value = "";

})


// This line will display the card when the page is refreshed
window.onload = displayCard;