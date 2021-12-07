'use strict';

gUsers.sort(function (a, b) {
  var nameA = a.username.toUpperCase(); // ignore upper and lowercase
  var nameB = b.username.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});

function onInit1() {
  if (!loadFromStorage('userDB') || !loadFromStorage('userDB').isAdmin)
    location.assign('main.html');
  console.log(gUsers);
  renderUsersTable();
}

function renderUsersTable() {
  document.querySelector('.return-button').innerHTML =
    ' <button><a href="main.html">return</a></button>';
  var strHtml = '<br/>';

  for (var key in gUsers[0]) {
    strHtml += `<th>${key}</th>`;
  }
  for (var i = 0; i < gUsers.length; i++) {
    strHtml += '<tr>';
    for (var key in gUsers[i]) {
      strHtml += `<td>'${gUsers[i][key]}</td>`;
    }
    strHtml += '</tr>';
  }

  document.querySelector('table').innerHTML = strHtml;
}
