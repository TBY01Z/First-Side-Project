document.addEventListener("DOMContentLoaded", function() {
    // Function to create buttons from 1 to 49 on the left panel
    function createButtons() {
        const leftButtonsDiv = document.getElementById('left-buttons');
        for (let i = 1; i <= 49; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.setAttribute('data-id', i);
            button.addEventListener('click', function() {
                transferButton(button);
            });
            leftButtonsDiv.appendChild(button);
        }
    }

    // Function to transfer button from left to right panel
    function transferButton(button) {
        const rightButtonsDiv = document.getElementById('right-buttons');
        const rightButtons = rightButtonsDiv.getElementsByTagName('button');
        if (rightButtons.length < 6) {
            rightButtonsDiv.appendChild(button.cloneNode(true));
            button.remove();
        } else {
            alert("You can only transfer a maximum of 6 buttons to the right panel.");
        }
    }

    // Initialization
    createButtons();
});
