document.getElementById("section1").style.display = "none";
document.getElementById("section2").style.display = "none";
document.getElementById("section3").style.display = "none";
document.getElementById("section4").style.display = "none";
document.getElementById("section5").style.display = "none";
document.getElementById("section6").style.display = "none";
document.getElementById("section7").style.display = "none";
document.getElementById("section8").style.display = "none";
document.getElementById("section9").style.display = "none";
// document.getElementById("section10").style.display = "none";
// document.getElementById("section11").style.display = "none";
// document.getElementById("section12").style.display = "none";
// document.getElementById("section13").style.display = "none";
// document.getElementById("section14").style.display = "none";
// document.getElementById("section15").style.display = "none";
// document.getElementById("section16").style.display = "none";


// grab all the buttons
let Buttons = document.querySelectorAll(".sizeGuideSection button");

// loop through the buttons using for..of 
for (let button of Buttons) {
  // listen for a click event 
  button.addEventListener('click', (e) => {
    // et = event target
    const et = e.target;
    // slect active class
    const active = document.querySelector(".active");
    // check for the button that has active class and remove it
    if (active) {
      active.classList.remove("active");
    }
    // add active class to the clicked element 
    et.classList.add("active");
    
    // select all classes with the name content
    let allContent = document.querySelectorAll('.categorySection');

    // loop through all content classes
    for (let categorySection of allContent) {
      // display the content if the class has the same data-attribute as the button 
      if(categorySection.getAttribute('data-number') === button.getAttribute('data-number')) {
        categorySection.style.display = "block";
       }
      // if it's not equal then hide it.
      else {
        categorySection.style.display = "none";
       }
     }
  });
}
