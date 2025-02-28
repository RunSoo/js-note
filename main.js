// // 원시형 - String
// const string1 = "Hello";
// const string2 = "Hello";
// const string3 = `Hello ${string1}?!`; // 보관: 데이터를 채워 넣는 역할
// // ${} 템플릿 리터럴: 기호를 통해서 문자열을 만드는 방법

// console.log(string3);

// // 원시형 - Number
// const number = 123;
// const pi = 3.14;

// console.log(number + 1);
// console.log(number + undefined); // NaN -> 타입은 숫자
// console.log(pi);

// console.log(typeof (number + undefined)); // number
// console.log(typeof pi); // number

// const numA = 0.1;
// const numB = 0.2;

// console.log(numA + numB); // 0.30000000000000004
// // 부동소수점 오류!
// // 컴퓨터가 기본적으로 0과 1의 이진수 사용해서 동작
// // 십진수를 이진수로 표현하다가 무한소수를 유한하게 표현하다가 계산 실수

// console.log((numA + numB).toFixed(1)); // 0.3
// // tiFixed는 숫자를 문자로 바꾸게 됨
// console.log(typeof (numA + numB).toFixed()); // string
// console.log(typeof Number((numA + numB).toFixed())); // number

// // Boolean(불린)
// const boolA = true;
// const boolB = false;

// if (boolA) {
//   console.log("Hello");
// }

// if (boolB) {
//   console.log("Hello");
// }

// // Null과 undefined
// let age = null; // 명시적으로 존재하지 않거나 비어있다고 나타냄
// console.log(age); // null

// setTimeout(function () {
//   age = 85;
//   console.log(age);
// }, 1000);

// let age2 = undefined;
// // let age2; 도 동일 -> 암시적
// // null은 명시적, undefined는 암시적

// console.log(age2);

// setTimeout(function () {
//   age2 = 85;
//   console.log(age2);
// }, 1000);

// const user = {
//   name: "Hyunsoo",
//   age: 25,
//   status: null,
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user.email); // undefined
// console.log(user.status); // null

// // Array(배열), item(요소)

// const fruits = new Array("Apple", "Banana", "Cherry"); // 생성자 함수, 자바스크립트 클래스
// const fruits2 = ["Apple", "Banana", "Cherry"]; // 리터럴 방식, 대괄호 표기법

// console.log(fruits);
// console.log(fruits[1]); // zero-based numbering
// console.log(fruits.length);
// console.log(fruits[fruits.length - 1]);

// // Object(객체)
// const user = new Object(); // 생성자 함수 방식
// user.name = "Hyunsoo";
// user.age = 25;

// console.log(user); // key(속성, 프로퍼티)-value(값) 형태로 표현

// function User() {
//   this.name = "Hyunsoo";
//   this.age = 25;
// }

// const user2 = User();
// console.log(user2);

// const user3 = {
//   // 리터럴 방식
//   name: "Hyunsoo",
//   age: 25,
// };

// console.log(user3);
// console.log(user3.name); //
// //  전표기법
// console.log(user3["name"]); // 대괄호 표기법

// const key = "age";
// console.log(user3[key]);

// // 속성에 순서 ❌
// // 중복된 순서 ❌

// const userA = {
//   name: "A",
//   age: 85,
// };

// const userB = {
//   name: "B",
//   age: 45,
//   parent: userA,
// };

// console.log(userB.parent.name);
// console.log(userB["parent"][age]);

// const users = [userA, userB];

// console.log(users);
// console.log(users[0].name);

// // Function
// function hello() {
//   console.log("Hello");
// }

// hello(); // call
// console.log(hello); // js에서 함수는 데이터 취급
// // ƒ hello() {
// //   console.log("Hello");
// // }

// function getNumber() {
//   return 123;
// }

// console.log(getNumber);
// // ƒ getNumber() {
// //   return 123;
// // }
// console.log(typeof getNumber); // function
// console.log(getNumber()); // 123
// console.log(typeof getNumber()); // number

// const getNumber2 = function () {
//   return 123;
// };

// console.log(typeof getNumber2); // function
// console.log(typeof getNumber2()); // number

// const funcA = function () {
//   console.log("A");
// };

// const funcB = function (c) {
//   console.log(c);
//   c();
// };

// funcB(funcA);
// // ƒ () {
// //   console.log("A");
// // }
// // main.js:168 A

// // 형 변환(Type Conversion)

// const a = 1;
// const b = "1";

// console.log(a == b); // true
// console.log(a === b); // false

// // === 일치 연산자
// // == 동등 연산자

// const c = true;
// const d = 1;

// console.log(c == d); // true
// console.log(c === d); // false

// // 참과 거짓 (Truthy & Falsy)

// if (true) {
//   console.log("참!");
// }

// if (123) {
//   console.log("참!");
// }

// if (0) {
//   console.log("참!"); // 출력 ❌
// }

// if ("0") {
//   console.log("참!");
// }

// // ✅ 거짓인 값들
// // 1) false
// // 2) 0
// // 3) null
// // 4) undfined
// // 5) NaN
// // 6) ''
// // 7) 0n

// const fruits = ["Apple", "Banana"];

// if (fruits.length) {
//   console.log("아이템이 들어있음!");
// }

// // 데이터 타입 확인

// console.log(typeof "Hello" === "string");
// console.log(typeof 123 === "number");
// console.log(typeof false === "boolean");
// console.log(typeof undefined === "undefined");
// console.log(typeof null === "object");
// console.log(typeof null === "null"); // false
// console.log(typeof [] === "object");
// console.log(typeof {} === "object");
// console.log(typeof function () {} === "function");

// // console.log(null.constructor);
// // main.js:244 Uncaught TypeError: Cannot read properties of null (reading 'constructor')
// //     at Object.adjPd (main.js:244:18)
// //     at newRequire (index.63aff760.js:71:24)
// //     at index.63aff760.js:122:5
// //     at index.63aff760.js:145:3
// console.log([].constructor === Array);
// console.log({}.constructor === Object);

// console.log(Object.prototype.toString.call(null)); //[object Null]
// console.log(Object.prototype.toString.call(null).slice(8, -1) === "Null");

// function checkType(data) {
//   return Object.prototype.toString.call(data).slice(8, -1);
// }

// console.log(checkType("Hello"));
// console.log(checkType(123));
// console.log(checkType(false));
// console.log(checkType(undefined));
// console.log(checkType(null));
// console.log(checkType([]));
// console.log(checkType({}));
// console.log(checkType(function () {}));
// // main.js:260 String;
// // main.js:261 Number
// // main.js:262 Boolean
// // main.js:263 Undefined
// // main.js:264 Null
// // main.js:265 Array
// // main.js:266 Object
// // main.js:267 Function

// 산술 (Arithmetic)

console.log(1 + 2);
console.log(5 - 7);
console.log(3 * 4);
console.log(10 / 2);
console.log(7 % 5);

function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(3));
console.log(isEven(12));

// 할당 (Assignment)

const a = 3;

// a = a + 2; // 재할당 불가
// main.js:296 Uncaught TypeError: Assignment to constant variable.
//     at Object.adjPd (main.js:296:1)
//     at newRequire (index.63aff760.js:71:24)
//     at index.63aff760.js:122:5
//     at index.63aff760.js:145:3
//

let b = 3;
b += 2;
b -= 1;
b *= 3;
b /= 2;
b %= 5;

console.log(a);
console.log(b);

// 증감(Increment & Decrement)

let m = 3;

console.log(m++);
console.log(++m);
console.log(m);
console.log(m--);
console.log(--m);
console.log(m);
