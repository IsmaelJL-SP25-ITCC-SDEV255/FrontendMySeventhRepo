let token;

window.onload = function(){
document.querySelector("loginBtn").addEventListener("click", function(){
    const username = document.querySelector("#username").value
    const passowrd = document.querySelector("#password").value

    login(username, passowrd)
})}


async function login(username, passowrd) {
    const login_cred = {
        username, password
    }
    const response = await fetch("http://localhost:3000/api/auth/", {
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(login_cred)
    })

    if (response.ok) {      
        const tokenResponse = await response.json()
        token = tokenResponse.token
        uname = tokenResponse.username2
        auth = tokenResponse.auth

        localStorage.setItem("token", token)
        localStorage.setItem("uname", uname)
        localStorage.setItem("auth", auth)

        window.location.replace("/index.html")
        }
    else {
        document.querySelector("errorMsg").innerHTML = "Bad username and or password.";
        }     
}
