// // ✅ 모듈(Module)이란 특정 데이터들의 집합(파일)
// // 모듈 가져오기(Import), 내보내기(Export)

// import { hello } from "./module";

// console.log(hello);

// // ✅
// // import number, { str as xyz, arr, hello as h } from "./module";

// // console.log(number); // 123
// // console.log(xyz); // ABC
// // console.log(arr); // []
// // console.log(h); // f hello() {}

// import * as abc from "./module";

// console.log(abc);

// ✅
// setTimeout(async () => {
//   // import("./module").then((abc) => {
//   //   console.log(abc);
//   // });
//   const abc = await import("./module");
//   console.log(abc);
// }, 1000);

// import { a } from "./a";
// import { b } from "./b";

import { a, b } from "./utils";

console.log(a());
console.log(b());
