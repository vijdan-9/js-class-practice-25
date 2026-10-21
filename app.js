// Q1
let marks = "100";
marks = Number(marks);
let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    if (marks >= 80) {
        console.log("Excellent");
    }
    else if (marks >= 60) {
        console.log("Good");
    }
    else if (marks >= 40) {
        console.log("Pass");
    }
    else {
        console.log("Fail");
    }
});
// Q2
let button = document.getElementById("generateBtn");
let paragraph = document.getElementById("result");
let input = document.getElementById("userInput");

button.addEventListener("click", function () {

    let number = Math.floor(Math.random() * 100) + 1;

    input.value = number;

    if (number > 50) {
        paragraph.textContent = number + " - High Number";
    } else {
        paragraph.textContent = number + " - Low Number";
    }

});
// Q3
let price = 250;

let quantityInput = document.getElementById("quantity");
let calculateBtn = document.getElementById("calculateBtn");
let message = document.getElementById("message");

calculateBtn.addEventListener("click", function () {

    let quantityValue = quantityInput.value;

    if (quantityValue === "" || Number(quantityValue) <= 0) {
        message.innerHTML = "Please enter a valid quantity!";
        console.log("Error: Please enter a valid quantity.");
        return;
    }

    let quantity = Number(quantityValue);
    let total = price * quantity;
    let discount = 0;

    if (total >= 1000) {
        discount = total * 0.12;
    }

    let finalBill = total - discount;

    message.innerHTML =
        "Total: Rs. " + total +
        "<br>Discount: Rs. " + discount +
        "<br>Final Bill: Rs. " + finalBill;

    console.log("Product Price: Rs. " + price);
    console.log("Quantity: " + quantity);
    console.log("Total: Rs. " + total);
    console.log("Discount: Rs. " + discount);
    console.log("Final Bill: Rs. " + finalBill);

});
