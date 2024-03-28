const DEADLINE = 1400;

function getRelayPromise (name, start, failMsg) {
  console.log(`👟 ${name} 출발`);

  // 💡 랜덤 시간만큼 달리고 결과를 반환하겠다는 약속을 만들어 반환
  return new Promise((resolve, reject) => {
    console.log(this);
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