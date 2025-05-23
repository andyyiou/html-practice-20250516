// This is a simple counter application that increments a number when clicked
//const count = document.getElementById("count");
const count = document.querySelector("#count");
const countbutton = document.getElementById("countbutton");
const dcountbutton = document.getElementById("dcountbutton");
// This function increments the count by 1 each time the button is clicked
countbutton.addEventListener("click", function() {
    count.innerText = parseInt(count.innerText) + 1;
    // console.log(count.innerText);
})

dcountbutton.addEventListener("click", function() {
    count.innerText = parseInt(count.innerText) - 1;
    // console.log(count.innerText);
})