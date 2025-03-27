// // ✅ .addEventListener()

// // 대상에 이벤트 청취(Listen)를 등록
// // 대상에 지정한 이벤트가 발생했을 때 지정한 함수(Handler)가 호출

// // const parentEl = document.querySelector(".parent");
// // const childEl = document.querySelector(".child");

// // parentEl.addEventListener("click", () => {
// //   console.log("Parent");
// // });

// // childEl.addEventListener("click", () => {
// //   console.log("Child");
// // });

// // .removeEventListener()

// // 대상에 등록했던 이벤트 청취를 제거
// // 메모리 관리를 위해 등록한 이벤트를 제거하는 과정이 필요할 수 있음

// function removeEvent() {
//   const parentEl = document.querySelector(".parent");
//   const childEl = document.querySelector(".child");

//   const handler = () => {
//     // 언젠가 제거할꺼라면 함수 이름으로 등록해야 함
//     console.log("Parent");
//   };

//   parentEl.addEventListener("click", handler);
//   childEl.addEventListener("click", () => {
//     parentEl.removeEventListener("click", handler);
//   });
// }

// removeEvent();

// // ✅`이벤트 객체

// // 이벤트 객체는 대상에서 발생한 이벤트 정보를 담고 있음

// const parentEl = document.querySelector(".parent");

// parentEl.addEventListener("click", (event) => {
//   console.log(event.target, event.currentTarget);
// });

// parentEl.addEventListener("wheel", (e) => {
//   console.log(e);
// });

// const inputEl = document.querySelector("input");
// inputEl.addEventListener("keydown", (event) => {
//   console.log(event.key);
// });

// // ✅ 기본 동작 방지

// // 마우스 휠의 스크롤 동작 방지
// const parentEl = document.querySelector(".parent");
// parentEl.addEventListener("wheel", (event) => {
//   event.preventDefault();
//   console.log("Wheel");
// });

// // <a> 태그에서 페이지 이동 방지
// const anchorEl = document.querySelector("a");
// anchorEl.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("anchor");
// });

// // ✅ 버블링과 캡처링

// // 이벤트 전파(버블) 정지
// function stopBubble() {
//   const parentEl = document.querySelector(".parent");
//   const childEl = document.querySelector(".child");
//   const anchorEl = document.querySelector("a");

//   window.addEventListener("click", (event) => {
//     console.log("window");
//   });

//   document.body.addEventListener("click", (event) => {
//     console.log("body");
//   });

//   parentEl.addEventListener("click", (event) => {
//     event.stopPropagation();
//     console.log("parent");
//   });

//   childEl.addEventListener("click", (event) => {
//     console.log("child");
//   });

//   anchorEl.addEventListener("click", (event) => {
//     console.log("anchor");
//   });
// }

// // stopBubble();

// function capture() {
//   const parentEl = document.querySelector(".parent");
//   const childEl = document.querySelector(".child");
//   const anchorEl = document.querySelector("a");

//   window.addEventListener("click", (event) => {
//     console.log("window");
//   });

//   document.body.addEventListener(
//     "click",
//     (event) => {
//       console.log("body");
//       event.stopPropagation(); // body만 출력
//     },
//     { capture: true } // 상위 요소가 먼저 실행되도록
//   );

//   parentEl.addEventListener(
//     "click",
//     (event) => {
//       console.log("parent");
//     },
//     { capture: true }
//   );

//   childEl.addEventListener("click", (event) => {
//     console.log("child");
//   });

//   anchorEl.addEventListener("click", (event) => {
//     console.log("anchor");
//   });
// }

// // capture();

// function func() {
//   const parentEl = document.querySelector(".parent");
//   const handler = () => {
//     console.log("Parent");
//   };

//   parentEl.addEventListener("click", handler, { capture: true });
//   parentEl.removeEventListener("click", handler); // 이러면 제거가 안됨. remove 할 때도 { capture: true }로 같은 옵션 제공해야 함
// }

// func();

// 핸들러 한 번만 실행
const parentEl = document.querySelector(".parent");

parentEl.addEventListener(
  "click",
  (event) => {
    console.log("Parent");
  },
  { once: true }
);

// 기본 동작과 핸들러 실행 분리
parentEl.addEventListener(
  "wheel",
  () => {
    for (let i = 0; i < 10000; i += 1) {
      console.log(i);
    }
  },
  {
    passive: true,
  }
);
