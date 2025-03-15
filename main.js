// ✅ 함수 (Function)

// 함수 선언문 (Declaration)
function hello() {}

// 함수 표현식 (Expression)
const hello1 = function () {};

// 호이스팅 (Hoisting)
// 📌 함수가 선언되어져 있는 코드를 유효한 범위 내 가장 꼭대기로 끌어올려서 동작하는 개념

hello2(); // 정의되지 않은 함수를 호출하고 있음

function hello2() {
  // 함수 선언문에서는 동작, 표현문에서는 동작하지 않음
  console.log("Hello~");
}

// hello3(); // main.js:19 Uncaught ReferenceError: Cannot access 'hello3' before initialization

const hello3 = function world() {
  console.log("Hello");
};

// world(); // Uncaught ReferenceError: world is not defined
hello3();
