// Pseudo code
// --------------------------------------------------
// 1. Sellect the HTML elements needed 
// 2. Get the users Starting and end input from the form, Parse int.
// 3. Loop through the iputs and print them to the screen. 
// 4. Print the intergers from the starting number to the end.
// 5. Run this control flow coditions:
    // Print “Fizz” if an integer is divisible by 3.
    // Print “Buzz” if an integer is divisible by 5.
    // Print “FizzBuzz” if an integer is divisible by both 3 and 5.
// --------------------------------------------------

// 1. Sellect the HTML elements needed 
// Geting the values from start value and parse int
let startNum = document.getElementById('start-value');

// Geting the values from End value and parse int
let endNum = document.getElementById('end-value');

// Submittion button 
const submitBtn = document.getElementById('btn-submit');



function fizzyBuzz() {

    // 3. Loop through the iputs and print them to the screen. 
    let number = []
    const table = document.getElementById('results');
    let tableRows = '';

    for (let i = startNum.value; i <= endNum.value; i++) {

        number = i;

        if(number % 3 === 0) {
            number = "Fizzy";
            tableRows += `<tr><td><b>${number}</b></td></tr>`;
            table.innerHTML = tableRows;
        } else if(number % 5 === 0) {
            number = "Buzz";
            tableRows += `<tr><td><b>${number}</b></td></tr>`;
            table.innerHTML = tableRows;
        } else if(number % 3 === 0 && 5 === 0) {
            number = "FizzyBuzz";
            tableRows += `<tr><td><b>${number}</b></td></tr>`;
            table.innerHTML = tableRows;
        } else {
            tableRows += `<tr><td><b>${number}</b></td></tr>`;
            table.innerHTML = tableRows;
        }
    }
}


submitBtn.addEventListener('click', function() {
    fizzyBuzz();
})