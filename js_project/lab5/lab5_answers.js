/*
Name: Peter Jungers
Date: 11/22/22
Course: Intro to JS
Assignment: Lab 5
Description: Contains answer functions for lab5_main.js
*/


function answer1(answers) {
let answer1 = document.getElementById("answer-1");
    if (
        (answers
        ["Part One: The original named colors"]
        ["Which of the following colors are original named HTML colors? (Check all that apply.)"]
        ["Maroon"]
        &&
        answers
        ["Part One: The original named colors"]
        ["Which of the following colors are original named HTML colors? (Check all that apply.)"]
        ["Teal"]
        &&
        answers
        ["Part One: The original named colors"]
        ["Which of the following colors are original named HTML colors? (Check all that apply.)"]
        ["Yellow"]
        === true)
        &&
        (answers
        ["Part One: The original named colors"]
        ["Which of the following colors are original named HTML colors? (Check all that apply.)"]
        ["Orange"]
        === false)
    ) {
        answer1.style.backgroundColor = "orange";
        answer1.innerHTML =
            `<span class='bold'>1. Correct! </span>
            Maroon, Teal, and Yellow are original named colors`;
    } else {
        answer1.style.removeProperty("background-color");
        answer1.innerText = "1. Sorry, try again.";
    }
}


function answer2(answers) {
    let answer2 = document.getElementById("answer-2");
    let answerList = document.getElementById("answer-list"); // Parent ul
    if (answers
        ["Part One: The original named colors"]
        ["Of the original 16 named colors, how many can be described as a shade of green?"]
        [4]
        === true) {
        answer2.innerHTML =
            "<span class='bold'>2. Correct! </span>Here are the four colors:";

        /* Four li elements containing the four colors are created upon a
        * correct answer. If li element with id="teal" exists, then all four
        * elements exists, so elements are not recreated upon subsequent
        * checkAnswers() button events. If answer2 is changed to an incorrect
        * answer and button event again happens, the four li elements are
        * removed. They are created again with a change back to the correct
        * answer and another button event. */
        if (!document.getElementById("teal")) {

            let teal = document.createElement("li");
            teal.setAttribute("id", "teal");
            answerList.insertBefore(teal, answerList.children[2]);
            teal.style.backgroundColor = "teal";
            teal.innerText = "Teal";
            teal.classList.add("indent");

            let olive = document.createElement("li");
            olive.setAttribute("id", "olive");
            answerList.insertBefore(olive, answerList.children[2]);
            olive.style.backgroundColor = "olive";
            olive.innerText = "Olive";
            olive.classList.add("indent");

            let lime = document.createElement("li");
            lime.setAttribute("id", "lime");
            lime.style.backgroundColor = "lime";
            lime.innerText = "Lime";
            answerList.insertBefore(lime, answerList.children[2]);
            lime.classList.add("indent");

            let green = document.createElement("li");
            green.setAttribute("id", "green");
            green.style.backgroundColor = "green";
            green.innerText = "Green";
            answerList.insertBefore(green, answerList.children[2]);
            green.classList.add("indent");
        }
    } else if (document.getElementById("teal")){
        answer2.innerText = "2. Sorry, try again.";
        document.getElementById("teal").remove()
        document.getElementById("olive").remove()
        document.getElementById("lime").remove()
        document.getElementById("green").remove()
    } else {
        answer2.innerText = "2. Sorry, try again.";
    }
}


function answer3(answers) {
    let answer3 = document.getElementById("answer-3");
    if (answers
        ["Part One: The original named colors"]
        ["As explained in Lab 3, all named colors can also be referenced by what type of number code?"]
        ["numberCode"]
        === "hexadecimal") {
        answer3.innerHTML =
            "<span class='bold'>3. Correct! </span>Hexadecimal";
    } else {
        answer3.innerText = "3. Sorry, try again.";
    }
}


function answer4(answers) {
    let answer4 = document.getElementById("answer-4");
    if (
        // Checks for Aqua + Red
        (
         (
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["Aqua"]
          === true
          &&
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["Red"]
          === true
         )
         &&
         (
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["Black"]
          === false
          &&
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["White"]
          === false
          &&
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["Blue"]
          === false
          &&
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["Yellow"]
          === false
          &&
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["Fuchsia"]
          === false
          &&
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["Lime"]
          === false
         )
        )
    ) {
        answer4.style.backgroundColor = "gray";
        answer4.innerHTML =
            `<span class="bold">4. Correct! </span>
            Aqua + Red = Gray. Can you guess the three other combinations?`;
    } else if (
        // Checks for Black + White
        (
         (
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["Black"]
          === true
          &&
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["White"]
          === true
         )
         &&
         (
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["Aqua"]
          === false
          &&
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["Red"]
          === false
          &&
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["Blue"]
          === false
          &&
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["Yellow"]
          === false
          &&
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["Fuchsia"]
          === false
          &&
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["Lime"]
          === false
         )
        )
    ) {
        answer4.style.backgroundColor = "gray";
        answer4.innerHTML =
            `<span class="bold">4. Correct! </span>
            Black + White = Gray. Can you guess the three other combinations?`;
    } else if (
        // Checks for Yellow + Blue
        (
         (
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["Blue"]
          === true
          &&
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["Yellow"]
          === true
         )
         &&
         (
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["Aqua"]
          === false
          &&
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["Red"]
          === false
          &&
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["Black"]
          === false
          &&
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["White"]
          === false
          &&
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["Fuchsia"]
          === false
          &&
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["Lime"]
          === false
         )
        )
    ) {
        answer4.style.backgroundColor = "gray";
        answer4.innerHTML =
            `<span class="bold">4. Correct! </span>
            Blue + Yellow = Gray. Can you guess the three other combinations?`;
    } else if (
        // Checks for Fuchsia + Lime
        (
         (
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["Fuchsia"]
          === true
          &&
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["Lime"]
          === true
         )
         &&
         (
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["Aqua"]
          === false
          &&
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["Red"]
          === false
          &&
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["Black"]
          === false
          &&
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["White"]
          === false
          &&
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["Blue"]
          === false
          &&
          answers
          ["Part Two: Mixing the original named colors"]
          ["What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)"]
          ["Yellow"]
          === false
         )
        )
    ) {
        answer4.style.backgroundColor = "gray";
        answer4.innerHTML =
            `<span class="bold">4. Correct! </span>
            Fuchsia + Lime = Gray. Can you guess the three other combinations?`;
    } else {
        answer4.style.removeProperty("background-color");
        answer4.innerText = "4. Sorry, try again.";
    }
}


function answer5(answers) {
    let answer5 = document.getElementById("answer-5");
    if (answers
        ["Part Two: Mixing the original named colors"]
        ["Lime + Red = what original named color?"]
        ["LimePlusRed"]
        === "olive") {
        answer5.style.backgroundColor = "olive";
        answer5.innerHTML = "<span class='bold'>5. Correct! </span> Olive";
    } else {
        answer5.style.removeProperty("background-color");
        answer5.innerText = "5. Sorry, try again.";
    }
}


function answer6(answers) {
    let answer6 = document.getElementById("answer-6");
    if (answers
        ["Part Two: Mixing the original named colors"]
        ["True or false: The HTML colors Blue and Red, when mixed, make the HTML color named Purple?"]
        ["True"]
        === true
    ) {
        answer6.style.backgroundColor = "purple";
        answer6.style.color = "white";
        answer6.innerHTML = "<span class='bold'>6. Correct! </span>Purple";
    } else {
        answer6.style.removeProperty("background-color");
        answer6.style.removeProperty("color");
        answer6.innerText = "6. Sorry, try again.";
    }
}
