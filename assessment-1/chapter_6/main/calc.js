const priceInput = document.getElementById("price");
const litersInput = document.getElementById("liters");
const calculateBtn = document.getElementById("calculate");
const totalCostDisplay = document.getElementById("total-cost");

// creates the listener event to check for button clicks
calculateBtn.addEventListener("click", function () {
    // parses the inputted values, allowing the numbers to be interpreted
    const pricePerLiter = parseFloat(priceInput.value);
    const liters = parseFloat(litersInput.value);

    // use-case check
    if (isNaN(pricePerLiter) || isNaN(liters) || liters < 0) {
        totalCostDisplay.textContent = "Please enter a valid number of liters.";
        return;
    }

    // final calculation
    const totalCost = pricePerLiter * liters;

    // display result on page
    totalCostDisplay.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
});