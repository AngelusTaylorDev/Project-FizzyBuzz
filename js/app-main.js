// Pseudo code
// --------------------------------------------------
// 1. Sellect the HTML elements needed and Get the users 
//    Starting and end input from the form, Parse int.
// 2. Check to see if input is an int.
// 3. Loop through the iputs and Run this control flow coditions:
// Print “Fizz” if an integer is divisible by 3.
// Print “Buzz” if an integer is divisible by 5.
// Print “FizzBuzz” if an integer is divisible by both 3 and 5.
// 4. Display to the screen. 
// --------------------------------------------------

// 1. Sellect the HTML elements needed and Get the users 
//    Starting and end input from the form, Parse int.
function getValues() {

    // Sellect the HTML elements needed 
    // Geting the values from start value and parse int
    let fizzyValue = document.getElementById('start-value').value;

    // Geting the values from End value and parse int
    let buzzValue = document.getElementById('end-value').value;

    // Get the users Starting and end input from the form, Parse int.
    fizzyValue = parseInt(fizzyValue);
    buzzValue = parseInt(buzzValue);

    // 3. Check to see if input is an int.
    if (Number.isInteger(fizzyValue) && Number.isInteger(buzzValue)) {

        // 4. Loop through the iputs and Run this control flow coditions:
        let fbArray = fuzzybuzzC(fizzyValue, buzzValue);

        // 5. Display to the screen. 
        displayfb(fbArray);

    } else {
        // If input is not a number 
        alert("Please Enter Numbers Only");
    }
}


// Logic function - loop through the number range

// Logic using If Statments 
function fuzzybuzz(fizzyValue, buzzValue) {

    // Arry of numbers 
    let returnArray = [];

    // Looping through the numbers 
    for (let i = 1; i <= 100; i++) {

        if (i % fizzyValue == 0 && i % buzzValue == 0) {
            returnArray.push('FizzyBuzz');
        } else if (i % fizzyValue == 0) {
            returnArray.push("Fizzy");
        } else if (i % buzzValue == 0) {
            returnArray.push("Buzz");
        }
        // Pushing to the numbers to numberValues
        returnArray.push(i);
    }
    return returnArray;
}

// Logic using Switch Statments 
function fuzzybuzzB(fizzyValue, buzzValue) {

    // Arry of numbers 
    let returnArray = [];
    let fizzy = false;
    let buzz = false;

    // Looping through the numbers 
    for (let i = 1; i <= 100; i++) {

        // New Code Using Switch statments
        fizzy = i % fizzyValue == 0;
        buzz = i % buzzValue == 0;

        switch (true) {
            case fizzy && buzz: {
                returnArray.push("FizzyBuzz");
                break;
            }
            case fizzy: {
                returnArray.push("Fizzy");
                break;
            }
            case buzz: {
                returnArray.push("Buzz");
                break;
            }
            default: {
                // Pushing to the numbers to numberValues
                returnArray.push(i);
                break;
            }
        }
    }
    return returnArray;
}

// Logic using ternary operator - best algorithm
function fuzzybuzzC(fizzyValue, buzzValue) {

    // Arry of numbers 
    let returnArray = [];

    // Looping through the numbers 
    for (let i = 1; i <= 100; i++) {

        let value = ((i % fizzyValue == 0 ? "Fizzy" : '') + (i % buzzValue == 0 ? "Buzz" : '') || i);
        returnArray.push(value);
    }
    return returnArray;
}

// 5. Display to the screen. 
function displayfb(fbArray) {

    // Getting the table body element
    let tableBody = document.getElementById('results');

    // Getting the Template row 
    let templaeRow = document.getElementById('fbTemplate');

    // Clear the HTML on the table 
    tableBody.innerHTML = '';

    // Looping through the array 
    for (let index = 0; index < fbArray.length; index += 5) {

        // Getting the table template 
        let tableRow = document.importNode(templaeRow.content, true);

        // Put the td in a array
        let rowCols = tableRow.querySelectorAll('td');

        // Adding a css class 
        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];

        // Adding a css class 
        rowCols[1].classList.add(fbArray[index + 1]);
        rowCols[1].textContent = fbArray[index + 1];

        // Adding a css class 
        rowCols[2].classList.add(fbArray[index + 2]);
        rowCols[2].textContent = fbArray[index + 2];

        // Adding a css class 
        rowCols[3].classList.add(fbArray[index + 3]);
        rowCols[3].textContent = fbArray[index + 3];

        // Adding a css class 
        rowCols[4].classList.add(fbArray[index + 4]);
        rowCols[4].textContent = fbArray[index + 4];

        tableBody.appendChild(tableRow);
    }
}

// Submittion button 
const submitBtn = document.getElementById('btn-submit');
submitBtn.addEventListener('click', function () {
    getValues();
})