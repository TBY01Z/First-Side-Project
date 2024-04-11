document.addEventListener("DOMContentLoaded", function() {
    // Function to create buttons from 1 to 49 on the left panel
    function createButtons() {
        const leftButtonsDiv = document.getElementById('left-buttons');
        for (let i = 1; i <= 49; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.setAttribute('data-id', i);
            button.addEventListener('click', function() {
              addValueToRightPanel(button.val());  
              button.remove();
              
            });
            leftButtonsDiv.appendChild(button);
        }
    }

    // Function to transfer button from left to right panel
    function addValueToRightPanel(number){
      var input = document.createElement(number);
      input.type = "text";
        const numbers = document.getElementById('selected-numbers');
      numbers.appendChild(input);
    }

    // Initialization
    createButtons();
});
function generateRandomNumbers(count){
  const randomNumbers = [];
  const maxNumber = 49;
  const minNumber = 1;
  while (randomNumbers.length < count) {
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }
  return randomNumbers;
}
