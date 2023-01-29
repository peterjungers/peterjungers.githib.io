/*
Name: Peter Jungers
Date: January 2023
Exercise: Sunnyside agency landing page
*/


function toggleNavMenu() {
    const hamburgerIcon = document.querySelector("#hamburger-icon");
    const navLinks = document.querySelector("header nav");

    hamburgerIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

window.addEventListener("DOMContentLoaded", toggleNavMenu);
