/*
let userInput = document.getElementById("date");
userInput.max = new Date().toISOString.split("T")[0];

function calculateAge() {
  let birthDate = new Date(userInput.value);
  //
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = birthDate.getMonth() + 1;
  let y2 = birthDate.getFullYear();

  let d3, m3, y3;

  y3 = y2 - y1;
  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }
  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }

  console.log(y3, m3, d3);
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

*/

let results = document.getElementById("results");

function calculateAge() {
  var inputDate = document.getElementById("date").value;
  var today = new Date();
  var birthDate = new Date(inputDate);

  // Calculate the age
  var age = today.getFullYear() - birthDate.getFullYear();
  var monthDifference = today.getMonth() - birthDate.getMonth();

  // If the current month is less than the birth month or if they are in the same month but the current day is less than the birth day, subtract 1 from the age
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  results.innerHTML = `Your Age is : ${age}`;
}
