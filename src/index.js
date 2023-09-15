const buttons = document.querySelectorAll(".number");
const clickedValues = [];
const output = document.querySelector(
  "body > div > section.dialer-number > span"
);
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    clickedValues.push(value);
    console.log(clickedValues);
    output.textContent = clickedValues.join(", ");
    console.log(output);
  });
});
