const genbtn1 = document.querySelector(".btn1");

genbtn1.addEventListener("click",() => genpass());

function genpass()
{
    let char = "0123456789abcdefghijklmnopqristuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    passwordLength = 7;
    password = "";

    for(let i=0; i <= passwordLength; i++){
        let randompass = Math.floor(Math.random() * char.length);
        password += char.substring(randompass,randompass +1);
    }
    document.getElementById("password").value = password;
}

