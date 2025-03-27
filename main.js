// ✅ .addEventListener()

// 대상에 이벤트 청취(Listen)를 등록
// 대상에 지정한 이벤트가 발생했을 때 지정한 함수(Handler)가 호출

// const parentEl = document.querySelector(".parent");
// const childEl = document.querySelector(".child");

// parentEl.addEventListener("click", () => {
//   console.log("Parent");
// });

// childEl.addEventListener("click", () => {
//   console.log("Child");
// });

// .removeEventListener()

// 대상에 등록했던 이벤트 청취를 제거
// 메모리 관리를 위해 등록한 이벤트를 제거하는 과정이 필요할 수 있음

function removeEvent() {
  const parentEl = document.querySelector(".parent");
  const childEl = document.querySelector(".child");

  const handler = () => {
    // 언젠가 제거할꺼라면 함수 이름으로 등록해야 함
    console.log("Parent");
  };

  parentEl.addEventListener("click", handler);
  childEl.addEventListener("click", () => {
    parentEl.removeEventListener("click", handler);
  });
}

removeEvent();
