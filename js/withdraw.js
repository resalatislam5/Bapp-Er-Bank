document.getElementById('btn_withdraw').addEventListener('click',function () {
    const userFlild = document.getElementById('user_withdraw');
    const userFlildValue = userFlild.value;
    const totalWithdraw = document.getElementById('total_withdraw');
    const totalDepositValue = totalWithdraw.innerText;
    const deposit = parseFloat(userFlildValue) + parseFloat(totalDepositValue);
    totalWithdraw.innerText = deposit;
    const totalBalanceElement = document.getElementById('total_balance');
    const totalBalanceValue = totalBalanceElement.innerText;
    const totalBalance = parseFloat(totalBalanceValue) - userFlildValue;
    totalBalanceElement.innerText = totalBalance;
    userFlild.value = '';
})