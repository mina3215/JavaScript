//기본형
function add (x, y) {
  return x + y;
}

console.log(add(2, 7));

// 상수나 변수에 함수 대입 함수도 값
const subt = function (x, y) {
  return x - y;
}

console.log(subt(7, 2));

// 💡 기존의 함수를 재정의하는것도 가능
add = function (x, y) {
  console.log(`${x}와 ${y}를 더합니다.`);
  console.log(`결과는 ${x + y}입니다.`);
  return x + y;
}

console.log(add(2, 7));

// 한 줄 안에 값만 반환시 > 화살표 함수
const mult = (x, y) => x * y;

console.log(mult(2, 7));

// 두 줄 이상의 작업이 있을 시
const mult2 = (x, y) => {
  console.log(`${x}와 ${y}를 곱합니다.`);
  console.log(`결과는 ${x * y}입니다.`);
  return x * y;
};

console.log(mult2(2, 7));

// 인자가 하나일 때는 괄호 없이 선언 가능
const pow = x => x ** 2;
console.log(pow(3));