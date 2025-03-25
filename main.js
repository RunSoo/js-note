// // ✅ 동기(Synchronous)와 비동기(Asynchronous)
// // - 동기: 순차적으로 코드 실행 O
// // - 비동기: 순차적으로 코드 실행 X

// console.log(1);
// setTimeout(() => {
//   // 순서대로 동작하지 않음 => 대표적 비동기 함수수
//   console.log(2);
// }, 2000);
// console.log(3);

// const btnEl = document.querySelector("h1");
// btnEl.addEventListener("click", () => {
//   console.log("Clicked");
// });

// console.log("Hello World");

// fetch("https://www.omdbapi.com.?apikey=7035c60c&s=frozen")
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));

// console.log(1);
// console.log(2);
// console.log(3);

// ✅ 콜백(Callback) 패턴

const a = () => {
  setTimeout(() => {
    console.log(1); // 1초 뒤에 콜백 실행
  }, 1000);
};
const b = () => console.log(2);

a();
b();

const callbackPattern = () => {
  const a = (callback) => {
    setTimeout(() => {
      console.log(1);
      callback(); // 1과 2의 순서대로의 출력 보장
    }, 1000);
  };
  const b = () => console.log(2);

  a(() => {
    b();
  });
};

callbackPattern();

const callbackHell = () => {
  const a = (callback) => {
    setTimeout(() => {
      console.log(1);
      callback();
    }, 1000);
  };

  const b = (callback) => {
    setTimeout(() => {
      console.log(2);
      callback();
    }, 1000);
  };

  const c = () => {
    setTimeout(() => {
      console.log(3);
    }, 1000);
  };

  // ⚠️ 콜백 지옥 => 계속해서 들여쓰기 하면서 파고들어가게 되는 패턴
  a(() => {
    b(() => {
      c();
    });
  });
};

callbackHell();
