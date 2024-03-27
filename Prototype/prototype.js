// 아래 각 객체의 [[Prototype]]의 [[Prototype]]이 Object임 확인
console.log(
  new String('')
);
console.log(
  []
);
console.log(
  new Map()
);

// __proto__ 접근자.

console.log(
  {}.__proto__
);

console.log(
  new Number(2).__proto__
);

console.log(
  [1, 2, 3].__proto__
);

// 💡같은 종류는 프로토타입 공유 확인
console.log(
  {}.__proto__ === { x: 1, y: 2 }.__proto__
); // true

console.log(
  [1, 2, 3].__proto__ === [4, 5].__proto__
);

console.log(
  new String('가나다').__proto__ === new String('ABC').__proto__
);

// 💡최상위, 공통조상은 Object임 확인
console.log(
  {}.__proto__ === [].__proto__,
  {}.__proto__ === new Number(0).__proto__,
  [].__proto__ === new Number(0).__proto__
);

console.log(
  {}.__proto__ === [].__proto__.__proto__,
  {}.__proto__ === new Number(0).__proto__.__proto__,
  [].__proto__.__proto__ === new Number(0).__proto__.__proto__
);

// ⭐ 그 위로는 null
console.log(
  {}.__proto__.__proto__
);

// 즉 function으로 선언된 함수들에서
function Person (name) {
  this.name = name;
}
// 인스턴스들에 공유될 프로토타입에 다음과 같이 접근
console.log(Person.prototype);
const hong = new Person('홍길동');

console.log(hong);

// IV. 인스턴스 vs 프로토타입 프로퍼티
function YalcoChicken (name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

const chain1 = new YalcoChicken('판교', 3);
// 본사에서 새 업무를 추가
YalcoChicken.prototype.introEng = function () {
  return `Welcome to Yalco Chicken at ${this.name}!`;
};

console.log(chain1.introEng());
console.log(new YalcoChicken('강남', 17).introEng());

// ⭐ 인스턴스의 로그를 펼쳐 각 함수가 속한 레벨 확인
console.log(chain1);

// 💡 따라서 메모리 사용을 최소화하려면 아래와 같이 작성
function YalcoChicken (name, no) {
  this.name = name;
  this.no = no;
}

// 공통된 요소들은 프로토타입 프로퍼티로
YalcoChicken.prototype.titleEng = 'YalcoChicken';

YalcoChicken.prototype.introduce = function () {
  return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
}

YalcoChicken.prototype.introEng = function () {
  return `Welcome to ${this.titleEng} at ${this.name}!`;
};

const chain1 = new YalcoChicken('판교', 3);
const chain2 = new YalcoChicken('강남', 17);
const chain3 = new YalcoChicken('제주', 24);

console.log(chain1.introduce());
console.log(chain1.introEng());


// 💡 프로토타입 레벨의 함수를 인스턴스 레벨에서 덮어쓰기 가능

