document.getElementById('btn_submit').addEventListener('click',function () {
    const uesrEmail = document.getElementById('user_email');
    const uesrEmailValue =  uesrEmail.value;
    const userPassword = document.getElementById('user_password');
    const userPasswordValue = userPassword.value;
    //Denger: Do NOT VERIFY  email passworld on the client side
    if(uesrEmailValue == 'resalatislam5@gmail.com' && userPasswordValue == 'resalat'){
        location.href = 'bank.html';
    }else{
        alert('invalid user')
    }
})
