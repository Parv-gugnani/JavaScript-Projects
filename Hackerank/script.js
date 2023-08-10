const url = "https://c-code-compiler.p.rapidapi.com/";
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-RapidAPI-Key": "YOUR-RAPIDAPI-KEY",
    "X-RapidAPI-Host": "c-code-compiler.p.rapidapi.com",
  },
  body: JSON.stringify({
    code: '#include<stdio.h> \n\n int main() {  printf("Hello, World!"); }',
    version: "latest",
  }),
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
