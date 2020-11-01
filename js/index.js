$(document).ready(function(){
  $("#inputNumber").submit(function(event) {
    // Business
    // console.log("hi")
    let userInput = $("#numbers").val();
    const originalInput = $("#numbers").val();
    //  console.log(originalInput)
    const replacementWords = ["Won't you be my neighbor?", "Boop!", "Beep!"];
    const numberCheck = ["3", "2", "1"];
    let range = [];
    function getNumberRange(userInput){
      range = [];
      let userNumber = parseInt(userInput)
      do {
        range.push(userNumber);
        userNumber --;
      } while(usernumber);
      range.reverse();
      return range;
      console.log(range)
      }
      event.preventDefault();
    
    
  
  })

})