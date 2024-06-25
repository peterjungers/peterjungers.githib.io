/*
Name: Peter Jungers
Date: 11/2/22
Course: Intro to JS
Assignment: Lab 5
Description: Main JavaScript file; requires lab5_answers.js
*/


class Quiz {
    sections;

    constructor(sections) {
        this.sections = sections;
    }

    toHtml() {
        let html = "";
        html = `<section class="quiz">`;

        for (let counter = 0;
             counter < this.sections.length;
             counter += 1) {

            html += `${this.sections[counter].toHtml()}`;
        }
        html += `<button type="button" onclick="checkAnswers()">
                    Check answers</button>
                 <button type="button" onclick="viewJSON()">
                    View submitted answers as JSON</button>
                 <button type="button" onclick="reset()">
                    Reset</button>
                 </section>`;

        return html;
    }

    getAnswers() {
        let answers = {};

        for (let counter = 0; counter < this.sections.length; counter += 1) {
            answers[this.sections[counter].title] =
                this.sections[counter].getAnswers();
        }
        return answers;
    }
}


class Section {
    title;
    questions;

    constructor(title, questions) {
        this.title = title;
        this.questions = questions;
    }

    toHtml() {
        let html = "";
        html = `<section class="quiz-section">
                   <h3>${this.title}</h3>`
        for (let counter = 0;
             counter < this.questions.length;
             counter += 1) {

            html += `${this.questions[counter].toHtml()}`
        }
        html += "</section>"

        return html;
    }

    getAnswers() {
        let answers = {};

        for (let counter = 0; counter < this.questions.length; counter += 1) {
            answers[this.questions[counter].question] =
                this.questions[counter].getAnswers();
        }
        return answers;
    }
}


class Question {
    question;
    number;

    constructor(question) {
        this.question = question;
    }

    toHtml() {
        let html = "";
        html = `<h4>${this.number}. ${this.question}</h4>`;
        return html;
    }
}


class RadioOrCheckboxQuestion extends Question {
    type;
    name;
    answerOptions;

    constructor(question, type, name, answerOptions) {
        super(question);
        this.type = type;
        this.name = name;
        this.answerOptions = answerOptions;
    }

    toHtml() {
        let html = `<section class="quiz-question">${super.toHtml()}
                       <ul id="${this.name}">`;
        for (let counter = 0;
             counter < this.answerOptions.length;
             counter += 1) {

            html += `<li>
                        <input
                        type="${this.type}"
                        id="${this.answerOptions[counter]}"
                        name="${this.name}"
                        value="${this.answerOptions[counter]}"
                        >
                        <label for="${this.answerOptions[counter]}"
                        >${this.answerOptions[counter]}</label>
                     </li>`
        }
        html += "</ul></section>";

        return html;
    }

    getAnswers() {
        let answers = {};
        let listId = document.getElementById(this.name);
        let inputs = listId.getElementsByTagName("input");

        for (let counter = 0; counter < inputs.length; counter += 1) {
            answers[inputs[counter].value] = inputs[counter].checked;
        }
        return answers;
    }
}


class TextQuestion extends Question{
    name;

    constructor(question, name) {
        super(question);
        this.name = name;
    }

    toHtml() {
        let html = `<section class="quiz-question">${super.toHtml()}
                    <input type="text" id="${this.name}" name="${this.name}">
                    </section>`

        return html;
    }

    getAnswers() {
        let answers = {};
        let textId = document.getElementById(this.name);

        answers[this.name] = textId.value.toLowerCase();
        return answers;
    }
}


function checkAnswers() {
    let answers = quiz.getAnswers();

    answer1(answers);
    answer2(answers);
    answer3(answers);
    answer4(answers);
    answer5(answers);
    answer6(answers);

    let showCorrectAnswers = document.getElementById("show-answers");
    showCorrectAnswers.style.display = "block";
}


function viewJSON() {
    let answers = quiz.getAnswers();
    let answersJson = JSON.stringify(answers, null, 2);
    let jsonWindow = window.open("", "_blank");
    jsonWindow.document.write(`<pre>${answersJson}</pre>`);
    console.log(answersJson);
}


function reset() {
    window.location.reload();
    window.scrollTo(0, 0);
}


let question1 = new RadioOrCheckboxQuestion(
    "Which of the following colors are original named HTML colors? (Check all that apply.)",
    "checkbox",
    "originalColors",
    ["Maroon", "Orange", "Teal", "Yellow"]
);

let question2 = new RadioOrCheckboxQuestion(
    "Of the original 16 named colors, how many can be described as a shade of green?",
    "radio",
    "shadeOfGreen",
    [3, 1, 4, 16]
);

let question3 = new TextQuestion(
    "As explained in Lab 3, all named colors can also be referenced by what type of number code?",
    "numberCode"
);

let question4 = new RadioOrCheckboxQuestion(
    "What two colors, when combined, make the original color named Gray? (There is more than one correct answer.)",
    "checkbox",
    "gray",
    ["Aqua", "Fuchsia", "Black", "Red", "Lime", "Blue", "Yellow", "White"]
);

let question5 = new TextQuestion(
    "Lime + Red = what original named color?",
    "LimePlusRed"
);

let question6 = new RadioOrCheckboxQuestion(
    "True or false: The HTML colors Blue and Red, when mixed, make the HTML color named Purple?",
    "radio",
    "purple",
    ["True", "False"]
);


let allQuestions = [
    question1, question2, question3, question4, question5, question6
]
// Number each question
for (let counter = 0; counter < allQuestions.length; counter += 1) {
    allQuestions[counter].number = counter + 1;
}


let section1 = new Section(
    "Part One: The original named colors",
    [question1, question2, question3]
);
let section2 = new Section(
    "Part Two: Mixing the original named colors",
    [question4, question5, question6]
);


let quiz = new Quiz([section1, section2]);
document.getElementById("quiz-container").innerHTML = quiz.toHtml();
