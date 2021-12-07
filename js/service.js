'use strict';
var gId = 1;
var gIsLoggedIn = false;
console.log('im service');

var gUsers = createUsers();

function createUsers() {
  var users = [
    createUser('oded', '7644', true),
    createUser('galia', '1234', false),
    createUser('alma', '1111', false),
    createUser('adva', '2580', false),
    createUser('eyal', '5666', false),
    createUser('adva', '8869', false),
  ];
  return users;
}

function createUser(name, password, isAdmin) {
  console.log('g');
  var user = {
    id: gId++,
    username: name,
    password: password,
    lastlogintime: Date.now(),
    isAdmin: isAdmin,
  };
  return user;
}
function checkUser(userName, password) {
  var foundUser = gUsers.find(function (user) {
    return user.username === userName;
  });
  if (!foundUser) return false;
  if (foundUser.password === password) {
    gIsLoggedIn = true;
    console.log(foundUser);
    foundUser.lastlogintime = Date.now();
    return foundUser;
  } else return false;
}

function chekIfAdmin(user) {
  if (user.isAdmin) return true;
  else return false;
}
