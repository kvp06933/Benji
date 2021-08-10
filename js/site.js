//  function Benji(){
//      //VARIABLES

//  let input1 = document.getElementById("startValue");
//  let input2 = document.getElementById("endValue");
//  let start = parseInt(input1.value);
//  let end = parseInt(input2.value);

//  //PRINT NUMBERS 1 - 100 TO THE SCREEN
//  for(i = start; i <= end; i++){
//    let tr = document.createElement('tr');
//    let td = document.createElement('td');
//    td.textContent = [i]; // Use .textContent when the string doesn't contain any HTML
//    tr.appendChild(td);
//    if(i%2 === 0){
//        td.className="fw-bold";
//    }
//    document.querySelector("#results").appendChild(tr);
//  }

 


//  }

//get the values from the page
//start or controller function
function getValues(){
  //get values from the page
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;
  let numbers = [];
  //We need to validate our input
  //Parse into integers
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);
  
  if(Number.isInteger(startValue) && Number.isInteger(endValue)){
    //we call generateNumbers
    numbers = generateNumbers(startValue, endValue);
    //we call displayNumbers
    displayNumbers(numbers);        
  } else {
      alert("You must enter integers");
  }
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
function displayNumbers(numbers){
  let templateRows = "";
  for (let index = 0; index < numbers.length; index++) {
        let className = "even";
        let number = numbers[index];
        if(number % 2 == 0){
          className = "even";
            
        } else{
          className = "odd"
        }
        templateRows += `<tr><td class=${className}>${number}</td></tr>`;

       
    
  }
  document.getElementById("results").innerHTML = templateRows;
}