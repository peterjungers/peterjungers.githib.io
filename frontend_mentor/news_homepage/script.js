/*
Name: Peter Jungers
Date: 11/19/22
Exercise: Frontend Mentor: News homepage
*/


function toggleNavMenu() {
    const hamburgerIcon = document.querySelector("#hamburger-icon");
    const navMenu = document.querySelector(".mobile-nav");

    hamburgerIcon.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });


}

window.addEventListener("load", toggleNavMenu);
