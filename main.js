// ✅ 동기(Synchronous)와 비동기(Asynchronous)
// - 동기: 순차적으로 코드 실행 O
// - 비동기: 순차적으로 코드 실행 X

console.log(1);
setTimeout(() => {
  // 순서대로 동작하지 않음 => 대표적 비동기 함수수
  console.log(2);
}, 2000);
console.log(3);

const btnEl = document.querySelector("h1");
btnEl.addEventListener("click", () => {
  console.log("Clicked");
});

console.log("Hello World");

fetch("https://www.omdbapi.com.?apikey=7035c60c&s=frozen")
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

console.log(1);
console.log(2);
console.log(3);
