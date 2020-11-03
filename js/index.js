$(document).ready(function(){
  $("#inputNumber").submit(function(event) {
    event.preventDefault();
    let userInput = $("#numbers").val();
    const originalInput = $("#numbers").val();
    const replacementWords = ["Won't you be my neighbor?", "Boop!", "Beep!"];
    const numberCheck = ["3", "2", "1"];
    let range = [];

  function getRange(userInput) {
    range = [];
    let userNumber = parseInt(userInput);
    do {
      range.push(userNumber);
      userNumber --;
    } while( UsernNumber > 0)
    