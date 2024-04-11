//일급 객체

// ⭐️ 함수의 자료형
function addNumbers (a, b) { return a + b; }
console.log(typeof addNumbers);

console.log(addNumbers instanceof Object) // addNumbers가 object인가? -> true


function isOddNum (number) {
  console.log(
    (number % 2 ? '홀' : '짝')
    + '수입니다.'
  );
  return number % 2 ? true : false;
};

const checkIfOdd = isOddNum; // 뒤에 괄호 없음 유의

console.log(checkIfOdd(3)); //된다.

let person = {
  name: '홍길동',
  age: 30,
  married: true,
  introduce: function (formal) {
    return formal
    ? '안녕하십니까. 홍길동 대리라고 합니다.'
    : '안녕하세요, 홍길동이라고 해요.';
  }
};

console.log(person.introduce(true));
console.log(person.introduce(false));

//신기함
let arithmetics = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => a / b
];

for (arm of arithmetics) {
  console.log(arm(5, 3));
}



//⭐️ 객체에 함수 프로퍼티를 포함할 때 기억할 것

let person1 = {
  name: '홍길동',
  age: 30,
  married: true,
  introduce: function () {
    return `저는 ${this.name}, ${this.age}살이고 `
    + `${this.married ? '기혼' : '미혼'}입니다.`;
  }
}

console.log(person1.introduce());

// 위에 person1은 introduce를 함수 기본형으로 해서 잘 나오는데, 화살표 함수는 this를 가르키는게 좀 달라서 this.name, this.age가 다르게 나옴

let person2 = {
  name: '홍길동',
  age: 30,
  married: true,
  introduce: ()=> {
    return `저는 ${this.name}, ${this.age}살이고 `
    + `${this.married ? '기혼' : '미혼'}입니다.`;
  }
}

console.log(person2.introduce());
// 저는 undefined, undefined살이고 미혼입니다.

// 2. 인자로 전달 -> 함수가 다른 함수를 인자로 전달받음.
let list = [1, 2, 3, 4, 5];

function doInArray (array, func) {
  for (item of array) {
    func(item);
  }
}

// console.log - console이란 객체에서 log란 키에 할당된 함수

// doInArray : 고차함수
// console.log : 콜백함수
doInArray(list, console.log);

function doNTimes (func, repeat, x, y) {
  let result = x;
  for (i = 0; i < repeat; i++) {
    result = func(result, y);
  }
  return result;
}

console.log(
  doNTimes((x, y) => x * y, 3, 5, 2),
  doNTimes((x, y) => x / y, 3, 5, 2),
);

// 인자로 전달된 함수들 : 변수나 상수에 할당되지 않아 이름이 없음 - 익명 함수 anonymous function


//3. 결과값으로 반환
function getIntroFunc (name, formal) {
  return formal
  ? function () {
    console.log(`안녕하십니까, ${name}입니다.`);
  } : function () {
    console.log(`안녕하세요~ ${name}이라고 해요.`);
  }
}


const hongIntro = getIntroFunc('홍길동', true);
const jeonIntro = getIntroFunc('전우치', false);

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

// 함수를 반환한다.
function comb3ArmFuncs(armFunc1, armFunc2, armFunc3) {
  return (x, y) => armFunc3(armFunc2(armFunc1(x, y), y), y);
}

const add_mul_sub = comb3ArmFuncs(add, mul, sub);
const mul_add_div = comb3ArmFuncs(mul, add, div);
const div_add_mul = comb3ArmFuncs(div, add, mul);

