document.getElementById('btn_withdraw').addEventListener('click',function () {
    const userFlild = document.getElementById('user_withdraw');
    const userFlildValue = userFlild.value;
    const totalWithdraw = document.getElementById('total_withdraw');
    const totalDepositValue = totalWithdraw.innerText;
    const withdraw = parseFloat(userFlildValue) + parseFloat(totalDepositValue);
    const totalBalanceElement = document.getElementById('total_balance');
    const totalBalanceValue = totalBalanceElement.innerText;
    if(parseFloat(totalBalanceValue) < withdraw){
        alert('ato tk nai');
        return;
    }
    totalWithdraw.innerText = withdraw;
    const totalBalance = parseFloat(totalBalanceValue) - userFlildValue;
    totalBalanceElement.innerText = totalBalance;
    userFlild.value = '';
})