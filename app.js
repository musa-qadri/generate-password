// var generatename = document.getElementById('passwordt')
// var randumValue = "iqsdaskdaksuibj";
// var randumValue2 = "@$^&";
// var randumValue3 = "4378120978";
// var password = '';
// var password2 = '';
// var password3 = '';

// function generatepassword() {

// var passwordt = '';
// for (i=0; i<4; i++){
//     var randumNumber = Math.floor(Math.random()*randumValue.length) 
//     var randumNumber2 = Math.floor(Math.random()*randumValue2.length) 
//     var randumNumber3 = Math.floor(Math.random()*randumValue3.length) 
//     password += randumValue[randumNumber]
//     password2 += randumValue2[randumNumber2]
//     password3 += randumValue3[randumNumber3]
//     passwordt = password+password2+password3
// }
// generatename.value=passwordt
// }

// console.log()


// const pass = document.getElementById("password");
// const length = 10;
// const upperCase = "BCDEFGHIJKLMN"
// const lowerCase = "bcdefghijkmnopqrSt";
// const num = "0123456789";
// const char = "*@+$&";

// const allChars = upperCase + lowerCase + num + char;


// function createPassword(){
//    let password = "";
//    password += upperCase[Math.floor(Math.random()*upperCase.length)]
//    password += lowerCase[Math.floor(Math.random()*lowerCase.length)]
//    password += num[Math.floor(Math.random()*num.length)]
//    password += char[Math.floor(Math.random()*char.length)]
   
//    for(i = 0; length > password.length; i++){
//     password += allChars[Math.floor(Math.random()* allChars.length)]

//    }
//   pass.value = password;
// }

// console.log(pass)

const generatename = document.getElementById('passwordt')
const numLength = 10
const randumValue = "iqsdaskdaksuibj";
const randumValue1 = "ABCDEFGHIJK";
const randumValue2 = "@$^&";
const randumValue3 = "4378120978";
const sumup = randumValue + randumValue1 +randumValue2 +randumValue3;


function generatepassword() {

    let passwordt = '';
     passwordt += randumValue[Math.floor(Math.random()*randumValue.length)]
     passwordt += randumValue1[Math.floor(Math.random()*randumValue1.length)] 
     passwordt += randumValue2[Math.floor(Math.random()*randumValue2.length)] 
     passwordt += randumValue3[Math.floor(Math.random()*randumValue3.length)] 
    for (i=0; numLength > passwordt.length; i++){
         
      passwordt += sumup[Math.floor(Math.random()*sumup.length)]

}
generatename.value=passwordt
}

// console.log (generatepassword.value)