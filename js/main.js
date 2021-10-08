/* // можно на jQuery
$(document).ready(function () {
  var userName = "Вадим";
  var hello = $(".user-hello");
  hello.text("Здравствуйте, " + userName);
  //console.log(hello);
});
*/
// либо на нативном JS
document.addEventListener("DOMContentLoaded", function () {
  var userName = "Вадим"; // получаем имя пользователя
  var avatarId = 1; // получаем id пользователя
  var hello = document.querySelector(".user-hello");
  hello.innerText = "Здравствуйте, " + userName; // вставляем имя пользователя в приветствие
  var avatar = document.querySelector('.user-img');
  avatar.src = "img/" + avatarId + ".jpg"; // заменчем имя файла фото на соответствующее пользователю
});