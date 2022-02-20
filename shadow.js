function web3BridgeSoonByGodsWill (){
    var hh3 = document.getElementById('reg')
    hh3.innerHTML = "Registration Form"
    hh3.style.textAlign = 'center';

    var labule = document.querySelector('label')
    labule.innerHTML = "Email"
    labule.style.marginLeft="65px"
    labule.style.fontWeight = 'bolder'
}
web3BridgeSoonByGodsWill()

function mailConfirmation() {
    var maiil = document.getElementById('mailConfirm')
    var textArea1 = document.getElementById("mailError")
    if (maiil.value == "") {
        maiil.style.borderColor = "red"
        textArea1.innerHTML = "Box should not be Empty"
        textArea1.style.marginLeft = "65px" 
        textArea1.style.fontWeight = "bold"
        textArea1.style.fontSize = '10px'
    }
    else if (!maiil.value.includes("@")){
        maiil.style.borderColor = "red"
        textArea1.innerHTML = "Box should contain an email with @"
        textArea1.style.marginLeft = "65px"
        textArea1.style.fontSize = '10px'
    }
    else {
        maiil.style.borderColor = "green"
    }
}

function passwordConfirmation(){
    var pwd = document.getElementById('pwd1Confirm')
    var pwdError = document.getElementById('passwordError')
    if (pwd.value == ""){
        pwd.style.borderColor = 'red'
        pwdError.innerHTML = "Kindly Input password"
        pwdError.style.marginLeft = "65px"
        pwdError.style.fontWeight = "bold"
        pwdError.style.fontSize = '10px'
    }
    else {
        pwd.style.borderColor = 'green'
    }
}

function passConfirmation2(){
   var pw2 = document.getElementById('pwd2Confirm')
   var pw2con = document.getElementById('confirmPasswordError')
    var pw1con = document.getElementById('pwd1Confirm')
    if (pw2.value == ""){
        pw2.style.borderColor = "red"
        pw2con.innerHTML = "Please enter password"
        pw2con.style.marginLeft = "65px"
        pw2con.style.fontWeight = "bold"
        pw2con.style.fontSize = '10px'
    }
    else if(pw2.value != pw1con.value){ 
        pw2.style.borderColor = 'red'
        pw2con.innerHTML = "Password do not Match"
        pw2con.style.marginLeft = "65px"
        pw2con.style.fontWeight = "bold"
        pw2con.style.fontSize = '10px'
    }
    else {
        pw2.style.borderColor = "green"
    }
}




 /* function createElement1(){
     var firstdiv = document.createElement('div')
/     firstdiv.style.backgroundColor = "red"
     firstdiv.style.width = "120px"
     firstdiv.innerHTML = "Mr EbunAyo Web3Bridge"
     var mainbody = document.querySelector('body')
     mainbody.appendChild('div')
 }
 createElement1()

 function inputa1(){
     var firstinput = document.getElementById('input1');
     if (input1 == ""){
         firstinput.style.borderColor = "red";
         firstinput.innerHTML = "Field can't be empty"
     }
     else if(input1 !== "@" && "!"){
         firstinput.style.borderColor = "red";
        firstinput.innerHTML = "field should contain @, and !"
     }
     else{
         firstinput.style.borderColor = "green"
     }
 }

 var school, age;
 school = ["ABU", "UI", "UNILAG", "FUTA", "OAU"]
 age = 17

  console.log(school[2]) 

 function myDetails (){
     school.pop("")
    // age = 21
      console.log(school)
 }
 myDetails()

     name: "Bola",
    age: 12,
    married: false,
    friends: ["Funke", "Saheed", "Shehu", "Tolu"],
     falala: function(){
         console.log("Mama")
    }
 }
 softTouch.age = 14
 console.log(softTouch["age"])

 softTouch.falala()

 console.log("falala")
 console.log(softTouch["friends"][3])
 softTouch["age"] = 90
 softTouch.age = softTouch["age"] + 16

 console.log(softTouch["age"])

 var tofu = function(){
     var nike = softTouch["friends"][0]
     console.log(nike)
 }
 tofu()

  var sha=document.getElementById('shadow')
  console.log(sha)

  var tg = document.getElementsByTagName('input')
  console.log(tg)

 var rela = {
     name: "Tobe",
     age: "Jide",
     state: function(){
        console.log("welcome to the world")
     }
 }
 rela.state()

 function mailConfirmattion (){
    var dmail = document.getElementById('mailConfirm')
    var dmailError = document.getElementById('mailError');
    if (dmail.value == "") {        dmail.style.borderColor = 'red'
        dmailError.style.color = "red"
        dmailError.innerHTML = "You can't leave the Email Box Empty"
    }    else if(dmail.value.includes ("@")){

    }
    else{
       dmail.style.borderColor = "green"
        dmailError.innerHTML = "Email Confirmed"
   }
 } */