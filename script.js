function showForm(type){
    document.getElementById("registrationForm").classList.add('d-none');
    document.getElementById("loginForm").classList.add('d-none');

    if(type == 'registration'){
        document.getElementById("registrationForm").classList.remove('d-none');
    }else{
        document.getElementById("loginForm").classList.remove('d-none');
    }
}

function registration(){
    const fullname = document.getElementById("regFullName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    if(!fullname){
        alert("Please enter your full name!");
        return;
    }
    if(!email){
        alert("Please enter your email!");
        return;
    }
    if(!password){
        alert("Please enter your password!");
        return;
    }

    const user = {fullname,email,password};
    
    localStorage.setItem(email,JSON.stringify(user));

    alert("Registration Done!");

    document.getElementById("regFullName").value = "";
    document.getElementById("regEmail").value = "";
    document.getElementById("regPassword").value = "";
}

function login(){
    const inputEmail = document.getElementById("loginEmail").value;
    const inputPassword = document.getElementById("loginPassword").value;

    if(!inputEmail){
        alert("Please give your email!");
        return;
    }
    if(!inputPassword){
        alert("Please give your password!");
        return;
    }

    const user = localStorage.getItem(inputEmail);
    if(!user){
        alert("User is not Registration now!");
        return;
    }

    const userData = JSON.parse(user);
    if(inputPassword != userData.password){
        alert("Incorrect password");
        return;
    }

    alert("Login Done! Welcome "+ userData.fullname);
    document.getElementById("loginEmail").value = "";
    document.getElementById("loginPassword").value = "";
}