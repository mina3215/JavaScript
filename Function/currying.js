// 커링 (currying)
// 필요한 인자보다 적은 수의 인자를 받으면, 나머지 인자를 인자로 받는 다른 함수를 반환

// 기존의 코드
function addMultSubt (a, b, c, d) {
  return (a + b) * c - d;
}

const addMultSubt2 = (a, b, c, d) => (a + b) * c - d;

console.log(
  addMultSubt(2, 3, 4, 5),
  addMultSubt2(2, 3, 4, 5),
);

// 커링
// ⭐ 커링으로 작성된 함수
function curryAddMultSubt (a) { 
  return function (b) {
    return function (c) {
      return function (d) {
        return (a + b) * c - d;
      }
    }
  }
}

const curryAddMultSubt2 = a => b => c => d => (a + b) * c - d;

console.log(
  curryAddMultSubt(2)(3)(4)(5),
  curryAddMultSubt2(2)(3)(4)(5)
);

const curryAddMultSubtFrom2 = curryAddMultSubt(2); // 2 다음부터 해라
const curryMultSubtFrom5 = curryAddMultSubt(2)(3); // 2, 3 다음부터 해라
const currySubtFrom20 = curryAddMultSubt(2)(3)(4); // 2,3,4 다음 부터 해라 ㅇㅇ 
console.log(curryAddMultSubtFrom2);
console.log(curryMultSubtFrom5);
console.log(currySubtFrom20);
// 화살표 함수로 바꾸어 다시 실행해 볼 것