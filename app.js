import BudgetController from 'budgetController';
import UIController from 'UIController';

const controller = (function (BudgetCtrl, UICtrl) {

    const ctrlAddItem = function () {
        // Get the field input data
        const input = UICtrl.getInput();

        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            // Add the item to the budget controller
            newItem = BudgetCtrl.addItem(input.type, input.description, input.value);

            // Add item to the UI
            UICtrl.addListItem(newItem, input.type);

            // Clear the fields
            UICtrl.clearFields();

            // Calculate and update budget
            updateBudget();

            // Calculate and update percentages
            updatePercentages();
        }
    };

    const setupEventListeners = function () {
        const DOM = UICtrl.getDOMStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);
    };


    const updateBudget = function () {
        // Calculate Budget
        BudgetCtrl.calculateBudget();

        // Return budget
        const budget = BudgetCtrl.getBudget();

        // Display the budget 
        UICtrl.displayBudget(budget);
    };


    const updatePercentages = function () {
        // Calculate percentages
        BudgetCtrl.calculatePercentages();

        // Get percentages 
        const percentages = BudgetCtrl.getPercentages();

        // update the UI
        UICtrl.displayPercentages(percentages);
    };

    const ctrlDeleteItem = function (event) {
        const itemID, splitID, type, ID;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if (itemID) {
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

            // Delete the item from the data structure
            BudgetCtrl.deleteItem(type, ID);

            // Delete the item from the UI
            UICtrl.deleteListItem(itemID);

            // Update the new budget
            updateBudget();

            // Update the percentages
            updatePercentages();
        }
    };


    return {
        init: function() {
            UICtrl.displayMonth();
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            setupEventListeners();
        }
    };
    
})(BudgetController, UIController);

controller.init();
