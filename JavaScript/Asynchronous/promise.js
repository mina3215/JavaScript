// callback hell
const DEADLINE = 1400;

function relayRun (name, start, nextFunc, failMsg) {
  console.log(`👟 ${name} 출발`);
  const time = 1000 + Math.random() * 500;

  setTimeout(() => {
    if (time < DEADLINE) {
      console.log(`🚩 ${name} 도착 - ${(start + time)/1000}초`);
      nextFunc?.(start + time);

    } else {
      console.log(failMsg);
      console.log(`😢 완주 실패 - ${(start + time)/1000}초`);
    }

    if (time >= DEADLINE || !nextFunc) {
      console.log('- - 경기 종료 - -');
    }
  }, time);
}

relayRun('철수', 0, start1 => {
  relayRun('영희', start1, start2 => {
    relayRun('돌준', start2, start3 => {
      relayRun('정아', start3, start4 => {
        relayRun('길돈', start4, null, '아아, 아깝습니다...');
      }, '정아에게 무리였나보네요.');
    }, '돌준이 분발해라.');
  }, '영희가 완주하지 못했네요.');
}, '철수부터 광탈입니다. ㅠㅠ');

// Promise
const borrow = 20;

// 빌린 돈의 10%를 더해 값겠다는 약속
// reject는 지금 사용하지 않음
const payWith10perc = new Promise((resolve, reject) => {
  resolve(borrow * 1.1);
});

payWith10perc
.then(result => {
  console.log(result + '만원');
});

const borrow = 20;

const payWith10perc = new Promise((resolve, reject) => {
  // 💡 내부에서 비동기 코드 사용
  setTimeout(() => {
    resolve(borrow * 1.1);
  }, 1000); // 1초 후 갚겠음
});

// ⚠️ 콘솔에서 분리해서 실행하면 안 됨!
// 프로미스가 생성되는 순간부터 시간 경과
payWith10perc
.then(result => {
  console.log(result + '만원');
});

// ⭐ then은 연속적으로 메서드 체이닝 가능

new Promise((resolve) => {
  resolve(2);
})
.then(i => i * 4)
.then(i => i - 3)
.then(i => i ** 2)
.then((i) => {
  console.log(i);
});

//💰 10% 이자, 채무자 파산가능성 10%, 5번 빌려주기
// 빌린 금액으로 약속을 하는 함수
function moneyLend (borrow) {
  
  return new Promise((resolve, reject) => {
    console.log(`채무 ${borrow}만원`);

    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject('채무자 파산');
      }

      resolve(borrow * 1.1);
    }, 1000);
  });
  
}

moneyLend(20)
.then(result => moneyLend(result))
.then(moneyLend) // 인자를 하나 받아서 그대로 쓰므로
.then(moneyLend) // 이렇게 줄여버릴 수 있음
.then(moneyLend)
.then(result => {
  console.log(`💰 반납 ${result}만원`);
})
.catch(msg => {
  console.error(msg);
})
.finally(() => {
  console.log('- - 대금업 종료 - -');
});

// 그럼...
// 🏃🏃🏃 릴레이 예제 프로미스로 구현

const DEADLINE = 1400;

function getRelayPromise (name, start, failMsg) {
  console.log(`👟 ${name} 출발`);

  // 💡 랜덤 시간만큼 달리고 결과를 반환하겠다는 약속을 만들어 반환
  return new Promise((resolve, reject) => {
    const time = 1000 + Math.random() * 500;

    setTimeout(() => {
      if (time < DEADLINE) {
        console.log(`🚩 ${name} 도착 - ${(start + time)/1000}초`);
        resolve(start + time);
      } else {
        
        console.log(failMsg);
        reject((start + time) / 1000);
      }
    }, time);
  })
}

getRelayPromise('철수', 0, '철수부터 광탈입니다. ㅠㅠ')
.then(result => {
  return getRelayPromise('영희', result, '영희가 완주하지 못했네요.');
})
.then(result => {
  return getRelayPromise('돌준', result, '돌준이 분발해라.');
})
.then(result => {
  return getRelayPromise('정아', result, '정아에게 무리였나보네요.');
})
.then(result => {
  return getRelayPromise('길돈', result, '아아, 아깝습니다...');
})
.catch(msg => {
  console.log(`😢 완주 실패 - ${msg}초`);
})
.finally(() => {
  console.log('- - 경기 종료 - -');
});