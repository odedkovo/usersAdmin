'use strict';
console.log('im controller');
// var gCountInit =

function onInit() {
  saveToStorage('usersDB', gUsers);
  if (loadFromStorage('userDB'))
    renderSecretContent(
      loadFromStorage('userDB').isAdmin,
      loadFromStorage('userDB').username
    );
  else {
    // gUsers = createUsers();
    renderLogin();
  }
}

function onLogin() {
  var elUserName = document.querySelector('.user-name').value;
  var elPassword = document.querySelector('.password').value;

  var currUser = checkUser(elUserName, elPassword);
  var isAdmin = chekIfAdmin(currUser);
  if (gIsLoggedIn) {
    renderSecretContent(isAdmin, elUserName);
    saveToStorage('userDB', currUser);
  }
}

function renderLogin() {
  var elDetailsBox = document.querySelector('.details-box ');
  elDetailsBox.innerHTML = ` <h1>sign in!</h1>
    <img src="img/user.png" alt="" />
    <h3>Username</h3>
    <input class="user-name" type="Username" placeholder="Enter Username" />
    <h3>Password</h3>
    <input class="password" type="password" placeholder="Enter Password" />
    <br />
    <button class="login-button" onclick="onLogin()">log in</button>`;
}

function renderSecretContent(isAdmin, userName) {
  var elDetailsBox = document.querySelector('.details-box ');
  console.log(elDetailsBox);
  if (!isAdmin)
    elDetailsBox.innerHTML = `<img class="secret-img" src="img/secret.png" alt=""> <br/> <h1>hello ${userName}!</h1><br/> <button onclick="onLogOut()">log out</button>`;
  else {
    elDetailsBox.innerHTML = `<img class="secret-img" src="img/secret.png" alt=""> <br/> <h1>hello ${userName}!</h1><br/> <button class="logout-button" onclick="onLogOut()">log out</button> <button class="admin-button"><a href="admin.html">admin</a></button>`;
  }
}

function onLogOut() {
  renderLogin();
  gIsLoggedIn = false;
  localStorage.clear();
}
