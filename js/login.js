document.getElementById('submit-buttton').addEventListener('click', function (){
    // user email get
    const userInput = document.getElementById("user-email");
    const userEmail = userInput.value;
    // console.log(userEmail);

// user password get
const passwordInputField = document.getElementById('user-password');
const userPassword = passwordInputField.value;
//console.log(userPassword);

if (userEmail == 'admin@gmail.com' && userPassword == '123456'){
    alert("Login Successful");
    window.location.href = "./../banking.html"
}else if (userEmail !='admin@gmail.com' || userPassword != '123456'){
    alert("Username or password is not valid");
}
})
