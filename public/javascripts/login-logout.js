const btnLogin = document.querySelector("#log-in");
const btnLogout = document.querySelector("#log-out");
const btnReg = document.querySelector("#register");
const btnSend = document.querySelector("#send-btn");
const loginContent = document.querySelector("#log-in-content");


btnSend.onclick = () => {
  alert('Đã gửi thành công');
}

btnLogin.onclick = () => {
  alert('Đăng nhập thành công');
  loginContent.textContent = "Phuc";
}

btnLogout.onclick = () => {
  alert('Đăng xuất thành công');
}

btnReg.onclick = () => {
  alert('Đăng ký thành công');
}

