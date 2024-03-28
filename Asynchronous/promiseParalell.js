// 다섯 주자들이 동시에 질주
// 데드라인(밀리초) 안에 들어오지 못하면 탈락
let DEADLINE = 1450;

function getRunPromise (name) {
  return new Promise((resolve, reject) => {
    const time = 1000 + Math.random() * 500;

    setTimeout(() => {
      if (time < DEADLINE) {
        console.log(`🚩 ${name} 도착 - ${(time)/1000}초`);
        resolve({name, time});

      } else {
        reject((`${name} 시간초과`));
      }
    }, time);
  });
}

console.log(
  '철수,영희,돌준,정아,길돈'
  .split(',')
  .map(getRunPromise)
);

// all 
// 한 명이라도 탈락하면 전체 탈락
Promise.all(
  '철수,영희,돌준,정아,길돈'
  .split(',')
  .map(getRunPromise)
)
.then(console.log)
.catch(console.error)
.finally(() => {
  console.log('- - 경기 종료 - -');
});

// 성공시 탑3 표시
Promise.all(
  '철수,영희,돌준,정아,길돈'
  .split(',')
  .map(getRunPromise)
)
.then(arr => {
  return arr.sort((a, b) => {
    console.log(a,b);
    return a.time - b.time
  })
  .map(({name}) => name)
  .splice(0, 3)
  .join(', ');
})
.then(top3 => {
  console.log(`탑3: ${top3}`);
})
.catch(console.error)
.finally(() => {
  console.log('- - 경기 종료 - -');
});

// allSettled
Promise.allSettled(
  '철수,영희,돌준,정아,길돈'
  .split(',')
  .map(getRunPromise)
)
.then(console.log)
// ⚠️ catch는 동작하지 않음
.finally(() => {
  console.log('- - 경기 종료 - -');
});

Promise.allSettled(
  '철수,영희,돌준,정아,길돈'
  .split(',')
  .map(getRunPromise)
)
.then(arr => {
  return {
    succ: arr.filter(result => {
      return result.status === 'fulfilled'
    }),
    fail: arr.filter(result => {
      return result.status === 'rejected'
    })
  }
})
.then(res => {
  res.succ.sort((a, b) => {
    return a.value.time - b.value.time;
  });
  console.log(
    `완주: ${res.succ.length}명 (1등: ${res.succ[0].value.name})`
  );
  console.log(
    `탈락: ${res.fail.length}명`
  );
})

.finally(() => {
  console.log('- - 경기 종료 - -');
});

// any
DEADLINE = 1050;
Promise.any(
  '철수,영희,돌준,정아,길돈'
  .split(',')
  .map(getRunPromise)
)
.then(console.log)
// ⚠️ 모두 실패해도 catch는 동작하지 않음
.finally(() => {
  console.log('- - 경기 종료 - -');
});