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

// // 산술 (Arithmetic)

// console.log(1 + 2);
// console.log(5 - 7);
// console.log(3 * 4);
// console.log(10 / 2);
// console.log(7 % 5);

// function isEven(num) {
//   return num % 2 === 0;
// }

// console.log(isEven(3));
// console.log(isEven(12));

// // 할당 (Assignment)

// const a = 3;

// // a = a + 2; // 재할당 불가
// // main.js:296 Uncaught TypeError: Assignment to constant variable.
// //     at Object.adjPd (main.js:296:1)
// //     at newRequire (index.63aff760.js:71:24)
// //     at index.63aff760.js:122:5
// //     at index.63aff760.js:145:3
// //

// let b = 3;
// b += 2;
// b -= 1;
// b *= 3;
// b /= 2;
// b %= 5;

// console.log(a);
// console.log(b);

// // 증감(Increment & Decrement)

// let m = 3;

// console.log(m++);
// console.log(++m);
// console.log(m);
// console.log(m--);
// console.log(--m);
// console.log(m);

// // 부정(Negation)

// console.log(!true);
// console.log(!false);

// console.log(!0); // true
// console.log(!!0); // false
// console.log(!!!0); // true
// console.log(!null); // true
// console.log(!undefined); // true
// console.log(!NaN); // true
// console.log(!""); // true

// console.log(!{}); // false
// console.log(![]); // false

// // 비교(Comparison)

// const a = 1;
// const b = 3;

// // 동등(형 변환!) - 동등 연산자의 사용은 가급적 피하기❗
// console.log(a == b); // false

// // 부등(형 변환!)
// console.log(a != b); // true

// // 일치
// console.log(a === b); // false

// // 불일치
// console.log(a !== b); // true

// // 큼
// console.log(a > b); // false

// // 크거나 같음
// console.log(a >= b); // false

// // 논리(Logical)

// const a = true;
// const b = true;

// // AND(그리고) 연산자
// if (a && b) {
//   console.log("모두가 참");
// }

// // OR(또는) 연산자
// if (a || b) {
//   console.log("하나 이상이 참!");
// }

// // && 연산자는 왼쪽에서부터 거짓을 찾음
// console.log(true && false);
// console.log(1 && 0); // 0: 피연산자가 반환될 수 있음
// console.log(1 && 2 && 0); // 0
// console.log(1 && 0 && 2); // 0
// console.log(1 && 2 && 3); // 3
// console.log("A" && "B" && ""); //
// console.log("A" && "B" && "C"); // C

// // || 연산자는 왼쪽에서부터 참을 찾음
// console.log(false || true); // true
// console.log(0 || 1); // 1
// console.log(false || 0 || {}); // {}
// console.log(false || [] || null);
// console.log(function () {} || undefined || "");
// console.log(false || 0 || NaN);

// // Nullish 병합(Nullish Coalescing)

// const n = 0;

// // OR 연산자를 사용한 경우
// const num1 = n || 7; // 왼쪽부터 거짓이 아닌 데이터를 찾음
// console.log(num1); // 7

// // Nullish 병합 연산자를 사용한 경우
// const num2 = n ?? 7; // 왼쪽부터 null이나 undefined가 아닌 데이터를 찾음 (범위 축소)
// console.log(num2); // 0

// console.log(null ?? 1); // 1
// console.log(undefined ?? 2); // 2
// console.log(null ?? undefined); // undefined - 더 이상 없으니까
// console.log(null ?? 1 ?? 2); // 1
// console.log(false ?? 1 ?? 2); // false
// console.log(0 ?? 1 ?? 2); // 0

// // 삼항(Ternary)
// const a = 1;

// if (a < 2) {
//   console.log("참!");
// } else {
//   console.log("거짓...");
// }

// // 삼항 연산자
// // 조건 ? 참 : 거짓
// console.log(a < 2 ? "참!" : "거짓...");

// function getAlert(message) {
//   return message ? message : "메시지가 존재하지 않습니다.";
// }

// console.log(getAlert("안녕하세요~"));
// console.log(getAlert(""));
// console.log(getAlert());

// // 전개 연산자(Spread Operator)

// const a = [1, 2, 3];

// console.log(...a); // 1 2 3
// console.log(1, 2, 3); // 1 2 3

// const b = [4, 5, 6];

// const c = a.concat(b);
// console.log(c); // [1, 2, 3, 4, 5, 6]

// const d = [a, b];
// console.log(d); // [Array(3), Array(3)]

// const e = [...a, ...b];
// console.log(e); // [1, 2, 3, 4, 5, 6]

// const objA = { x: 1, y: 2 };
// const objB = { y: 3, z: 4 };

// const objC = Object.assign({}, objA, objB);
// console.log(objC); // {x: 1, y: 3, z: 4}

// const objD = { objA, objB };
// console.log(objD); // {objA: {…}, objB: {…}}

// const objE = { ...objA, ...objB };
// console.log(objE); // {x: 1, y: 3, z: 4}

// function fn(x, y, z) {
//   console.log(x, y, z);
// }

// fn(1, 2, 3); // 1 2 3

// const arrA = [1, 2, 3];
// fn(...arrA); // 1 2 3

// // ✅ 구조 분해 할당 (Destructuring assignment)
// const arr = [1, 2, 3];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];
// const [a, b, c] = arr;

// let e = 0;
// let f = 0;
// [, e, f] = arr;

// console.log(a, b, c); // 1 2 3
// console.log(e, f); // 2 3

// const [g, ...rest] = arr;
// console.log(g, rest); // 1 (2) [2, 3]

// const obj = {
//   a1: 1,
//   b1: 2,
//   c1: 3,
// };

// const { a1, b1 } = obj; // 속성 이름으로 해당하는 것 찾을 수 있음
// const { c1 } = obj;
// const { d1 } = obj;
// const { e1: four = 4 } = obj;
// const { a1: hyunsoo } = obj;

// console.log(a1, b1); // 1 2
// console.log(c1); // 3
// console.log(d1); // undefined
// // console.log(e1); // main.js:507 Uncaught ReferenceError: e1 is not defined
// console.log(four); // 4
// console.log(hyunsoo); // 1

// const { f1, ...rest1 } = obj;
// console.log(f1, rest1); // undefined {a1: 1, b1: 2, c1: 3}

// // ✅ 선택적 체이닝(Optional Chaining)

// const user = {};

// console.log(user.name); // undefined

// const user1 = null;
// // console.log(user1.name); //main.js:521 Uncaught TypeError: Cannot read properties of null (reading 'name')
// console.log(user1?.name); // undefined

// const userA = {
//   name: "Jane",
//   age: 85,
//   address: {
//     country: "Korea",
//     city: "Seoul",
//   },
// };

// const userB = {
//   name: "Ruby",
//   age: 22,
// };

// function getCity(user) {
//   return user?.address?.city || "주소 없음";
// }

// console.log(getCity(userA)); // Seoul
// console.log(getCity(userB)); // 주소 없음

// // ✅ If, Switch 조건문

// // If 조건문

// function isPositive(number) {
//   if (number > 0) {
//     return "양수";
//   }
// }

// console.log(isPositive(1));
// console.log(isPositive(-1)); // undefined

// function isPositive2(number) {
//   if (number > 0) {
//     return "양수";
//   } else if (number < 0) {
//     return "음수";
//   } else {
//     return "0";
//   }
// }

// console.log(isPositive2(-1));

// // Switch 조건문

// function price(fruit) {
//   switch (fruit) {
//     case "Apple":
//       return 1000;
//     case "Banana":
//       return 1500;
//     case "Cherry":
//       return 2000;
//     default:
//       return 0;
//   }
// }

// console.log(price("Apple"));
// console.log(price("Banana"));
// console.log(price("Cherry"));
// console.log(price("Hello"));

// // ✅ For, For of, For in 반복문

// // For 반복문

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// for (let i = 9; i > -1; i -= 1) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// }

// // For of 반복문
// const fruits = ["Apple", "Banana", "Cherry"];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(fruits[i]);
// }

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// const users = [
//   { name: "Hans", age: 20 },
//   { name: "Leo", age: 23 },
//   { name: "Louisa", age: 30 },
// ];

// for (const user of users) {
//   console.log(user.name);
// }

// // For in 반복문

// const user = {
//   name: "Henry",
//   age: 20,
//   isValid: true,
//   email: "henry@gmail.com",
// };

// for (const key in user) {
//   console.log(key);
//   console.log(user[key]);
// }

// ✅ while, do while 반복문

// while 반복문

let n = 0;
while (n < 4) {
  console.log(n);
  n += 1;
}
do {
  console.log(n);
  n += 1;
} while (n < 4);
