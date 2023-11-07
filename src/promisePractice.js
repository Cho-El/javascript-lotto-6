// const asyncFn = async () => {
//     console.log('start');
//     const rj1 = await rejectFn1()
//     .then()
//     .catch(err => { return `catch in rejectFn1 - ${err}`; });
//     console.log(rj1);
//     const rj2 = await rejectFn2().catch(err => { return `catch in rejectFn2 - ${err}`;  });
//     console.log(rj2);
//   }
  
//   const rejectFn1 = () => Promise.resolve('rejectFn1 resolved');
//   const rejectFn2 = () => Promise.reject('rejectFn2 rejected');
  
//   asyncFn()
//     .then(() => {
//       console.log('next asynFn()');
//     })
//     .catch((e) => {
//       console.log('asyncFn catch', e);
//     })

// async function a() {
//     try {
//         // 비동기 작업을 수행하는 a 메소드 로직
//         await someAsyncOperation();
//         console.log("a 메소드 정상 실행");
//         await b();
//     } catch (error) {
//         console.error("a 메소드 오류:", error.message);
//         await a();
//     }
//     }
    
// async function b() {
// try {
//     // 비동기 작업을 수행하는 b 메소드 로직
//     await someAsyncOperation();
//     console.log("b 메소드 정상 실행");
//     await c();
// } catch (error) {
//     console.error("b 메소드 오류:", error.message);
//     await b();
// }
// }

// async function c() {
// // 비동기 작업을 수행하는 c 메소드 로직
// console.log("c 메소드 정상 실행");
// }

// async function someAsyncOperation() {
// // 비동기 작업을 수행하는 함수 (예: Promise 반환)
// return new Promise((resolve, reject) => {
//     if (Math.random() < 0.5) {
//     reject(new Error("비동기 작업 오류"));
//     } else {
//     resolve();
//     }
// });
// }

// // a 메소드를 호출하여 시작
// a();

const makeError = () => { throw new Error('에러 클래스에 의한 에러') }

const withTryCatch = async () => {
  try {
    console.log('try-cath 를 사용한 async')
    const result = makeError();
    console.log('withTryCatch - 에러가 발생하는 위치 아래에 있는 코드 (실행되면 안됨)');
    return result;
  } catch (err) {
    throw err;
  }
}

const withoutTryCatch = async () => {
  console.log('try-cath 없는 async')
  const result = makeError();
  console.log('withoutTryCatch - 에러가 발생하는 위치 아래에 있는 코드 (실행되면 안됨)');
  return result;
}

withTryCatch()
.then(res => {
  console.log('withTryCatch - 성공결과', res)
}).catch(err => {
  console.log('withTryCatch - 실패결과', err.message)
});

withoutTryCatch()
.then(res => {
  console.log('withoutTryCatch - 성공결과', res)
})
.catch(err => {
  console.log('withoutTryCatch - 실패결과', err.message)
})