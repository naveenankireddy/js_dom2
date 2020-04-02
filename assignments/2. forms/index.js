let name = document.querySelector('.name');
let email = document.querySelector('.email');
let password = document.querySelector('.password');

let namePara = document.querySelector('#namePara');
let emailPara = document.querySelector('#emailPara');
let passwordPara = document.querySelector('#passwordPara');



function signUp(event){
    // console.log('inside signup function')
    if(name.value == ""){
        console.log('name cant be empty');
        namePara.textContent = 'name cant be empty';

    }
     if(email.value == ""){
        console.log('email cant be empty')
        emailPara.textContent = 'Email cant be empty';
    }
    if(password.value == ""){
        console.log('password cant be empty')
        passwordPara.textContent = 'Password cant be empty';
    } else{
       alert(`you are ${name.value} your email is ${email.value} password is ${password.value}`);
    }
}


 