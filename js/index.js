// Username and the most amazing impossible password to guess!
let username = `pb12`
let password = 1234


// Calling all input fields and the button to login
const unId = document.getElementById(`un`);
const pwId = document.getElementById(`pw`);
const loginButton = document.getElementById(`login`);
const enterKey = document.getElementById(`loginform`)


//Function to get JS to match input with our username and password
loginButton.addEventListener(`click`, event => {
    if (unId.value == username, pwId.value == password) {
        alert(`Welcome ${username}, loggin you in!`);
        unId.value = ``
        pwId.value = ``
        window.location.href = "dashboard.html";

    }

    else {
        alert(`Wrong username`)
        unId.value = ``
        pwId.value = ``
        return;
    }
});

//dashboard.html