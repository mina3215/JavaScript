console.log('하나');

setTimeout(() => {
  console.log('둘');
}, 1000); // 💡 0으로 바꿔 다시 실행해 볼 것

console.log('셋');


// 달리기 경주 예제
// 1초 ~ 1.5초 사이 무작위 시간 안에 도착
function doRace (num, name) {
  console.log(`👟 ${num}번 ${name} 출발`);

  setTimeout (() => {
    console.log(`🚩 ${num}번 ${name} 도착`);
  }, 1000 + Math.random() * 500);
}

'철수,영희,돌준,정아,길돈'
.split(',')
.forEach((itm, idx) => doRace(++idx, itm));

