// in these examples I am using javascript node selectors to select specific elements from my html file. More specifically I am selecting an element by its' id and furthermore selecting the corresponding elements style attribute using the style property

// const myBackground = document.getElementById("landing-page");

// This sets the variable myBackground to be equal to the element with the id "landing-page"

// when myBackground is clicked (which is equal to the element with the id "landing-page"), a nameless function is triggered.

// within the function the variable currentBackgroundImage

// const defaultBackground = myBackground;

// myBackground.style.backgroundImage = "url('../images/wine-logo-alternative.jpg')";
const myBackground = document.getElementById("landing-page");

myBackground.onclick = () => {
    const currentBackground = myBackground.get
    if (myBackground = "url('../images/lp-logo.jpg')") {
        myBackground = "url('../images/wine-logo-alternative.jpg')"
    }
}



