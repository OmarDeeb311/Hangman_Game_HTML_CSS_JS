//? Letter
let letters = "abcdefghijklmnopqrstuvwxyz";

//? Get Array From Letters
let lettersArray = Array.from(letters);

//? Select Letters Container
let lettersContainer = document.querySelector(".letters");

//? Generate Letters
lettersArray.forEach((element) => {
  // Create Span
  let span = document.createElement("span");

  //? Create Text Node
  let text = document.createTextNode(`${element}`);

  //? Append Letter To Span
  span.appendChild(text);

  //? Add Class to Span
  span.className = "letter-box";

  //? Append Span To Letters Containers
  lettersContainer.appendChild(span);
});

//? Object of Words + Categories
let words = {
  programming: [
    "css",
    "java",
    "sql",
    "html",
    "css",
    "javascript",
    "mysql",
    "python",
    "php",
  ],
  movies: ["titanic", "gravity", "inception", "psycho", "saw", "scream"],
  cars: ["kia", "ford", "bmw", "mercedes", "hyundai", "honda"],
  countries: ["jordan", "syria", "palestine", "egypt", "qatar", "america"],
};

//? Get Random Property
let Allkeys = Object.keys(words);

//? Get Random Number Depends on length of object
let randomPropNumber = Math.floor(Math.random() * Allkeys.length);

//? Get Random Key Name
let randomPropName = Allkeys[randomPropNumber];

//? Get Value Of Random Key
let randomPropValue = words[randomPropName];

//? Get Random Number Depends on length of key
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

//? Get Value Of random number
let randomValueValue = randomPropValue[randomValueNumber];

//? Get Category Span

let category = document.querySelector(".category span");
let categoryText = document.createTextNode(`${randomPropName}`);
category.appendChild(categoryText);

//? Create nummber of spans depend on value length
let guess = document.querySelector(".letters-guess");
for (let index = 0; index < randomValueValue.length; index++) {
  let sp = document.createElement("span");
  sp.classList.add("sp");
  sp.classList.add(`${randomValueValue[index]}`);
  sp.setAttribute("id", `${index}`);
  guess.appendChild(sp);
}
//? Get Clicked Element
let clicked_letter = document.querySelectorAll(".letters .letter-box");

//? Get Letters of Random Word
let random_letters = Array.from(randomValueValue);

//? When Click On Letter , check if Letter is found or not
let correct_letters = 0;
let wrong_letters = 0;

clicked_letter.forEach((element) => {
  element.addEventListener("click", (e) => {
    //? Add inActive Class To tell the user he pressed this button
    e.target.classList.add("inactive");
    let found = false;

    //? Search
    found = random_letters.some((element) => {
      return element === e.target.innerHTML;
    });

    //? if the letter is correct
    if (found) {
      document.querySelector(".correct").play();
      //? fill boxes with the correct letter
      let spans = document.querySelectorAll(`.${e.target.innerHTML}`);
      correct_letters += spans.length;
      spans.forEach((box) => {
        box.innerHTML = e.target.innerHTML;
      });

      //? Check If he get the whole word correct
      if (correct_letters === random_letters.length) {
        correctMsg(randomValueValue);
      }
    }
    //? if the letter is wrong
    else {
      document.querySelector(".wrong").play();
      wrong_letters++;
      switch (wrong_letters) {
        case 1:
          document.querySelector(".the-stand").classList.add("show");
          break;
        case 2:
          document.querySelector(".the-hang-1").classList.add("show");
          break;
        case 3:
          document.querySelector(".the-hang-2").classList.add("show");
          break;
        case 4:
          document.querySelector(".the-rope").classList.add("show");
          break;
        case 5:
          document.querySelector(".head").classList.add("show");
          break;
        case 6:
          document.querySelector(".body").classList.add("show");
          break;
        case 7:
          document.querySelector(".left-hand").classList.add("show");
          break;
        case 8:
          document.querySelector(".right-hand").classList.add("show");
          break;
        case 9:
          document.querySelector(".left-leg").classList.add("show");
          break;
        case 10:
          document.querySelector(".right-leg").classList.add("show");
          break;
      }
      if (wrong_letters === 10) {
        worngMsg(randomValueValue);
      }
    }
  });
});

//? Play Again Button
document.querySelector(".play_again").addEventListener("click", () => {
  location.reload();
});

function correctMsg(value) {
  let overlay = document.querySelector(".overlay");
  let pop_up = document.querySelector(".pop-up");
  let msg = document.createElement("h4");
  let key = document.createElement("h3");
  key.style.marginLeft = "15px";
  let word = document.createTextNode(value);
  key.appendChild(word);
  let text = document.createTextNode(`Correct :) , The Word Is : `);
  msg.appendChild(text);
  msg.appendChild(key);
  pop_up.appendChild(msg);
  overlay.classList.add("show");
  document.querySelector(".win").play();
}

function worngMsg(value) {
  let overlay = document.querySelector(".overlay");
  let pop_up = document.querySelector(".pop-up");
  let msg = document.createElement("h4");
  let key = document.createElement("h3");
  key.style.marginLeft = "15px";
  let word = document.createTextNode(value);
  key.appendChild(word);
  let text = document.createTextNode(`You Lose !! , The Word Is : `);
  msg.appendChild(text);
  msg.appendChild(key);
  pop_up.appendChild(msg);
  overlay.classList.add("show");
  document.querySelector(".lose").play();
}

//? Another Word Button
document
  .querySelector(".game-info .change-div .change")
  .addEventListener("click", () => {
    location.reload();
  });
