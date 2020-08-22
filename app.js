

const controller = (function (BudgetCtrl, UICtrl) {

    const ctrlAddItem = function () {
        // Get the field input data
        const input = UICtrl.getInput();

        // Add the item to the budget controller

    }

    const setupEventListeners = function () {
        const DOM = UICtrl.getDOMStrings();

        document.querySelector().addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        })
    }


    return {
        init: function () {
            setupEventListeners();
        }
    }
})(BudgetController, UIController);

controller.init();
