// 원시형 - String
const string1 = "Hello";
const string2 = "Hello";
const string3 = `Hello ${string1}?!`; // 보관: 데이터를 채워 넣는 역할
// ${} 템플릿 리터럴: 기호를 통해서 문자열을 만드는 방법

console.log(string3);

// 원시형 - Number
const number = 123;
const pi = 3.14;

console.log(number + 1);
console.log(number + undefined); // NaN -> 타입은 숫자
console.log(pi);

console.log(typeof (number + undefined)); // number
console.log(typeof pi); // number

const numA = 0.1;
const numB = 0.2;

console.log(numA + numB); // 0.30000000000000004
// 부동소수점 오류!
// 컴퓨터가 기본적으로 0과 1의 이진수 사용해서 동작
// 십진수를 이진수로 표현하다가 무한소수를 유한하게 표현하다가 계산 실수

console.log((numA + numB).toFixed(1)); // 0.3
// tiFixed는 숫자를 문자로 바꾸게 됨
console.log(typeof (numA + numB).toFixed()); // string
console.log(typeof Number((numA + numB).toFixed())); // number
