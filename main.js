// // ✅ DOM(Document Object Model)

// // DOM이란 HTML 문서를 객체로 표현한 것
// // JS에서 HTML을 제어할 수 있게 해줌

// const element = document.querySelector("h1");
// console.log(element.textContent); // Hello world!

// // DOM API

// // Node 🆚 Element

// // ✔️ 노드(Node): HTML 요소, 텍스트, 주석 등 모든 것 의미
// // ✔️ 요소(Element): HTML 요소를 의미, 노드를 상속

// const parent = document.querySelector(".parent");

// // 부모 요소의 모든 자식 노드 확인
// console.log(parent.childNodes);
// // NodeList(7) [text, comment, text, div.child, text, div.child, text]
// // 0: text
// // 1: comment
// // 2: text
// // 3: div.child
// // 4: text
// // 5: div.child
// // 6: text
// // length: 7
// // [[Prototype]]: NodeList

// // 부모 요소의 모든 자식 요소 확인
// console.log(parent.children);
// // HTMLCollection(2) [div.child, div.child]
// // 0: div.child
// // 1: div.child
// // length: 2
// // [[Prototype]]: HTMLCollection

// console.log(parent);
// {
//   /* <div class="parent">
//   <!-- 주석 -->
//   <div class="child">1</div>
//   텍스트1
//   <div class="child">2</div>
//   텍스트2
// </div> */
// }

// console.dir(parent); // 객체 데이터로 출력

// class N {}
// class E extends N {}

// console.dir(E); // class E
// console.dir(N); // class N
// console.dir(E.__proto__); // class N

// console.dir(Element); // ƒ Element()
// console.dir(Node); // ƒ Node()
// console.dir(Element.__proto__); // ƒ Node()

// ✅ 검색과 탐색

// 1️⃣ document.getElementById()

// HTML `id` 속성(Attributes) 값으로 검색할 요소를 반환
// 여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환
// 검색 결과 없으면 `null` 반환

const el = document.getElementById(`child2`);
console.log(el);

// 2️⃣ document.querySelector()

// 'CSS 선택자'로 검색한 요소를 하나 반환
// 여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환
// 검색 결과가 없으면 `null` 반환

const el2 = document.querySelector(`.child:first-child`);
console.log(el2);

// 3️⃣ document.querySelectorAll()

// 'CSS 선택자'로 검색한 모든 요소를 `NodeList`로 반환
// `NodeList` 객체는 `.forEach()`를 사용할 수 있음

const nodeList = document.querySelectorAll(".child"); // 유사배열
console.log(nodeList);
nodeList.forEach((el) => console.log(el.textContent));

console.log(Array.from(nodeList).reverse()); // 진짜 배열로 바꾸기

// 4️⃣ N.parentElement

// 노드의 부모 요소를 반환
const el3 = document.querySelector(".child");
console.log(el3.parentElement);

// 5️⃣ E.closest()

// 자신을 포함한 조상 요소 중 'CSS 선택자'와 일치하는
// 가장 가까운 요소 반환
// 요소를 찾지 못하면 `null` 반환

const el4 = document.querySelector(".child");

console.log(el4.closest("div")); // 자기 자신
console.log(el4.closest("body"));
console.log(el4.closest(".hello")); // null

// 6️⃣ N.previousSibling / N.nextSibling

// 노드의 이전 형제 또는 다음 형제 노드를 반환
const el5 = document.querySelector(".child");
console.log(el5.previousSibling); // " 텍스트1 "
console.log(el5.nextSibling); // " 텍스트2 "

// 7️⃣ E.previousElementSibling / E.nextElementSibling
const el6 = document.querySelector(".child");
console.log(el6.previousElementSibling);
console.log(el6.nextElementSibling);

// 8️⃣ E.children

// 요소의 모든 자식 요소를 반환
const el7 = document.querySelector(".parent");
console.log(el7.children); // 유사 배열  HTMLCollection()
console.log(Array.from(el7.children)); // 배열 Array(0)

// 9️⃣ E.firstElementChild / E.lastElementChild

// 요소의 첫 번째 자식 혹은 마지막 자식 요소를 반환

const el8 = document.querySelector(".parent");
console.log(el8.firstElementChild);
console.log(el8.lastElementChild);
