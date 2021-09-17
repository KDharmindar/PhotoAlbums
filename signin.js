function Signin() {
    let username = document.getElementById('txtUserName').value;
    let password = document.getElementById('txtPassword').value;
    
    if (username == 'suraj' && password == 'Devsidas') {
        window.location.href = 'home.html';
    } else {
        alert('Username or password is wrong!!');
    }
}