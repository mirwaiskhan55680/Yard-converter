document.getElementById("convertBtn").addEventListener("click", function() {
    var value = parseFloat(document.getElementById("value").value);
    var unit = document.getElementById("unit").value;
    var result;

    if (unit === "yards") {
        var squareFeet = value * 9;
        result = `${value} yards is equal to ${squareFeet} square feet.`;
    } else {
        var yards = value / 9;
        result = `${value} square feet is equal to ${yards.toFixed(2)} yards.`;
    }

    document.getElementById("result").innerText = result;
});
