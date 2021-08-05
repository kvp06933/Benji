// function Benji(){
//     //VARIABLES

// let input1 = document.getElementById("startValue");
// let input2 = document.getElementById("endValue");
// let start = parseInt(input1.value);
// let end = parseInt(input2.value);

// //PRINT NUMBERS 1 - 100 TO THE SCREEN
// for(i = start; i <= end; i++){
//   let tr = document.createElement('tr');
//   let td = document.createElement('td');
//   td.textContent = [i]; // Use .textContent when the string doesn't contain any HTML
//   tr.appendChild(td);
//   if(i%2 === 0){
//       td.className="fw-bold";
//   }
//   document.querySelector("#results").appendChild(tr);
// }

// // Now, append the entire list to the document with just one DOM change


// }

//get the values from the page
//start or controller function
function getValues(){
  //get values from the page
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  
  //we call generateNumbers
  let numbers = generateNumbers(startValue, endValue);
  //we call displayNumbers
  displayNumbers();
}

//generate numbers from startvalue to endvalue 
//logic function(s)
function generateNumbers(sValue, eValue){
  let numbers = [];
  //We want to get all numbers from start to end
  for (let index = sValue; index <= eValue; index++) {
    //This will execute in a loop until index = eValue
    numbers.push(index);
    
  }
  return numbers;  
}

//display the numbers and mark even bold
//display or view functions
function displayNumbers(){

}