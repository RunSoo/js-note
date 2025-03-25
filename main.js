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

// // ✅ 콜백(Callback) 패턴

// const a = () => {
//   setTimeout(() => {
//     console.log(1); // 1초 뒤에 콜백 실행
//   }, 1000);
// };
// const b = () => console.log(2);

// a();
// b();

// const callbackPattern = () => {
//   const a = (callback) => {
//     setTimeout(() => {
//       console.log(1);
//       callback(); // 1과 2의 순서대로의 출력 보장
//     }, 1000);
//   };
//   const b = () => console.log(2);

//   a(() => {
//     b();
//   });
// };

// callbackPattern();

// const callbackHell = () => {
//   const a = (callback) => {
//     setTimeout(() => {
//       console.log(1);
//       callback();
//     }, 1000);
//   };

//   const b = (callback) => {
//     setTimeout(() => {
//       console.log(2);
//       callback();
//     }, 1000);
//   };

//   const c = () => {
//     setTimeout(() => {
//       console.log(3);
//     }, 1000);
//   };

//   // ⚠️ 콜백 지옥 => 계속해서 들여쓰기 하면서 파고들어가게 되는 패턴
//   a(() => {
//     b(() => {
//       c();
//     });
//   });
// };

// callbackHell();

// // ✅ Promise

// const func1 = () => {
//   const a = () => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log(1);
//         resolve();
//       }, 1000);
//     });
//   };

//   const b = () => console.log(2);

//   a().then(() => {
//     b();
//   });
// };

// // func1();

// const func2 = () => {
//   const a = () => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log(1);
//         resolve();
//       }, 1000);
//     });
//   };
//   const b = () => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log(2);
//         resolve();
//       }, 1000);
//     });
//   };
//   const c = () => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log(3);
//         resolve();
//       }, 1000);
//     });
//   };
//   const d = () => console.log(4);

//   // // 🚨 여전히 콜백 지옥과 유사
//   // a().then(() => {
//   //   b().then(() => {
//   //     c().then(() => {
//   //       d();
//   //     });
//   //   });
//   // });

//   // a()
//   //   .then(() => {
//   //     return b();
//   //   })
//   //   .then(() => {
//   //     return c();
//   //   })
//   //   .then(() => {
//   //     d();
//   //   });

//   // a()
//   //   .then(() => b())
//   //   .then(() => c())
//   //   .then(() => {
//   //     d();
//   //   });

//   a()
//     .then(b)
//     .then(c)
//     .then(d)
//     .then(() => console.log("done"));
// };

// // func2();

// const getMovies = (movieName) => {
//   return new Promise((resolve) => {
//     fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
//         resolve();
//       });
//   });
// };

// getMovies("frozen")
//   .then(() => {
//     console.log("겨울왕국");
//     return getMovies("avengers");
//   })
//   .then(() => {
//     console.log("어벤저스");
//     return getMovies("avatar");
//   })
//   .then(() => {
//     console.log("아바타");
//   });

// // ✅ Async / Await

// const a = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(1);
//       resolve();
//     }, 1000);
//   });
// };
// const b = () => console.log(2);

// const wrap = async () => {
//   await a(); // 뒤쪽에 있는 비동기 함수의 실행을 기다린다
//   b();
// };

// wrap();

// const getMovies = (movieName) => {
//   return new Promise((resolve) => {
//     fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
//         resolve();
//       });
//   });
// };

// const wrapMovies = async () => {
//   await getMovies("frozen"); // await는 프로미스가 반환되는 함수 앞에만!
//   console.log("겨울왕국");
//   await getMovies("avengers");
//   console.log("어벤저스");
//   await getMovies("avatar");
//   console.log("아바타");
// };

// wrapMovies();

// // ✅ Resolve, Reject, 그리고 에러 핸들링
// const func1 = () => {
//   const delayAdd = (index, cb, errorCb) => {
//     setTimeout(() => {
//       if (index > 10) {
//         errorCb(`${index}는 10보다 클 수 없습니다`);
//         return;
//       }
//       console.log(index);
//       cb(index + 1);
//     }, 1000);
//   };

//   delayAdd(
//     13,
//     (res) => console.log(res),
//     (err) => console.error(err)
//   );
// };

// // func1();/

// const func2 = () => {
//   const delayAdd = (index) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (index > 10) {
//           reject(`${index}는 10보다 클 수 없습니다`);
//           return; // resolve 부분만 실행 안되는거고 나머지는 실행될 수 있어서 return 필요
//         }
//         console.log(index);
//         resolve(index + 1);
//       }, 1000);
//     });
//   };
//   delayAdd(13)
//     .then((res) => console.log(res)) // resolve로 들어감
//     .catch((error) => console.log(error))
//     .finally(console.log("Done!")); // reject로 들어감

//   const wrap = async () => {
//     const res = await delayAdd(13);
//     console.log(res);
//   };

//   const wrap1 = async () => {
//     try {
//       const res = await delayAdd(12); // try 문 안에서는 에러 발생하면 그 이후 코드는 실행하지 않음
//       console.log(res);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       // 항상 실행
//       console.log("Done!");
//     }
//   };

//   // wrap();
//   wrap1();
// };
// // func2();

// const func3 = () => {
//   const getMovies = (movieName) => {
//     return new Promise((resolve, reject) => {
//       fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
//         .then((res) => res.json())
//         .then((json) => {
//           if (json.Response === "False") {
//             reject(json.Error);
//           }
//           resolve(json);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   };

//   let loading = true;

//   getMovies("avengers")
//     .then((movies) => console.log("영화 목록: ", movies))
//     .catch((error) => console.log("에러 발생:", error))
//     .finally(() => (loading = false));

//   const wrap = async () => {
//     try {
//       const movies = await getMovies("avengers");
//       console.log("영화 목록: ", movies);
//     } catch (error) {
//       console.log("에러 발생: ", error);
//     } finally {
//       loading = false;
//     }
//   };

//   wrap();
// };

// func3();

// ✅ 반복문에서 비동기 처리

const func1 = () => {
  const getMovies = (movieName) => {
    return new Promise((resolve) => {
      fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
        .then((res) => res.json())
        .then((res) => resolve(res));
    });
  };
  const titles = ["frozen", "avengers", "avatar"];

  titles.forEach(async (title) => {
    // forEach로는 순서 보장 안됨
    const movies = await getMovies(title);
    console.log(title, movies);
  });

  const wrap = async () => {
    for (const title of titles) {
      const movies = await getMovies(title);
      console.log(title, movies);
    }
  };

  wrap();
};

func1();
