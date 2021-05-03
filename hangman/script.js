// using a loop, 
// make 26 buttons inside the alphabet div, 
// one for each letter 
for (let i = 0; i < 26; i++) {
    let button = document.createElement("BUTTON");
    let alphabetArea = document.getElementById("alphabet");
    alphabetArea.appendChild(button);
    button.innerText = String.fromCharCode(65 + i); 

    // give each button an event listener
    button.addEventListener('click', () => {
        console.log(button.innerText);

        if (!word.toUpperCase().includes(button.innerText)) {
            lives -= 1;
            lives_text.innerText = "You have " + lives + " lives left";
            
            if (lives <= 0) {
                lives_text.innerText = "You Lose"
                document.querySelectorAll("button").forEach(e => {
                    e.disabled = true;
                })
            }
        } else {
            let answerArea = document.getElementById("answer-area");
            // get the index of the letter in the word 
            let index = word.toUpperCase().indexOf(button.innerText);
            answerArea.innerText = answerArea.innerText.substring(0,index) + button.innerText + answerArea.innerText.substring(index + button.innerText.length);

            let lastindex = word.toUpperCase().lastIndexOf(button.innerText);
            answerArea.innerText = answerArea.innerText.substring(0,lastindex) + button.innerText + answerArea.innerText.substring(lastindex + button.innerText.length);

            if (answerArea.innerText.indexOf("_") == -1) {
                lives_text.innerText = "You Win!";
                document.querySelectorAll("button").forEach(e => {
                    e.disabled = true;
                })
            }
        }
    })
}

// make an object of categories, 
// the keys wil be the names of the cateegories
// the values of each key will be an array of whatever category randomly selected
// inside the randomly selected categories, will be a randomly selected word
let categories = {
    Cities : [
        "Baltimore",
        "NYC",
        "Houston",
        "LA",
    ],
    Games : [
        "Pacman",
        "Mario",
        "Sonic",
        "Zelda"
    ],
    Media : [
        "CNN",
        "Fox",
        "YouTube",
        "Reddit"
    ]
}
let chosen_category = document.getElementById("chosen-category");
// get a random category
let category = Object.keys(categories)[Math.floor(Math.random() * 3)];
chosen_category.innerText = " The Chosen Category is " + category;
// choose a random word
let word = categories[category][Math.floor(Math.random() * 4)];
/**
 * THE CHOSEN CATEGORY AND WORD
 * 
 * DEBUG:
 */ 
console.log(category);
console.log(word);

// count how many lives you have
// it should equal the amount of letters in the chosen word
let lives = word.length;
let lives_text = document.getElementById("lives");
lives_text.innerText = "You have " + lives + " lives left";

// make the answer area
for (let i = 0; i < word.length; i++) {
    let answerArea = document.getElementById("answer-area");
    answerArea.innerText += "_";
}

/**
 * this is where the game starts for the most part 
 * 
 * check the button clicked is contained in the chosen word
 * if it is, then replace the respective underscore with said letter
 * if not, subtract a life
 * 
 * once the game has already started, alert the user if they try to refresh the page
 */


 window.onbeforeunload = function() {
    return "Data will be lost if you leave the page, are you sure?";
  };