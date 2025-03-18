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

// // ✅ 매개변수 패턴 (Parameter pattern)
// //// 기본값 (Default value)

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, 2));
// console.log(sum(7)); // NaN

// function sum1(a, b = 1) {
//   return a + b;
// }

// console.log(sum1(1, 2));
// console.log(sum1(7));

// //// 구조 분해 할당 (Destructuring assignment)
// const user = {
//   name: "Hess",
//   age: 20,
// };

// function getName(user) {
//   const { name } = user;
//   return name;
// }

// function getName1({ name }) {
//   return name;
// }

// function getEmail({ email = "이메일이 없습니다." }) {
//   return email;
// }

// console.log(getName(user));
// console.log(getName1(user));
// console.log(getEmail(user)); // 이메일이 없습니다.

// const fruits = ["Apple", "Banana", "Cherry"];
// const numbers = [1, 2, 3, 4, 5, 6, 7];

// function getSecondItem(array) {
//   return array[1];
// }

// function getSecondItem1([, b]) {
//   return b;
// }

// console.log(getSecondItem(fruits)); // Banana
// console.log(getSecondItem1(fruits));
// console.log(getSecondItem1(numbers));

// //// 나머지 매개변수 (Rest parameter)
// function sum2(...rest) {
//   console.log(rest);
//   console.log(arguments);
//   return rest.reduce(function (acc, cur) {
//     return acc + cur;
//   }, 0);
// }

// console.log(sum2(1, 2));
// // (2) [1, 2]
// // main.js:121 Arguments(2) [1, 2, callee: (...), Symbol(Symbol.iterator): ƒ]
// // main.js:127 3
// console.log(sum2(1, 2, 3, 4));
// (4)[(1, 2, 3, 4)];
// // main.js:121
// // Arguments(4) [1, 2, 3, 4, callee: (...), Symbol(Symbol.iterator): ƒ]
// // main.js:131 10
// console.log(sum2(1, 2, 3, 4, 5, 6, 7, 8, 9));
// // (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
// // main.js:121 Arguments(9) [1, 2, 3, 4, 5, 6, 7, 8, 9, callee: (...), Symbol(Symbol.iterator): ƒ]
// // main.js:136 45

// // ✅ 화살표 함수 (Arrow function)

// // function sum() {}
// // const sum = function () {}
// // const sum = () => {}; // ECMA6 이후 등장, 함수 선언 아니고 표현

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, 2));
// console.log(sum(10, 20));

// const sum1 = (a, b) => {
//   return a + b;
// };

// const sum2 = (a, b) => a + b;

// console.log(sum1(1, 2));
// console.log(sum1(10, 20));

// const a = () => {};
// const b = (x) => {}; // 하나일 때는 소괄호 생략 가능
// const c = (x, y) => {};
// const d = (x) => {
//   return x * x;
// }; // 중괄호와 return 같이 생략 가능
// const e = (x) => x * x;
// const f = (x) => {
//   console.log(x * x);
//   return x * x; // 이런 경우는 중괄호와 return 생략 불가능
// };
// const g = () => {
//   return { a: 1 };
// };
// // const h = () => {
// //   a: 1;
// // }; // 이거는 잘못됨
// const h = () => ({ a: 1 });
// const i = () => {
//   return [1, 2, 3];
// };
// const j = () => [1, 2, 3];

// // this 키워드의 차이가 있음

// // ✅ 즉시실행함수 (IIFE, Immediately-Invoked Function Expression)

// const a = 7;

// const double = () => {
//   console.log(a * 2);
// };

// double();

// // 별도의 이름 없이 실행되기를 바란다면 익명 함수로 즉시 실행 함수
// (() => {
//   console.log(a * 2);
// })();

// (() => {})(); // (F)()
// (function () {})(); // (F)()
// // (function () {}()); // (F())
// // !function(){}(); // !F()
// // +function(){}(); // +F()

// ((a, b) => {
//   console.log(a);
//   console.log(b);
// })(1, 2);

// // 다양한 전역 데이터들의 이름을 간소화할 수 있음
// ((a, b) => {
//   console.log(a); // 해당하는 객체에 대해 유추할 수 없는 이름으로 바꿔 쓸 수 있음
//   console.log(b);
// })(window, document);
// // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// // main.js:217 #document (http://localhost:1234/)

// ((a, b) => {
//   console.log(a.innerWidth); // 150
//   console.log(b.body);
//   150; // <body>​<h1>​Hello world​</h1>​</body>​
// })(window, document);

// // ✅ 콜백 (Callback)
// // 콜백이란 하나의 함수

// const a = (callback) => {
//   console.log("A");
//   callback();
// };

// const b = () => {
//   console.log("B");
// };

// a(b);
// // A
// // B

// const sum = (a, b, c) => {
//   setTimeout(() => {
//     c(a + b);
//     return a + b;
//   }, 1000);
// };

// sum(1, 2, (value) => {
//   console.log(value);
// });

// sum(3, 7, (value) => console.log(value));

// // https://www.gstatic.com/webp/gallery/4.jpg

// const loadImage = (url, cb) => {
//   const imgEl = document.createElement("img");
//   imgEl.src = url;
//   imgEl.addEventListener("load", () => {
//     setTimeout(() => {
//       cb(imgEl);
//     }, 2000);
//   });
// };

// const conatinerEl = document.querySelector(".container");
// loadImage("https://www.gstatic.com/webp/gallery/4.jpg", (imgEl) => {
//   conatinerEl.innerHTML = "";
//   conatinerEl.append(imgEl);
// });

// // ✅ 재귀(Recursive)

// let i = 0;
// const a = () => {
//   console.log("A");
//   i += 1;
//   if (i < 4) {
//     a();
//   }
// };

// a();

// const userA = { name: "A", parent: null };
// const userB = { name: "B", parent: userA };
// const userC = { name: "C", parent: userB };
// const userD = { name: "D", parent: userC };

// const getRootUser = (user) => {
//   if (user.parent) {
//     return getRootUser(user.parent);
//   }
//   return user;
// };

// console.log(getRootUser(userD));

// // ✅ 호출 스케줄링 (Scheduling a function call)

// const hello = () => console.log(`hello~`);

// const timeout = setTimeout(hello, 2000);
// const timeInterval = setInterval(hello, 2000); // 2초에 한번씩 실행

// const h1El = document.querySelector("h1");
// h1El.addEventListener("click", () => {
//   console.log("Clear!");
//   clearInterval(timeInterval);
//   clearTimeout(timeout);
// });

// ✅⭐ this

//// 📌 일반 함수의 this는 **호출 위치**에서 정의
//// 📌`화살표 함수의 this는 **자신이 선언된 함수(렉시컬) 범위**에서 정의

const user = {
  firstName: "Henry",
  lastName: "Smith",
  age: 85,
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  }, // 여기서 this는 getFullName이라는 속성이 들어있는 해당하는 객체 데이터
};

console.log(user.getFullName()); // 호출된 위치에서 연결된 객체 데이터가 user

const user1 = {
  firstName: "Henry",
  lastName: "Smith",
  age: 85,
  getFullName: () => {
    return `${this.firstName} ${this.lastName}`;
  }, // 자신된 선언된 함수의 내용을 감싸고 있는 외부의 또 다른 함수를 기준으로 해서 this를 사용
  // 이 부분 함수 감싸고 있는 다른 함수 없기 때문에 undefined
};

console.log(user1.getFullName()); // undefined undefined

function user2() {
  this.firstName = "Nancy";
  this.lastName = "Abbot";

  return {
    firstName: "Henry",
    lastName: "Smith",
    age: 85,
    getFullName: () => {
      return `${this.firstName} ${this.lastName}`;
    },
  };
}

const u = user2();
console.log(u.getFullName()); // Nancy Abbot

function user3() {
  this.firstName = "Nancy";
  this.lastName = "Abbot";

  return {
    firstName: "Henry",
    lastName: "Smith",
    age: 85,
    getFullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  };
}

const u3 = user3();
console.log(u3.getFullName()); // Henry Smith

function user4() {
  this.firstName = "Nancy";
  this.lastName = "Abbot";

  return {
    firstName: "Henry",
    lastName: "Smith",
    age: 85,
    getFullName() {
      // function과 :는 생략 가능
      return `${this.firstName} ${this.lastName}`;
    },
  };
}

const lewis = {
  firstName: "Lewis",
  lastName: "Yeon",
};

const u4 = user4();
console.log(u4.getFullName());
console.log(u4.getFullName.call(lewis));
// getFullName이 호출하는 객체의 대상은 u4가 아니고 lewis가 됨

const timer = {
  title: "TIMER!",
  timeout() {
    console.log(this.title);
    setTimeout(function () {
      console.log(this.title); // undefined
      // 일반 함수에서의 this는 호출 위치에서 정의됨으로
      // setTimeout이라는 자바스크립트 함수 내부 어디에선가 호출이 됨
      // 모르는 객체에서 호출
    }, 1000);
    setTimeout(() => {
      console.log(this.title); // TIMER!
      // 화살표 함수는 자신이 선언된 함수 범위에서 정의됨
      // timeout이라는 함수가 감싸고 있음. this 키워드 유지해서 작성 가능
    }, 1000);
  },
};

timer.timeout();
