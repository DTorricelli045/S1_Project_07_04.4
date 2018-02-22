// JavaScript 6th Edition
// Chapter 4
// Hands-on Project 4-4

// Author: Dominic Torricelli
// Date:   2.21.18

// Filename: name.js


var places = []; // new array to store entered places
var i = 1; // counter variable to track array indexes

// function to add input to array and then generate list after 5th submission
function processInput() {
  "use strict" //activates JavaScript strict mode
   places[i] = document.getElementById("placeBox").value; // add entered value to array
   document.getElementById("placeBox").value = ""; // clear text box
   if (i < 5) { // iterate counter variable
      i++;
   }
   else { // add entered value to array and write results to document
      document.getElementById("resultsExpl").innerHTML = "You entered the following places:";
      var listItem = "";
      for (i = 1; i < 6; i++) { // write each array element to its corresponding list item
         listItem = "item" + i;
         document.getElementById(listItem).innerHTML = places[i];
      }
   
    }
}


// add backward compatible event listener to Submit button
var submitButton = document.getElementById("button");

if (submitButton.addEventListener) {
  submitButton.addEventListener("click", processInput, false); 
} else if (submitButton.attachEvent)  {
  submitButton.attachEvent("onclick", processInput);
}
