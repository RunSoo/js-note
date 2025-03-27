// ✅ Symbol, BigInt 데이터

// 심볼(Symbol)

// 변경이 불가한 데이터로, 유일한 식별자를 만들어 데이터를 보호하는 용도로 사용 가능

// Symbol('설명')
// '설명'은 단순 디버깅을 위한 용도일 뿐, 심볼 값과는 관계 없음

const sKey = Symbol("Hello");
const user = {
  key: "일반 정보",
  [sKey]: "민감 정보",
};

console.log(user.key); // 일반 정보
console.log(user["key"]); // 일반 정보
console.log(user[sKey]); // 민감 정보
console.log(user[Symbol("Hello")]); // undefined
console.log(sKey); // Symbol(Hello)

// BigInt

// BigInt는 길이 제한이 없는 정수(integer)
// 숫자(number) 데이터가 안정적으로 표시할 수 있있는
// 최대치(`2^53 ~ 1`)보다 큰 정수를 표현할 수 있음
// 정수 뒤에 `n`을 붙이거나 `BigInt()`를 호출해 생성

const a = 11n;
const b = 22;

console.log(a + BigInt(b)); // 33n
console.log(typeof (a + BigInt(b))); // bigint

console.log(Number(a) + b); // 33
console.log(typeof (Number(a) + b)); // number
console.log(typeof (a + b)); // main.js:37 Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
