const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("pwrd");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const email = form.email.value;
    const password = form.pwrd.value;

    if (checkEmail(email) && password.length > 6){
        checkEmail();
        location.href = "https://kisasa.co.za/services/";
    } else {
       alert("Invalid Email or Password!\n* Enter a valid email address\n* Password requires minimum 6 characters");
    }

    email.value = '';
    password.value = '';
});

function checkEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}



