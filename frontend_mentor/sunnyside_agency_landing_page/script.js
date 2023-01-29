/*
Name: Peter Jungers
Date: January 2023
Exercise: Sunnyside agency landing page
*/


const hamburgerIcon = document.querySelector("#hamburger-icon");
const hamburgerImg = document.querySelector("#hamburger-icon img");
const navLinks = document.querySelector("header #nav-mobile");


function toggleNavMenu() {
    hamburgerIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        toggleHamburgerIcon();
        closeNavMenuOnResize();
    });
}


function toggleHamburgerIcon() {
    if (navLinks.classList.contains("active")) {
        hamburgerImg.src = "images/icon-hamburger-alpha-50.svg";
    } else {
        hamburgerImg.src = "images/icon-hamburger.svg";
    }
}


function closeNavMenuOnResize() {
    window.addEventListener("resize", () => {
        if (navLinks.classList.contains("active")) {
        navLinks.classList.toggle("active");
        }
    });
}


function socialMediaImgHover() {
    const socialMedia = document.querySelectorAll(".social-media")

    socialMedia.forEach(img => {
        img.addEventListener("mouseover", () => {
            if (img.id === "facebook") {
                img.src = "images/icon-facebook-white.svg";
            } else if (img.id === "instagram") {
                img.src = "images/icon-instagram-white.svg";
            } else if (img.id === "twitter") {
                img.src = "images/icon-twitter-white.svg";
            } else if (img.id === "pinterest") {
                img.src = "images/icon-pinterest-white.svg";
            }
        });

        img.addEventListener("mouseout", () => {
            if (img.id === "facebook") {
                img.src = "images/icon-facebook-dark-moderate-cyan.svg";
            } else if (img.id === "instagram") {
                img.src = "images/icon-instagram-dark-moderate-cyan.svg";
            } else if (img.id === "twitter") {
                img.src = "images/icon-twitter-dark-moderate-cyan.svg";
            } else if (img.id === "pinterest") {
                img.src = "images/icon-pinterest-dark-moderate-cyan.svg";
            }
        });
    });
}


window.addEventListener("DOMContentLoaded", toggleNavMenu);
window.addEventListener("DOMContentLoaded", socialMediaImgHover);
