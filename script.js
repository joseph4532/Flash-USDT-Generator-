function simulateTransfer() {
  const network = document.getElementById('network').value;
  const amount = document.getElementById('amount').value;
  const output = document.getElementById('output');

  if (amount <= 0) {
    output.innerHTML = "⚠️ Enter a valid amount.";
    return;
  }

  output.innerHTML = `✅ Demo Transfer Successful!<br>Network: <strong>${network}</strong><br>Amount: <strong>${amount} USDT</strong>`;
}
