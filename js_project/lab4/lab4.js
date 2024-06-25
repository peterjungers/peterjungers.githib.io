/*
Name: Peter Jungers
Date: 10/18/22
Course: Intro to JS
Assignment: Lab 4
*/


let colorArray = [];
function mixColors(colorId) {

    /*
    This first if statement allows user to choose two new colors
    without clicking reset button. Will run only after first search
    after page is loaded.
     */
    if (colorArray.length > 1) {
        clearOpacityMessagesColorArray();
    }

    reduceOpacity(colorId);

    let titleCaseColorName = makeTitleCase(colorId);

    if (colorArray.length === 0) {
        displayMessage(titleCaseColorName, "color1");
        changeHeaderColor(colorId);
        colorArray.push(colorId);
    } else {
        displayMessage(titleCaseColorName, "color2");
        colorArray.push(colorId);
    }

    if (colorArray.length === 2) {
        let {mixedColor, headerColor, message} =
            getMixedColorAndMessage(colorArray);
        displayMessage(mixedColor, "mixedColorHex");
        displayMessage(message, "comment");
        changeHeaderColor(mixedColor, headerColor);
    }
}


function clearOpacityMessagesColorArray() {
    resetOpacity(colorArray[0]);
    resetOpacity(colorArray[1]);
    displayMessage("Color", "color1");
    displayMessage("Color", "color2");
    displayMessage("?", "mixedColorHex");
    displayMessage("", "comment");
    colorArray = [];
}


function reduceOpacity(colorId) {
    let divColor = document.getElementById(colorId);
    if (colorId === "white") {
        divColor.style.backgroundColor = "#f4f4f4";
    } else {
        divColor.setAttribute("class", "opacityReduced");
    }
}

function resetOpacity(colorId) {
    let divColor = document.getElementById(colorId);
    divColor.setAttribute("class", "opacityReset");
}


function makeTitleCase(colorID) {
    let lowerCaseColorId = colorID;
    let getFirstLetter = lowerCaseColorId.substring(0,1);
    let firstLetterToUpper = getFirstLetter.toUpperCase();
    let restOfWord = lowerCaseColorId.substring(1);
    let titleCaseColor =  firstLetterToUpper + restOfWord;
    return titleCaseColor;
}


function displayMessage(text, spanId) {
    let message = document.getElementById(spanId);
    message.innerText = text;
}


function changeHeaderColor(background, text) {
    let headerColor = document.getElementById("changeColor");
    headerColor.style.backgroundColor = background;
    headerColor.style.color = text;

    // Changes header text to white for darker backgrounds
    if (background === "black" ||
        background === "blue" ||
        background === "maroon" ||
        background === "navy" ||
        background === "purple") {
        headerColor.style.color = "#eee";
    }
    /*
    This else if statement is necessary so lighter backgrounds have
    dark text after reset
     */
    else if (background === "aqua" ||
        background === "fuchsia" ||
        background === "gray" ||
        background === "green" ||
        background === "lime" ||
        background === "olive" ||
        background === "red" ||
        background === "silver" ||
        background === "teal" ||
        background === "white" ||
        background === "yellow") {
        headerColor.style.color = "#000";
    }
}


function reset() {
    window.location.reload();
}


/*
This function is essentially a database containing all possible
two-color combinations. Colors listed in alphabetical order. Lighter
colored backgrounds given #000 text color; darker backgrounds given
#eee.
 */
function getMixedColorAndMessage(colorArray) {
    let mixedBackgroundColor;
    let headerColor;
    let message;

    // Aqua + color
    if (colorArray[0] === "aqua" &&
        colorArray[1] === "aqua") {
        mixedBackgroundColor = "#00FFFF";
        headerColor = "#000";
        message = "It's Aqua!";
    } else if (colorArray.includes("aqua") &&
               colorArray.includes("black")) {
        mixedBackgroundColor = "#008080";
        headerColor = "#000";
        message = "It's the original color named Teal!";
    } else if (colorArray.includes("aqua") &&
               colorArray.includes("blue")) {
        mixedBackgroundColor = "#0080ff";
        headerColor = "#000";
        message = "It's a nice shade of blue.";
    } else if (colorArray.includes("aqua") &&
               colorArray.includes("fuchsia")) {
        mixedBackgroundColor = "#8080ff";
        headerColor = "#000";
        message = "It's a nice shade of purple.";
    } else if (colorArray.includes("aqua") &&
               colorArray.includes("gray")) {
        mixedBackgroundColor = "#40c0c0";
        headerColor = "#000";
        message = "It reminds me of the ocean.";
    } else if (colorArray.includes("aqua") &&
               colorArray.includes("green")) {
        mixedBackgroundColor = "#00c080";
        headerColor = "#000";
        message = "This shade of green always makes me think of bananas " +
            "for some reason.";
    } else if (colorArray.includes("aqua") &&
               colorArray.includes("lime")) {
        mixedBackgroundColor = "#00ff80";
        headerColor = "#000";
        message = "I'm not sure what to call that color.";
    } else if (colorArray.includes("aqua") &&
               colorArray.includes("maroon")) {
        mixedBackgroundColor = "#408080";
        headerColor = "#000";
        message = "Similar to the color named Teal, but not quite.";
    } else if (colorArray.includes("aqua") &&
               colorArray.includes("navy")) {
        mixedBackgroundColor = "#0080c0";
        headerColor = "#000";
        message = "It's a nice shade of blue.";
    } else if (colorArray.includes("aqua") &&
               colorArray.includes("olive")) {
        mixedBackgroundColor = "#40c080";
        headerColor = "#000";
        message = "That's similar to Aqua + Green.";
    } else if (colorArray.includes("aqua") &&
               colorArray.includes("purple")) {
        mixedBackgroundColor = "#4080c0";
        headerColor = "#000";
        message = "Sort of a steel blue.";
    } else if (colorArray.includes("aqua") &&
               colorArray.includes("red")) {
        mixedBackgroundColor = "#808080";
        headerColor = "#000";
        message = "It makes gray?!?";
    } else if (colorArray.includes("aqua") &&
               colorArray.includes("silver")) {
        mixedBackgroundColor = "#60e0e0";
        headerColor = "#000";
        message = "Sort of a softer version of Aqua.";
    } else if (colorArray.includes("aqua") &&
               colorArray.includes("teal")) {
        mixedBackgroundColor = "#00c0c0";
        headerColor = "#000";
        message = "Very ocean-like.";
    } else if (colorArray.includes("aqua") &&
               colorArray.includes("white")) {
        mixedBackgroundColor = "#80ffff";
        headerColor = "#000";
        message = "It's a very pale Aqua.";
    } else if (colorArray.includes("aqua") &&
               colorArray.includes("yellow")) {
        mixedBackgroundColor = "#80ff80";
        headerColor = "#000";
        message = "Kind of a bright light green.";
    }

    // Black + color
    else if (colorArray[0] === "black" &&
             colorArray[1] === "black") {
        mixedBackgroundColor = "#000000";
        headerColor = "#eee";
        message = "It's Black!";
    } else if (colorArray.includes("black") &&
               colorArray.includes("blue")) {
        mixedBackgroundColor = "#000080";
        headerColor = "#eee";
        message = "It's the original color named Navy!";
    } else if (colorArray.includes("black") &&
               colorArray.includes("fuchsia")) {
        mixedBackgroundColor = "#800080";
        headerColor = "#eee";
        message = "It's the original color named Purple!";
    } else if (colorArray.includes("black") &&
               colorArray.includes("gray")) {
        mixedBackgroundColor = "#404040";
        headerColor = "#eee";
        message = "A dark gray.";
    } else if (colorArray.includes("black") &&
               colorArray.includes("green")) {
        mixedBackgroundColor = "#004000";
        headerColor = "#eee";
        message = "We can call that \"Forest Green\".";
    } else if (colorArray.includes("black") &&
               colorArray.includes("lime")) {
        mixedBackgroundColor = "#008000";
        headerColor = "#000";
        message = "It's the original color named Green!";
    } else if (colorArray.includes("black") &&
               colorArray.includes("maroon")) {
        mixedBackgroundColor = "#400000";
        headerColor = "#eee";
        message = "That's a very, very dark maroon.";
    } else if (colorArray.includes("black") &&
               colorArray.includes("navy")) {
        mixedBackgroundColor = "#000040";
        headerColor = "#eee";
        message = "Maybe we could call that \"Midnight Blue\".";
    } else if (colorArray.includes("black") &&
               colorArray.includes("olive")) {
        mixedBackgroundColor = "#404000";
        headerColor = "#eee";
        message = "That's a very, very dark olive green.";
    } else if (colorArray.includes("black") &&
               colorArray.includes("purple")) {
        mixedBackgroundColor = "#400040";
        headerColor = "#eee";
        message = "Reminds me of plums.";
    } else if (colorArray.includes("black") &&
               colorArray.includes("red")) {
        mixedBackgroundColor = "#800000";
        headerColor = "#eee";
        message = "It's the original color named Maroon!";
    } else if (colorArray.includes("black") &&
               colorArray.includes("silver")) {
        mixedBackgroundColor = "#606060";
        headerColor = "#000";
        message = "A little bit darker than the original color named Gray.";
    } else if (colorArray.includes("black") &&
               colorArray.includes("teal")) {
        mixedBackgroundColor = "#004040";
        headerColor = "#eee";
        message = "A very dark teal.";
    } else if (colorArray.includes("black") &&
               colorArray.includes("white")) {
        mixedBackgroundColor = "#808080";
        headerColor = "#000";
        message = "Yep! It's the original color named Gray!";
    } else if (colorArray.includes("black") &&
               colorArray.includes("yellow")) {
        mixedBackgroundColor = "#808000";
        headerColor = "#000";
        message = "It's the original color named Olive!";
    }

    // Blue + color
    else if (colorArray[0] === "blue" &&
             colorArray[1] === "blue") {
        mixedBackgroundColor = "#0000FF";
        headerColor = "#eee";
        message = "It's Blue!";
    } else if (colorArray.includes("blue") &&
               colorArray.includes("fuchsia")) {
        mixedBackgroundColor = "#8000ff";
        headerColor = "#eee";
        message = "It's like electric purple.";
    } else if (colorArray.includes("blue") &&
               colorArray.includes("gray")) {
        mixedBackgroundColor = "#4040c0";
        headerColor = "#eee";
        message = "Hmm. It looks more purple than I would've expected.";
    } else if (colorArray.includes("blue") &&
               colorArray.includes("green")) {
        mixedBackgroundColor = "#004080";
        headerColor = "#eee";
        message = "A nice blue. Not as greenish as I would have thought.";
    } else if (colorArray.includes("blue") &&
               colorArray.includes("lime")) {
        mixedBackgroundColor = "#008080";
        headerColor = "#000";
        message = "It's the original color named Teal!";
    } else if (colorArray.includes("blue") &&
               colorArray.includes("maroon")) {
        mixedBackgroundColor = "#400080";
        headerColor = "#eee";
        message = "A classic shade of purple.";
    } else if (colorArray.includes("blue") &&
               colorArray.includes("navy")) {
        mixedBackgroundColor = "#0000c0";
        headerColor = "#eee";
        message = "A vibrant dark blue.";
    } else if (colorArray.includes("blue") &&
               colorArray.includes("olive")) {
        mixedBackgroundColor = "#404080";
        headerColor = "#eee";
        message = "It makes purple?";
    } else if (colorArray.includes("blue") &&
               colorArray.includes("purple")) {
        mixedBackgroundColor = "#4000c0";
        headerColor = "#eee";
        message = "A vibrant purple.";
    } else if (colorArray.includes("blue") &&
               colorArray.includes("red")) {
        mixedBackgroundColor = "#800080";
        headerColor = "#eee";
        message = "It's the original color named Purple!";
    } else if (colorArray.includes("blue") &&
               colorArray.includes("silver")) {
        mixedBackgroundColor = "#6060e0";
        headerColor = "#000";
        message = "A nice light purple.";
    } else if (colorArray.includes("blue") &&
               colorArray.includes("teal")) {
        mixedBackgroundColor = "#0040c0";
        headerColor = "#eee";
        message = "Reminds me of a duck pond for some reason.";
    } else if (colorArray.includes("blue") &&
               colorArray.includes("white")) {
        mixedBackgroundColor = "#8080ff";
        headerColor = "#000";
        message = "More of a light purple than a light blue.";
    } else if (colorArray.includes("blue") &&
               colorArray.includes("yellow")) {
        mixedBackgroundColor = "#808080";
        headerColor = "#000";
        message = "I did not expect gray—Hey! It's the original color " +
            "named Gray!";
    }

    // Fuchsia + color
    else if (colorArray[0] === "fuchsia" &&
             colorArray[1] === "fuchsia") {
        mixedBackgroundColor = "#FF00FF";
        headerColor = "#000";
        message = "It's Fuchsia!";
    } else if (colorArray.includes("fuchsia") &&
               colorArray.includes("gray")) {
        mixedBackgroundColor = "#c040c0";
        headerColor = "#000";
        message = "That's a nice dark fuchsia.";
    } else if (colorArray.includes("fuchsia") &&
               colorArray.includes("green")) {
        mixedBackgroundColor = "#804080";
        headerColor = "#eee";
        message = "That's a nicer color than I would have expected from " +
            "Fuchsia + Green.";
    } else if (colorArray.includes("fuchsia") &&
               colorArray.includes("lime")) {
        mixedBackgroundColor = "#808080";
        headerColor = "#000";
        message = "It's the original color named Gray!";
    } else if (colorArray.includes("fuchsia") &&
               colorArray.includes("maroon")) {
        mixedBackgroundColor = "#c00080";
        headerColor = "#eee";
        message = "Nice! Reminds me of flowers.";
    } else if (colorArray.includes("fuchsia") &&
               colorArray.includes("navy")) {
        mixedBackgroundColor = "#8000c0";
        headerColor = "#eee";
        message = "A nice bright purple.";
    } else if (colorArray.includes("fuchsia") &&
               colorArray.includes("olive")) {
        mixedBackgroundColor = "#c04080";
        headerColor = "#eee";
        message = "A nice shade of pink.";
    } else if (colorArray.includes("fuchsia") &&
               colorArray.includes("purple")) {
        mixedBackgroundColor = "#c000c0";
        headerColor = "#eee";
        message = "Kind of a bright dark purpley pink.";
    } else if (colorArray.includes("fuchsia") &&
               colorArray.includes("red")) {
        mixedBackgroundColor = "#ff0080";
        headerColor = "#000";
        message = "Oooo! A nice, vibrant reddish pink.";
    } else if (colorArray.includes("fuchsia") &&
               colorArray.includes("silver")) {
        mixedBackgroundColor = "#e060e0";
        headerColor = "#000";
        message = "That's a nice color.";
    } else if (colorArray.includes("fuchsia") &&
               colorArray.includes("teal")) {
        mixedBackgroundColor = "#8040c0";
        headerColor = "#eee";
        message = "A good shade of purple.";
    } else if (colorArray.includes("fuchsia") &&
               colorArray.includes("white")) {
        mixedBackgroundColor = "#ff80ff";
        headerColor = "#000";
        message = "A friendly shade of pink.";
    } else if (colorArray.includes("fuchsia") &&
               colorArray.includes("yellow")) {
        mixedBackgroundColor = "#ff8080";
        headerColor = "#000";
        message = "Oooo! Reminds me of the sunrise.";
    }

    // Gray + color
    else if (colorArray[0] === "gray" &&
             colorArray[1] === "gray") {
        mixedBackgroundColor = "#808080";
        headerColor = "#000";
        message = "It's Gray!";
    } else if (colorArray.includes("gray") &&
               colorArray.includes("green")) {
        mixedBackgroundColor = "#408040";
        headerColor = "#000";
        message = "It's a little bit grayer than the original color named " +
            "Green.";
    } else if (colorArray.includes("gray") &&
               colorArray.includes("lime")) {
        mixedBackgroundColor = "#40c040";
        headerColor = "#000";
        message = "It's close to a spring green.";
    } else if (colorArray.includes("gray") &&
               colorArray.includes("maroon")) {
        mixedBackgroundColor = "#804040";
        headerColor = "#eee";
        message = "It's a bit of a sandstone color.";
    } else if (colorArray.includes("gray") &&
               colorArray.includes("navy")) {
        mixedBackgroundColor = "#404080";
        headerColor = "#eee";
        message = "That's a nice, smoky purple.";
    } else if (colorArray.includes("gray") &&
               colorArray.includes("olive")) {
        mixedBackgroundColor = "#808040";
        headerColor = "#000";
        message = "It's a softer version of the color named Olive.";
    } else if (colorArray.includes("gray") &&
               colorArray.includes("purple")) {
        mixedBackgroundColor = "#804080";
        headerColor = "#eee";
        message = "It's a softer version of the color named Purple.";
    } else if (colorArray.includes("gray") &&
               colorArray.includes("red")) {
        mixedBackgroundColor = "#c04040";
        headerColor = "#000";
        message = "That's a nice color, but I'm not sure what to call it.";
    } else if (colorArray.includes("gray") &&
               colorArray.includes("silver")) {
        mixedBackgroundColor = "#a0a0a0";
        headerColor = "#000";
        message = "Pretty much looks like I'd expect it to.";
    } else if (colorArray.includes("gray") &&
               colorArray.includes("teal")) {
        mixedBackgroundColor = "#408080";
        headerColor = "#000";
        message = "A little bit softer version of the color named Teal.";
    } else if (colorArray.includes("gray") &&
               colorArray.includes("white")) {
        mixedBackgroundColor = "#c0c0c0";
        headerColor = "#000";
        message = "It's the original color named Silver!";
    } else if (colorArray.includes("gray") &&
               colorArray.includes("yellow")) {
        mixedBackgroundColor = "#c0c040";
        headerColor = "#000";
        message = "Sort of a slightly greenish mustard yellow.";
    }

    // Green + color
    else if (colorArray[0] === "green" &&
             colorArray[1] === "green") {
        mixedBackgroundColor = "#008000";
        headerColor = "#000";
        message = "It's Green!";
    } else if (colorArray.includes("green") &&
               colorArray.includes("lime")) {
        mixedBackgroundColor = "#00c000";
        headerColor = "#000";
        message = "It's a good light green.";
    } else if (colorArray.includes("green") &&
               colorArray.includes("maroon")) {
        mixedBackgroundColor = "#404000";
        headerColor = "#eee";
        message = "Pretty close to brown, perhaps a super dark olive, with " +
            "a touch of dark gray? What is this color?";
    } else if (colorArray.includes("green") &&
               colorArray.includes("navy")) {
        mixedBackgroundColor = "#004040";
        headerColor = "#eee";
        message = "Oooo! That's like a really dark version of the color " +
            "named Teal.";
    } else if (colorArray.includes("green") &&
               colorArray.includes("olive")) {
        mixedBackgroundColor = "#408000";
        headerColor = "#000";
        message = "It's like the color when the leaves just start to " +
            "change in the fall.";
    } else if (colorArray.includes("green") &&
               colorArray.includes("purple")) {
        mixedBackgroundColor = "#404040";
        headerColor = "#eee";
        message = "It's the same as Black + Gray!";
    } else if (colorArray.includes("green") &&
               colorArray.includes("red")) {
        mixedBackgroundColor = "#804000";
        headerColor = "#eee";
        message = "It's brown!";
    } else if (colorArray.includes("green") &&
               colorArray.includes("silver")) {
        mixedBackgroundColor = "#60a060";
        headerColor = "#000";
        message = "A nice, soft green.";
    } else if (colorArray.includes("green") &&
               colorArray.includes("teal")) {
        mixedBackgroundColor = "#008040";
        headerColor = "#000";
        message = "Green with just a hint of blue.";
    } else if (colorArray.includes("green") &&
               colorArray.includes("white")) {
        mixedBackgroundColor = "#80c080";
        headerColor = "#000";
        message = "That's a very soothing color.";
    } else if (colorArray.includes("green") &&
               colorArray.includes("yellow")) {
        mixedBackgroundColor = "#80c000";
        headerColor = "#000";
        message = "That's a pretty good yellow-green.";
    }

    // Lime + color
    else if (colorArray[0] === "lime" &&
             colorArray[1] === "lime") {
        mixedBackgroundColor = "#00FF00";
        headerColor = "#000";
        message = "It's Lime!";
    } else if (colorArray.includes("lime") &&
               colorArray.includes("maroon")) {
        mixedBackgroundColor = "#408000";
        headerColor = "#000";
        message = "It's the same as Green + Olive!";
    } else if (colorArray.includes("lime") &&
               colorArray.includes("navy")) {
        mixedBackgroundColor = "#008040";
        headerColor = "#000";
        message = "It's the same as Green + Teal!";
    } else if (colorArray.includes("lime") &&
               colorArray.includes("olive")) {
        mixedBackgroundColor = "#40c000";
        headerColor = "#000";
        message = "A nice spring green.";
    } else if (colorArray.includes("lime") &&
               colorArray.includes("purple")) {
        mixedBackgroundColor = "#408040";
        headerColor = "#000";
        message = "It's the same as Gray + Green!";
    } else if (colorArray.includes("lime") &&
               colorArray.includes("red")) {
        mixedBackgroundColor = "#808000";
        headerColor = "#000";
        message = "It's the original color named Olive!";
    } else if (colorArray.includes("lime") &&
               colorArray.includes("silver")) {
        mixedBackgroundColor = "#60e060";
        headerColor = "#000";
        message = "I think it's this shade of green that makes me think of " +
            "bananas (cf. Aqua + Green).";
    } else if (colorArray.includes("lime") &&
               colorArray.includes("teal")) {
        mixedBackgroundColor = "#00c040";
        headerColor = "#000";
        message = "There are so many shades of green.";
    } else if (colorArray.includes("lime") &&
               colorArray.includes("white")) {
        mixedBackgroundColor = "#80ff80";
        headerColor = "#000";
        message = "I wanted to call this \"Light Lime\", but it doesn't " +
            "really remind me of a lime anymore.";
    } else if (colorArray.includes("lime") &&
               colorArray.includes("yellow")) {
        mixedBackgroundColor = "#80ff00";
        headerColor = "#000";
        message = "That's a bright color!";
    }

    // Maroon + color
    else if (colorArray[0] === "maroon" &&
             colorArray[1] === "maroon") {
        mixedBackgroundColor = "#800000";
        headerColor = "#eee";
        message = "It's Maroon!";
    } else if (colorArray.includes("maroon") &&
               colorArray.includes("navy")) {
        mixedBackgroundColor = "#400040";
        headerColor = "#eee";
        message = "It's the same as Black + Purple!";
    } else if (colorArray.includes("maroon") &&
               colorArray.includes("olive")) {
        mixedBackgroundColor = "#804000";
        headerColor = "#eee";
        message = "It's the same as Green + Red!";
    } else if (colorArray.includes("maroon") &&
               colorArray.includes("purple")) {
        mixedBackgroundColor = "#800040";
        headerColor = "#eee";
        message = "It's like a really dark version of the color named " +
            "Fuchsia.";
    } else if (colorArray.includes("maroon") &&
               colorArray.includes("red")) {
        mixedBackgroundColor = "#c60000";
        headerColor = "#eee";
        message = "That's a solid shade of red.";
    } else if (colorArray.includes("maroon") &&
               colorArray.includes("silver")) {
        mixedBackgroundColor = "#a06060";
        headerColor = "#000";
        message = "A nice sandstone color.";
    } else if (colorArray.includes("maroon") &&
               colorArray.includes("teal")) {
        mixedBackgroundColor = "#404040";
        headerColor = "#eee";
        message = "It's the same as Black + Gray! And Green + Purple!";
    } else if (colorArray.includes("maroon") &&
               colorArray.includes("white")) {
        mixedBackgroundColor = "#c08080";
        headerColor = "#000";
        message = "A nice grayish pink.";
    } else if (colorArray.includes("maroon") &&
               colorArray.includes("yellow")) {
        mixedBackgroundColor = "#c08000";
        headerColor = "#000";
        message = "This one might be called \"Brown Orange\".";
    }

    // Navy + color
    else if (colorArray[0] === "navy" &&
             colorArray[1] === "navy") {
        mixedBackgroundColor = "#000080";
        headerColor = "#eee";
        message = "It's Navy!";
    } else if (colorArray.includes("navy") &&
               colorArray.includes("olive")) {
        mixedBackgroundColor = "#404040";
        headerColor = "#eee";
        message = "It's the same as Black + Gray! And Green + Purple! And " +
            "Maroon + Teal!";
    } else if (colorArray.includes("navy") &&
               colorArray.includes("purple")) {
        mixedBackgroundColor = "#400080";
        headerColor = "#eee";
        message = "It's the same as Blue + Maroon!";
    } else if (colorArray.includes("navy") &&
               colorArray.includes("red")) {
        mixedBackgroundColor = "#800040";
        headerColor = "#eee";
        message = "It's the same as Maroon + Purple!";
    } else if (colorArray.includes("navy") &&
               colorArray.includes("silver")) {
        mixedBackgroundColor = "#6060a0";
        headerColor = "#eee";
        message = "It's a nice smoky purple.";
    } else if (colorArray.includes("navy") &&
               colorArray.includes("teal")) {
        mixedBackgroundColor = "#004080";
        headerColor = "#eee";
        message = "It's the same as Blue + Green! Reminds me of the deep " +
            "ocean.";
    } else if (colorArray.includes("navy") &&
               colorArray.includes("white")) {
        mixedBackgroundColor = "#8080c0";
        headerColor = "#000";
        message = "It's a nice shade of purple.";
    } else if (colorArray.includes("navy") &&
               colorArray.includes("yellow")) {
        mixedBackgroundColor = "#808040";
        headerColor = "#000";
        message = "It's almost the same as the color named Olive, just a " +
            "little softer.";
    }

    // Olive + color
    else if (colorArray[0] === "olive" &&
             colorArray[1] === "olive") {
        mixedBackgroundColor = "#808000";
        headerColor = "#000";
        message = "It's Olive!";
    } else if (colorArray.includes("olive") &&
               colorArray.includes("purple")) {
        mixedBackgroundColor = "#804040";
        headerColor = "#eee";
        message = "It's the same as Gray + Maroon!";
    } else if (colorArray.includes("olive") &&
               colorArray.includes("red")) {
        mixedBackgroundColor = "#c04000";
        headerColor = "#eee";
        message = "Oooo! That's an interesting shade of orange. Or shade " +
            "of red?";
    } else if (colorArray.includes("olive") &&
               colorArray.includes("silver")) {
        mixedBackgroundColor = "#a0a060";
        headerColor = "#000";
        message = "It's like a dusty olive color.";
    } else if (colorArray.includes("olive") &&
               colorArray.includes("teal")) {
        mixedBackgroundColor = "#408040";
        headerColor = "#000";
        message = "It's the same as Gray + Green! And Lime + Purple!";
    } else if (colorArray.includes("olive") &&
               colorArray.includes("white")) {
        mixedBackgroundColor = "#c0c080";
        headerColor = "#000";
        message = "It's like the color named Olive is slowly fading away.";
    } else if (colorArray.includes("olive") &&
               colorArray.includes("yellow")) {
        mixedBackgroundColor = "#c0c000";
        headerColor = "#000";
        message = "What an interesting color!";
    }

    // Purple + color
    else if (colorArray[0] === "purple" &&
             colorArray[1] === "purple") {
        mixedBackgroundColor = "#800080";
        headerColor = "#eee";
        message = "It's Purple!";
    } else if (colorArray.includes("purple") &&
               colorArray.includes("red")) {
        mixedBackgroundColor = "#c00040";
        headerColor = "#eee";
        message = "That's a nice, bold color.";
    } else if (colorArray.includes("purple") &&
               colorArray.includes("silver")) {
        mixedBackgroundColor = "#a060a0";
        headerColor = "#000";
        message = "It's a nice shade of purple.";
    } else if (colorArray.includes("purple") &&
               colorArray.includes("teal")) {
        mixedBackgroundColor = "#404080";
        headerColor = "#eee";
        message = "It's the same as Blue + Olive! And Gray + Navy!";
    } else if (colorArray.includes("purple") &&
               colorArray.includes("white")) {
        mixedBackgroundColor = "#c080c0";
        headerColor = "#000";
        message = "It's a nice shade of purple.";
    } else if (colorArray.includes("purple") &&
               colorArray.includes("yellow")) {
        mixedBackgroundColor = "#c08040";
        headerColor = "#000";
        message = "It's sort of an orangey brown. Maybe dark tan?";
    }

    // Red + color
    else if (colorArray[0] === "red" &&
             colorArray[1] === "red") {
        mixedBackgroundColor = "#FF0000";
        headerColor = "#000";
        message = "It's Red!";
    } else if (colorArray.includes("red") &&
               colorArray.includes("silver")) {
        mixedBackgroundColor = "#e06060";
        headerColor = "#000";
        message = "Reminds me of roses.";
    } else if (colorArray.includes("red") &&
               colorArray.includes("teal")) {
        mixedBackgroundColor = "#804040";
        headerColor = "#eee";
        message = "It's the same as Gray + Maroon! And Olive + Purple!";
    } else if (colorArray.includes("red") &&
               colorArray.includes("white")) {
        mixedBackgroundColor = "#ff8080";
        headerColor = "#000";
        message = "Kind of a bright light pink.";
    } else if (colorArray.includes("red") &&
               colorArray.includes("yellow")) {
        mixedBackgroundColor = "#ff8000";
        headerColor = "#000";
        message = "That's a pretty classic orange.";
    }

    // Silver + color
    else if (colorArray[0] === "silver" &&
             colorArray[1] === "silver") {
        mixedBackgroundColor = "#C0C0C0";
        headerColor = "#000";
        message = "It's Silver!";
    } else if (colorArray.includes("silver") &&
               colorArray.includes("teal")) {
        mixedBackgroundColor = "#60a0a0";
        headerColor = "#000";
        message = "It's like the color of the ocean under stormy skies.";
    } else if (colorArray.includes("silver") &&
               colorArray.includes("white")) {
        mixedBackgroundColor = "#e0e0e0";
        headerColor = "#000";
        message = "A very light silver.";
    } else if (colorArray.includes("silver") &&
               colorArray.includes("yellow")) {
        mixedBackgroundColor = "#e0e060";
        headerColor = "#000";
        message = "Hmm, I kind of like that color.";
    }

    // Teal + color
    else if (colorArray[0] === "teal" &&
             colorArray[1] === "teal") {
        mixedBackgroundColor = "#008080";
        headerColor = "#000";
        message = "It's Teal!";
    } else if (colorArray.includes("teal") &&
               colorArray.includes("white")) {
        mixedBackgroundColor = "#80c0c0";
        headerColor = "#000";
        message = "Reminds me of being on the beach.";
    } else if (colorArray.includes("teal") &&
               colorArray.includes("yellow")) {
        mixedBackgroundColor = "#80c040";
        headerColor = "#000";
        message = "A bit of a smoky light green.";
    }

    // White + color
    else if (colorArray[0] === "white" &&
             colorArray[1] === "white") {
        mixedBackgroundColor = "#ffffff";
        headerColor = "#000";
        message = "It's White!";
    } else if (colorArray.includes("white") &&
               colorArray.includes("yellow")) {
        mixedBackgroundColor = "#ffff80";
        headerColor = "#000";
        message = "Ahh, a nice shade of yellow.";
    }

    // Yellow + color
    else if (colorArray[0] === "yellow" &&
             colorArray[1] === "yellow") {
        mixedBackgroundColor = "#FFFF00";
        headerColor = "#000";
        message = "It's Yellow!";
    }

    return {mixedColor: mixedBackgroundColor, headerColor, message};
}
