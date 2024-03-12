// IIFE는 무엇에 사용 되었을까?
const initialMessage = (function () {
  // ⚠️ var를 사용함에 주목
  var month = 8;
  var day = 15;
  var temps = [28, 27, 27, 30, 32, 32, 30, 28];
  var avgTemp = 0;
  for (const temp of temps) {
    avgTemp += temp
  }
  avgTemp /= temps.length;

  return `${month}월 ${day}일 평균기온은 섭씨 ${avgTemp}도입니다.`;
})();

console.log(initialMessage);
// console.log(month); // 에러남

// 요즘은 아래처럼 하면 됨
let initialMessage1;

{
  const month = 8;
  // var month = 8; // 예전에는 var가 block scope는 걍 무시해버려서 함수형으로 썼어야 했음.
  // 함수는 무시하지 않아서.
  const day = 15;
  const temps = [28, 27, 27, 30, 32, 32, 30, 28];
  let avgTemp = 0;
  for (const temp of temps) {
    avgTemp += temp
  }
  avgTemp /= temps.length;

  initialMessage = `${month}월 ${day}일 평균기온은 섭씨 ${avgTemp}도입니다.`;
};

console.log(initialMessage1);
// console.log(month); // 이거 에러남 -> scope차이
// 새로고침 후 const를 var로 바꾸고 실행해볼 것


