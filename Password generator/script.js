const passwordBox = document.getElementById("password");
const length = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRST";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";

const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()_+";

const allChars = upperCase + lowerCase + numbers + specialCharacters;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password +=
    specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}
// jajfjosjg

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
  //   alert("Password copied to clipboard");
}
