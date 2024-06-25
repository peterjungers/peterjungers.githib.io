/*
Name: Peter Jungers
Date: 12/1/22
Course: Intro to JS
Assignment: Bonus Lab
*/


examples = [
    "Hello world",
    "Borrow or rob",
    "Evil olive",
    "Too bad I hid a boot",
    "Step on no pets",
    "Live not on evil"
];

for (let index = 0; index < examples.length; index++) {
    let results = checkSymmetry(examples[index]);
    insertTableRow(results);
}


function checkSymmetry(text) {
    const textLettersOnly = removeNonLetters(text);
    const textLowerCase = textLettersOnly.toLowerCase();
    let textLowerCaseReversed = "";
    let symmetrical = "";

    for (let index = 1; index <= textLowerCase.length; index++) {
        let lastChar = textLowerCase.slice(
            textLowerCase.length - index, textLowerCase.length - index + 1);
        textLowerCaseReversed += lastChar;
    }

    if (textLowerCaseReversed === textLowerCase) {
        symmetrical = "true";
    } else {
        symmetrical = "false";
    }

    return [text, textLowerCase, textLowerCaseReversed, symmetrical];
}


function removeNonLetters(text) {
    // All numbers, punctuation, and whitespace removed
    const textLettersOnly = text.replace(/[^\p{L}]/gu, '');
    return textLettersOnly;
}


function insertTableRow(rowData) {
    const table = document.querySelector("table");
    const row = table.insertRow(1); // First row beneath table header

    for (let i = 0; i < 4; i++) {
        row.insertCell(i).innerHTML = rowData[i];
    }
}


function getInputText() {
    let text = "";
    let rowData = [];
    const button = document.querySelector("#button");
    const input = document.querySelector("#inputText");

    button.addEventListener("click", checkForLetters);
    input.addEventListener("keydown", checkForLetters);

    function checkForLetters(event) {
        if (/\p{L}/gu.test(input.value)) { // Input must contain letters
            if (event.key === "Enter" || event.type === "click") {
                sendInputToTable();
            }
        }
    }

    function sendInputToTable() {
        text = document.querySelector("#inputText").value;
        rowData = checkSymmetry(text);
        insertTableRow(rowData);
        input.value = "";
    }
}


window.addEventListener("load", getInputText());
