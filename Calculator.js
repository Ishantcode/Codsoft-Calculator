// Get the display element
const display = document.getElementById("display");

// Handle all button clicks
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "=") {
      try {
        // Evaluate the expression
        display.value = eval(display.value);
      } catch (e) {
        display.value = "Error";
      }
    } else if (value === "C") {
      display.value = ""; // Clear the display
    } else if (value === "DEL") {
      display.value = display.value.slice(0, -1); // Delete last character
    } else {
      display.value += value; // Append clicked button's value
    }
  });
});
