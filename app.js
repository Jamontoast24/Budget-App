var availableBudget = document.querySelector(".budget-title");
var addText = document.querySelector(".calc-text");
var addvalue = document.querySelector(".calc-value");
var subValue = document.querySelector(".calc-value");
var validateValue = document.querySelector(".validate");
var validateExpense = document.querySelector(".validate-expense");
var operatorSelector = document.getElementById("selector");
var calcForm = document.getElementById("calc-form");
var resultList = document.querySelector(".result-list")

function calc() {
    var income = document.querySelector(".income-right");
    var expense = document.querySelector(".expense-right");

        if (addText.value === "") {
            console.log("Enter some text.");
            return false
        }

        if(addvalue.value === "") {
            console.log("enter a value")
            return false;
        }

    if (operatorSelector.value === "add") {
        console.log("hello");
        income.innerHTML = parseInt(income.innerHTML) + parseInt(addvalue.value);
        availableBudget.innerHTML = "<h3>Available Budget:</h3>" + "£" + (income.innerHTML - expense.innerHTML);

    } else if (operatorSelector.value === "subtract") {
        console.log("hi");
        expense.innerHTML = parseInt(expense.innerHTML) - (-parseInt(addvalue.value));
        availableBudget.innerHTML = "<h3>Available Budget:</h3>" + "£" + (income.innerHTML - expense.innerHTML);
    }
}

validateValue.addEventListener("click", function() {
    var newIncomeText = document.createElement("LI");
    newIncomeText.setAttribute("id", "listItem")

    var textNode = document.createTextNode(addText.value + " ");

    var valNode = document.createTextNode("£" + addvalue.value);
    valNode.innerHTML = addvalue.innerHTML;
    newIncomeText.append(textNode, valNode);
    
    console.log(newIncomeText)

    if (addText.value  === "" || addvalue.value === "") {
        return false;
    } else {
        document.querySelector(".result-list").appendChild(newIncomeText);
        document.querySelector(".calc-text").value = "";
        document.querySelector(".calc-value").value = "";
    }

    if (operatorSelector.value === "add") {
        newIncomeText.style.color = "green";
    } else if (operatorSelector.value === "subtract") {
        newIncomeText.style.color = "red";
    }
})

var field = document.querySelector('[name="text"]');

field.addEventListener('keypress', function ( event ) {  
   var key = event.keyCode;
    if (key === 32) {
      event.preventDefault();
    }
});





