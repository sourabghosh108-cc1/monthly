const budgetForm = document.getElementById('budgetForm');
const numVarInput = document.getElementById('numVar');
const varExpensesContainer = document.getElementById('varExpensesContainer');
const resultDiv = document.getElementById('result');

// Dynamically generate variable expense inputs
numVarInput.addEventListener('input', () => {
    varExpensesContainer.innerHTML = '';
    const num = parseInt(numVarInput.value);
    for (let i = 1; i <= num; i++) {
        const label = document.createElement('label');
        label.textContent = `Variable Expense ${i}:`;
        const input = document.createElement('input');
        input.type = 'number';
        input.className = 'variable';
        input.required = true;
        varExpensesContainer.appendChild(label);
        varExpensesContainer.appendChild(input);
    }
});

// Handle form submission
budgetForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const income = parseFloat(document.getElementById('income').value);
    const rent = parseFloat(document.getElementById('rent').value);
    const utilities = parseFloat(document.getElementById('utilities').value);
    const insurance = parseFloat(document.getElementById('insurance').value);

    const fixedTotal = rent + utilities + insurance;

    const variableInputs = document.querySelectorAll('.variable');
    let variableTotal = 0;
    variableInputs.forEach(input => {
        variableTotal += parseFloat(input.value);
    });

    const totalExpenses = fixedTotal + variableTotal;
    const remaining = income - totalExpenses;

    // Display result
    if (remaining > 0) {
        resultDiv.textContent = `Remaining Budget: $${remaining.toFixed(2)}`;
        resultDiv.style.color = 'green';
    } else if (remaining === 0) {
        resultDiv.textContent = 'Your budget is balanced.';
        resultDiv.style.color = 'blue';
    } else {
        resultDiv.textContent = `You exceeded your budget by: $${Math.abs(remaining).toFixed(2)}`;
        resultDiv.style.color = 'red';
    }
});
