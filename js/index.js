$(document).ready(function(){
  $("#inputNumber").submit(function(event) {
    // Business
    // console.log("hi")
    let userInput = $("#numbers").val();
    const originalInput = $("#numbers").val();
    //  console.log(originalInput)
    const replacementWords = ["Won't you be my neighbor?", "Boop!", "Beep!"];
    // console.log(replacementWords)
    const numberCheck = ["3", "2", "1"];
    // console.log(numberCheck);
    let range = [];
    // console.log(range)
    function getNumberRange(userInput){
      range = [];
      let userNumber = parseInt(userInput)
      do {
        range.push(userNumber);
        userNumber --;
      } while(usernumber);
      range.reverse();
      return range;
      }
      
      
      event.preventDefault();
    })
      

  })
    

      
    
  
  
