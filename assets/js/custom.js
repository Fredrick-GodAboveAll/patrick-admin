
// fro the date 
function displayDate() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric'};

    document.getElementById('date').innerText = today.toLocaleDateString(undefined, options)
}


// for the calc 
document.getElementById('payeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const grossPay = parseFloat(document.getElementById('exampleInputPassword1').value);
    const personalRelief = 2400;
    let taxablePay = grossPay;
    let paye = 0;
    let totalTax = 0;
    let workingSteps = "";

    if (grossPay <= 24000) {
       paye = grossPay * 0.10;
       workingSteps = "10% on the first 24,000 = " + (grossPay * 0.10).toFixed(2);
    } else if (grossPay <= 32333) {
       paye = (24000 * 0.10) + ((grossPay - 24000) * 0.25);
       workingSteps = "10% on the first 24,000 = " + (24000 * 0.10).toFixed(2) +
          " + 25% on the amount between 24,001 and 32,333 = " + ((grossPay - 24000) * 0.25).toFixed(2);
    } else if (grossPay <= 500000) {
       paye = (24000 * 0.10) + (8333 * 0.25) + ((grossPay - 32333) * 0.30);
       workingSteps = "10% on the first 24,000 = " + (24000 * 0.10).toFixed(2) +
          " + 25% on the amount between 24,001 and 32,333 = " + (8333 * 0.25).toFixed(2) +
          " + 30% on the amount between 32,334 and 500,000 = " + ((grossPay - 32333) * 0.30).toFixed(2);
    } else if (grossPay <= 800000) {
       paye = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + ((grossPay - 500000) * 0.325);
       workingSteps = "10% on the first 24,000 = " + (24000 * 0.10).toFixed(2) +
          " + 25% on the amount between 24,001 and 32,333 = " + (8333 * 0.25).toFixed(2) +
          " + 30% on the amount between 32,334 and 500,000 = " + (467667 * 0.30).toFixed(2) +
          " + 32.5% on the amount between 500,001 and 800,000 = " + ((grossPay - 500000) * 0.325).toFixed(2);
    } else {
       paye = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + (300000 * 0.325) + ((grossPay - 800000) * 0.35);
       workingSteps = "10% on the first 24,000 = " + (24000 * 0.10).toFixed(2) +
          " + 25% on the amount between 24,001 and 32,333 = " + (8333 * 0.25).toFixed(2) +
          " + 30% on the amount between 32,334 and 500,000 = " + (467667 * 0.30).toFixed(2) +
          " + 32.5% on the amount between 500,001 and 800,000 = " + (300000 * 0.325).toFixed(2) +
          " + 35% on the amount above 800,000 = " + ((grossPay - 800000) * 0.35).toFixed(2);
    }

    totalTax = paye;
    paye = paye - personalRelief;
    paye = paye < 0 ? 0 : paye;

    const netPay = grossPay - paye;

    document.getElementById('taxablePay').textContent = "KES " + taxablePay.toFixed(2);
    document.getElementById('totalTax').textContent = "KES " + totalTax.toFixed(2);
    document.getElementById('paye').textContent = "KES " + paye.toFixed(2);
    document.getElementById('netPay').textContent = "KES " + netPay.toFixed(2);
    document.getElementById('workingSteps').textContent = workingSteps +
       " | Total Tax before relief: KES " + totalTax.toFixed(2) +
       " | PAYE after relief: KES " + paye.toFixed(2);
    });




