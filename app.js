const BudgetController = (function () {

    const Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    const Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    const allExpense = [];
    const allIncome = [];
    const totalExpense = 0;

    const data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

    return {
        addItem: function (type, description, value) {
            const newItem, ID;

            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }

            if (type === 'exp') {
                newItem = new Expense(ID, description, value);
            } else if (type === 'inc') {
                newItem = new Income(ID, description, value);
            }

            data.allItems[type].push(newItem);

            return newItem;
        }
    }
})();

const UIController = (function () {

    const DomString: {
        addButton: 'add__btn',

    }

    return {
        getDOMStrings: function () {
            DOMString;
        }
    }

})();

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
