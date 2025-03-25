// ✅ DOM(Document Object Model)

// DOM이란 HTML 문서를 객체로 표현한 것
// JS에서 HTML을 제어할 수 있게 해줌

const element = document.querySelector("h1");
console.log(element.textContent); // Hello world!

// DOM API

// Node 🆚 Element

// ✔️ 노드(Node): HTML 요소, 텍스트, 주석 등 모든 것 의미
// ✔️ 요소(Element): HTML 요소를 의미, 노드를 상속

const parent = document.querySelector(".parent");

// 부모 요소의 모든 자식 노드 확인
console.log(parent.childNodes);
// NodeList(7) [text, comment, text, div.child, text, div.child, text]
// 0: text
// 1: comment
// 2: text
// 3: div.child
// 4: text
// 5: div.child
// 6: text
// length: 7
// [[Prototype]]: NodeList

// 부모 요소의 모든 자식 요소 확인
console.log(parent.children);
// HTMLCollection(2) [div.child, div.child]
// 0: div.child
// 1: div.child
// length: 2
// [[Prototype]]: HTMLCollection

console.log(parent);
{
  /* <div class="parent">
  <!-- 주석 -->
  <div class="child">1</div>
  텍스트1
  <div class="child">2</div>
  텍스트2
</div> */
}

console.dir(parent); // 객체 데이터로 출력

class N {}
class E extends N {}

console.dir(E); // class E
console.dir(N); // class N
console.dir(E.__proto__); // class N

console.dir(Element); // ƒ Element()
console.dir(Node); // ƒ Node()
console.dir(Element.__proto__); // ƒ Node()
