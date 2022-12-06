document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);


let firstResultDiv = document.getElementById("resultOne");
let secondResultDiv = document.getElementById("resultTwo");
let thirdResultDiv = document.getElementById("resultThree");



firstResultDiv.style.display = "none";
secondResultDiv.style.display = "none";
thirdResultDiv.style.display = "none";


function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.

  let button = document.querySelector(".submit");
  let displayResult = document.querySelector(".displayResult");
  let q1 = document.getElementsByClassName("firstSet");
  let q2 = document.getElementsByClassName("secondSet");
  let q3 = document.getElementsByClassName("thirdSet");


  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.

  let img;
  let result;
  let score = 0;


  button.onclick = function() {

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.






    // task 7: create a conditional statement for the responses to Question 1 based on the user input.


    if (document.getElementById("fqfa").checked) {
      score += 0;
    } else if (document.getElementById("fqsa").checked) {
      score += 1;
    } else if (document.getElementById("fqta").checked) {
      score += 2;
    } else if (document.getElementById("fqla").checked) {
      score += 3;
    }



    // task 8: create a conditional statement for the responses to Question 2 based on the user input.

    if (document.getElementById("sqfa").checked) {
      score += 0;
    } else if (document.getElementById("sqla").checked) {
      score += 3;
    }



    // task 9: create a conditional statement for the responses to Question 3 based on the user input.

    if (document.getElementById("tqfa").checked) {
      score += 0;
    } else if (document.getElementById("tqsa").checked) {
      score += 1;
    } else if (document.getElementById("tqta").checked) {
      score += 2;
    } else if (document.getElementById("tqla").checked) {
      score += 3;
    }



    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.
    let total = score;
    console.log(total);



    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.

    if (total >= 0 && total < 3) {
      firstResultDiv.style.display = "block";
    } else if (total >= 3 && total < 6) {
      secondResultDiv.style.display = "block";
    } else if (total >= 6 && total <= 9) {
      thirdResultDiv.style.display = "block";
    }


  }

};

//first commit-- added this single line to check if committing works