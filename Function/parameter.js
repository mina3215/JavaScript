// default parameter
function add(a = 2, b = 4) {
  console.log(`${a} + ${b}`);
  return a + b;
}

console.log(
  add(),
  add(1),
  add(1, 3)
);

// arguments
function add(a, b) {
  console.log('1.', arguments);
  console.log('2.', arguments[0]);
  console.log('3.', typeof arguments);
  return a + b;
}

console.log(
  '4.', add(1, 3, 5, 7)
);

function add(a, b) {
  for (const arg of arguments) {
    console.log(arg);
  }
  return a + b;
}

console.log(
  add(1, 3, 5, 7)
);

// 💡 타입에 안전한 버전
function getAverage() {
  let result = 0, count = 0;
  for (const num of arguments) {
    if (typeof num !== 'number') continue;
    result += num;
    count++;
  }
  return result / count;
}

console.log(
  getAverage(2, '가', 8, true, 5)
);


// ♻️ 새로고침 후 실행
const add1 = (a, b) => a + b;
const sub1 = (a, b) => a - b;
const mul1 = (a, b) => a * b;
const div1 = (a, b) => a / b;

function combineArms () {
  return (x, y) => {
    let result = x;
    for (const arm of arguments) {
      if (typeof arm !== 'function') continue;
      result = arm(result, y);
    }
    return result;
  }
}

const add_mul = combineArms(add1, mul1, 1, true);
const add_mul_sub = combineArms(add1, mul1, sub1);
const add_mul_sub_div = combineArms(add1, mul1, sub1, div1);

// 💡 익명 함수 사용됨
const add_mul_sub_div_pow
  = combineArms(add1, mul1, sub1, div1, (x, y) => x ** y);

// 나머지 변수 (rest paramenter) ...변수그룹명
// 얘넨 진짜 배열임
console.log(
  '3.',
  classIntro(3, '김민지', '영희', '철수', '보라')
); // 호이스팅

function classIntro (classNo, teacher, ...children) {
  console.log('1.', children);
  console.log('2.', arguments);
// 1. [ '영희', '철수', '보라' ]
// 2. [Arguments] { '0': 3, '1': '김민지', '2': '영희', '3': '철수', '4': '보라' }

  let childrenStr = '';
  for (const child of children) {
    if (childrenStr) childrenStr += ', ';
    childrenStr += child;
  }
  return `${classNo}반의 선생님은 ${teacher}, `
    + `학생들은 ${childrenStr}입니다.`
}

