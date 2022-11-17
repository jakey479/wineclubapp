// document.querySelector("") is used to select content from the DOM of a webpage and specifies an element within said page. The .addEventListener function is then called for the element that has been selected. "click" refers to the event that the selected element is listening for, followed by a function which will run when the event happens.

// The function that is called by the event listener in this case does not have a name and is referred to as an anonymous function. An alternative to writing an anonymous function is to write an arrow function which uses the syntax eventTarget.addEventListener("event", () => {
//     function
// });

document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });