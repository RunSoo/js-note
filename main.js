// // ✅ 함수 (Function)

// // 함수 선언문 (Declaration)
// function hello() {}

// // 함수 표현식 (Expression)
// const hello1 = function () {};

// // 호이스팅 (Hoisting)
// // 📌 함수가 선언되어져 있는 코드를 유효한 범위 내 가장 꼭대기로 끌어올려서 동작하는 개념

// hello2(); // 정의되지 않은 함수를 호출하고 있음

// function hello2() {
//   // 함수 선언문에서는 동작, 표현문에서는 동작하지 않음
//   console.log("Hello~");
// }

// // hello3(); // main.js:19 Uncaught ReferenceError: Cannot access 'hello3' before initialization

// const hello3 = function world() {
//   console.log("Hello");
// };

// // world(); // Uncaught ReferenceError: world is not defined
// hello3();

// ✅ 반환 및 종료

function hello() {
  return "Hello~"; // 함수를 종료하는 역할도 함
  // return; // undefined 암시적으로 "return undefined"라고 되어 있는 것과 동일
  console.log("Wow~"); // return 이후 부분은 동작하지 않음
  // return 없어도 undefined => 암시적으로 채워줌
}

console.log(hello);
// ƒ hello() {
//   return "Hello~"; // 함수를 종료하는 역할도 함
// }

function plus(num) {
  return num + 1;
}

console.log(plus(2));
console.log(plus(7));
console.log(plus()); // 안넣었으니까 자바스크립트가 자동으로 undefined로 채움 -> undfined + 1 => NaN

function plus2(num) {
  if (typeof num !== "number") {
    console.log("숫자를 입력해주세요.");
    return 0;
  }
  return num + 1;
}

console.log(plus2(2)); // 3
console.log(plus2());
// main.js:52 숫자를 입력해주세요.
// main.js:59 0
