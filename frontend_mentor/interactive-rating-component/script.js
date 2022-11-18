/*
Name: Peter Jungers
Date: 11/17/22
Exercise: Frontend Mentor: Interactive rating component
*/


function getChoice() {
    const ratingParent = document.querySelector("ul");
    const ratingChildren = ratingParent.children; // li elements

    ratingParent.addEventListener("click", (event) => {
        let selected = "";
        if (event.target.className === "circle") {
            // for loop resets background color of previous choice
            for (let i = 0; i < ratingChildren.length; i++) {
                ratingChildren[i].style.backgroundColor = "";
                ratingChildren[i].style.color = "";
            }
            // Current choice
            event.target.style.backgroundColor = "hsl(216, 12%, 54%)";
            event.target.style.color = "hsl(0, 0%, 100%)";
            selected = event.target.innerText;
            submit(selected);
        }
    });
}


function submit(selected) {
    const submitBtn = document.querySelector("button");
    submitBtn.addEventListener("click", () => {
        changeCards();
        showMessageText(selected);
        showReset();
    });
}


// Hide rating card, show thank-you card
function changeCards() {
    const ratingDiv = document.querySelector(".rating");
    const thankYouDiv = document.querySelector(".thank-you");
    ratingDiv.style.display = "none";
    thankYouDiv.style.display = "block";
}


// Shows message on thank-you card
function showMessageText(text) {
    const messageText = document.querySelector("#message p");
    messageText.innerText = `You selected ${text} out of 5`;
}


// Shows reset link to reload page
function showReset() {
    const resetDiv = document.querySelector("#reset");
    const resetLink = document.querySelector("#reset p");

    resetDiv.style.display = "block";
    resetLink.addEventListener("click", () => {
        location.reload();
    })
}


window.addEventListener("load", getChoice);
