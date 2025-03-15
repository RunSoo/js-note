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

// // ✅ 반환 및 종료

// function hello() {
//   return "Hello~"; // 함수를 종료하는 역할도 함
//   // return; // undefined 암시적으로 "return undefined"라고 되어 있는 것과 동일
//   console.log("Wow~"); // return 이후 부분은 동작하지 않음
//   // return 없어도 undefined => 암시적으로 채워줌
// }

// console.log(hello);
// // ƒ hello() {
// //   return "Hello~"; // 함수를 종료하는 역할도 함
// // }

// function plus(num) {
//   return num + 1;
// }

// console.log(plus(2));
// console.log(plus(7));
// console.log(plus()); // 안넣었으니까 자바스크립트가 자동으로 undefined로 채움 -> undfined + 1 => NaN

// function plus2(num) {
//   if (typeof num !== "number") {
//     console.log("숫자를 입력해주세요.");
//     return 0;
//   }
//   return num + 1;
// }

// console.log(plus2(2)); // 3
// console.log(plus2());
// // main.js:52 숫자를 입력해주세요.
// // main.js:59 0

// ✅ 매개변수 패턴 (Parameter pattern)
//// 기본값 (Default value)

function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));
console.log(sum(7)); // NaN

function sum1(a, b = 1) {
  return a + b;
}

console.log(sum1(1, 2));
console.log(sum1(7));

//// 구조 분해 할당 (Destructuring assignment)
const user = {
  name: "Hess",
  age: 20,
};

function getName(user) {
  const { name } = user;
  return name;
}

function getName1({ name }) {
  return name;
}

function getEmail({ email = "이메일이 없습니다." }) {
  return email;
}

console.log(getName(user));
console.log(getName1(user));
console.log(getEmail(user)); // 이메일이 없습니다.

const fruits = ["Apple", "Banana", "Cherry"];
const numbers = [1, 2, 3, 4, 5, 6, 7];

function getSecondItem(array) {
  return array[1];
}

function getSecondItem1([, b]) {
  return b;
}

console.log(getSecondItem(fruits)); // Banana
console.log(getSecondItem1(fruits));
console.log(getSecondItem1(numbers));

//// 나머지 매개변수 (Rest parameter)
function sum2(...rest) {
  console.log(rest);
  console.log(arguments);
  return rest.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
}

console.log(sum2(1, 2));
// (2) [1, 2]
// main.js:121 Arguments(2) [1, 2, callee: (...), Symbol(Symbol.iterator): ƒ]
// main.js:127 3
console.log(sum2(1, 2, 3, 4));
(4)[(1, 2, 3, 4)];
// main.js:121
// Arguments(4) [1, 2, 3, 4, callee: (...), Symbol(Symbol.iterator): ƒ]
// main.js:131 10
console.log(sum2(1, 2, 3, 4, 5, 6, 7, 8, 9));
// (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
// main.js:121 Arguments(9) [1, 2, 3, 4, 5, 6, 7, 8, 9, callee: (...), Symbol(Symbol.iterator): ƒ]
// main.js:136 45
