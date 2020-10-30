// for (let num = 0; num <= 99; num += 1) {
//   console.log(num)
// }




// UI logic//
$(document).ready(function() {
  $("form#inputNumber").submit(function(event) {
    let num = parseInt($("#numbers").val());
    // console.log(num)
    for (let i = num; i <= 99; num += 1) {
      console.log(num)
    }

  event.preventDefault();
  });
});

  


