const amountInput = document.getElementById('amountInput');
const amountRange = document.getElementById('amountRange');
const periodInput = document.getElementById('periodInput');
const periodRange = document.getElementById('periodRange');
const interestInput = document.getElementById('interestInput');
const interestRange = document.getElementById('interestRange');
const calculateBtn = document.getElementById('calculateBtn');
const investedAmount = document.getElementById('investedAmount');
const returnAmount = document.getElementById('returnAmount');
const totalAmount = document.getElementById('totalAmount');

function syncRangeInput(input, range) {
  range.value = input.value;
}

function syncNumberInput(range, input) {
  input.value = range.value;
}

function calculateMaturity() {
  const amount = parseFloat(amountInput.value);
  const months = parseFloat(periodInput.value) * 12; // Convert years to months
  const interest = parseFloat(interestInput.value) / 100 / 12;

  // Calculate invested amount
  const invested = amount * months;

  // Calculate maturity amount using the SIP formula
  const maturity = amount * ((Math.pow(1 + interest, months) - 1) / interest) * (1 + interest);

  // Calculate return amount
  const returns = maturity - invested;

  // Display results with commas and two decimal places
  investedAmount.textContent = invested.toLocaleString('en-IN', { maximumFractionDigits: 2 });
  returnAmount.textContent = returns.toLocaleString('en-IN', { maximumFractionDigits: 2 });
  totalAmount.textContent = maturity.toLocaleString('en-IN', { maximumFractionDigits: 2 });
}

amountInput.addEventListener('input', () => {
  syncRangeInput(amountInput, amountRange);
});

amountRange.addEventListener('input', () => {
  syncNumberInput(amountRange, amountInput);
});

periodInput.addEventListener('input', () => {
  syncRangeInput(periodInput, periodRange);
});

periodRange.addEventListener('input', () => {
  syncNumberInput(periodRange, periodInput);
});

interestInput.addEventListener('input', () => {
  syncRangeInput(interestInput, interestRange);
});

interestRange.addEventListener('input', () => {
  syncNumberInput(interestRange, interestInput);
});

calculateBtn.addEventListener('click', calculateMaturity);
