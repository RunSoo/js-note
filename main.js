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

// ✅ 기본 동작 방지

// 마우스 휠의 스크롤 동작 방지
const parentEl = document.querySelector(".parent");
parentEl.addEventListener("wheel", (event) => {
  event.preventDefault();
  console.log("Wheel");
});

// <a> 태그에서 페이지 이동 방지
const anchorEl = document.querySelector("a");
anchorEl.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("anchor");
});
