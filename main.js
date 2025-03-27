// // ✅ Symbol, BigInt 데이터

// // 심볼(Symbol)

// // 변경이 불가한 데이터로, 유일한 식별자를 만들어 데이터를 보호하는 용도로 사용 가능

// // Symbol('설명')
// // '설명'은 단순 디버깅을 위한 용도일 뿐, 심볼 값과는 관계 없음

// const sKey = Symbol("Hello");
// const user = {
//   key: "일반 정보",
//   [sKey]: "민감 정보",
// };

// console.log(user.key); // 일반 정보
// console.log(user["key"]); // 일반 정보
// console.log(user[sKey]); // 민감 정보
// console.log(user[Symbol("Hello")]); // undefined
// console.log(sKey); // Symbol(Hello)

// // BigInt

// // BigInt는 길이 제한이 없는 정수(integer)
// // 숫자(number) 데이터가 안정적으로 표시할 수 있있는
// // 최대치(`2^53 ~ 1`)보다 큰 정수를 표현할 수 있음
// // 정수 뒤에 `n`을 붙이거나 `BigInt()`를 호출해 생성

// const a = 11n;
// const b = 22;

// console.log(a + BigInt(b)); // 33n
// console.log(typeof (a + BigInt(b))); // bigint

// console.log(Number(a) + b); // 33
// console.log(typeof (Number(a) + b)); // number
// console.log(typeof (a + b)); // main.js:37 Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions

// // ✅ 불변성 & 가변성

// // 불변성(Immutability)은 생성된 데이터가 메모리에서 변경되지 않고
// // 가변성(Mutability)은 생성된 데이터가 메모리에서 변경될 수 있음을 의미

// // 자바스크립트 원시형은 불변성을, 참조형은 가변성을 가지고 있음

// function primitive() {
//   let a = 1;
//   let b = a;
//   b = 2;

//   console.log(b); // 2
//   console.log(a); // 1
// }

// primitive();

// function reference() {
//   let a = { x: 1 };
//   let b = a;

//   b.x = 2;
//   console.log(b); // {x: 2}
//   console.log(a); // {x: 2}

//   console.log(a === b); // true
//   // 참조형은 양쪽 메모리 주소 같은지 확인
//   console.log({} === {}); // false
// }

// reference();

// ✅ 얕은 복사와 깊은 복사

// 참조형은 가변성으로 인해, 데이터를 복사할 때 주의가 필요

// 얕은 복사(Shallow Copy) - 참조형의 1차원 데이터만 복사
// 깊은 복사(Deep Copy) - 참조형의 모든 차원 데이터를 복사

function primitive() {
  let a = 1;
  let b = a;

  b = 2;

  console.log(b); // 2
  console.log(a); // 1

  b = 3;

  console.log(b); // 3
  console.log(a); // 1
}

primitive();

function shallowCopy() {
  const a = { x: 1 };
  const b = Object.assign({}, a); // 속성만 복사해서 넣음
  b.x = 2;

  console.log(b); // {x: 2}
  console.log(a); // {x: 1}
}

shallowCopy();

function shallowCopy2() {
  const a = { x: { y: 1 } };
  const b = { ...a };
  b.x.y = 2;

  console.log(b); // {x: {y: 2}}
  console.log(a); // {x: {y: 2}}
}

shallowCopy2();

import cloneDeep from "lodash/cloneDeep";

function deepCopy() {
  const a = { x: { y: 1 } };
  const b = cloneDeep(a);
  b.x.y = 2;

  console.log(b); // {x: {y: 2}}
  console.log(a); // {x: {y: 1}}
}

deepCopy();

function copyArray() {
  const a = [1, 2, 3];
  const b = a;
  b[0] = 4;
  console.log(b); // [4, 2, 3]
  console.log(a); // [4, 2, 3]
}

copyArray();

function shallowArrayCopy() {
  const a = [1, 2, 3];
  // const b = a.concat([]);
  const b = [...a];
  b[0] = 4;
  console.log(b); // [4, 2, 3]
  console.log(a); // [1, 2, 3]
}

shallowArrayCopy();

function deepArrayCopy() {
  const a = [[1, 2], [3]];
  const b = cloneDeep(a);

  b[0][0] = 5;

  console.log(b); //  [[5, 2], [1]]
  console.log(a); // [[1, 2], [3]]
}

deepArrayCopy();
