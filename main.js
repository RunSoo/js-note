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

// Boolean(불린)
const boolA = true;
const boolB = false;

if (boolA) {
  console.log("Hello");
}

if (boolB) {
  console.log("Hello");
}

// Null과 undefined
let age = null; // 명시적으로 존재하지 않거나 비어있다고 나타냄
console.log(age); // null

setTimeout(function () {
  age = 85;
  console.log(age);
}, 1000);

let age2 = undefined;
// let age2; 도 동일 -> 암시적
// null은 명시적, undefined는 암시적

console.log(age2);

setTimeout(function () {
  age2 = 85;
  console.log(age2);
}, 1000);

const user = {
  name: "Hyunsoo",
  age: 25,
  status: null,
};

console.log(user.name);
console.log(user.age);
console.log(user.email); // undefined
console.log(user.status); // null
