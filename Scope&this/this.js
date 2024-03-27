console.log(this);


// 느슨한 모드와 엄격 모드에서 다르게 동작한다. 
// this
function func () {
  console.log(this); // globalThis
}

func();           

'use strict';

function func () {
  console.log(this); // undefined
}

func();
// => 객체에 속하지 않은 함수에서는 this 사용의 의미가 없다.

// a. 객체 리터럴 - 해당 객체를 가리킴
const obj = {
  x: 123,
  getX: function () {
    return this.x;
  }
}

console.log(obj.getX());

// b. 생성자 함수 - 생성될 인스턴스를 가리킴
function Person (name, age) {
  this.name = name;
  this.age = age;
  this.introduce = function  () {
    return `저는 ${this.name}, ${this.age}세입니다.`
  }
}

console.log(
  new Person('홍길동', 20).introduce()
);

// c. 클래스 선언 - 생성될 인스턴스를 가리킴
class YalcoChicken {
  constructor (name, no) {
    this.name = name;
    this.no = no;
  }
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

console.log(
  new YalcoChicken('강남', 17).introduce()
);


// 동적 바인딩 
const korean1 = {
  favorite: '김치',
  makeStew: function (isHot, pots) {
    return `${isHot ? '매운' : '순한'} ${this.favorite}찌개 ${pots}냄비`;
  }
};

const italian = {
  favorite: '피자'
};

console.log(
  korean1.makeStew(true, 1)
);

// 이탈리아인에게 한국인이 찌개 끓이는 법을 알려줌
italian.makeStew = korean1.makeStew;

console.log(
  italian.makeStew(false, 2)
);
// 순한 피자찌개 2냄비. 
// this의 대상이 italian이 된 것. 

// 동적 바인딩 어떻게 해결??
// 1. call
console.log(
  italian.makeStew.call(korean, false, 2)
);

// 2. apply
console.log(
  italian.makeStew.apply(korean, [false, 2])
);

// 3. bind
// ⭐ this가 바인딩된 새 함수를 만듦
italian.makeRightStew = korean.makeStew.bind(korean);

console.log(
  italian.makeRightStew(false, 2)
);
// 💡 추가 인자들까지 바인딩 가능 
italian.makeClassicStew = korean.makeStew.bind(korean, true, 1);

console.log(
  italian.makeClassicStew()
);


// 4. 바인딩 함수를 내보내는 함수
const korean = {
  favorite: '김치',
  makeStew: function (isHot, pots) {
    return `${isHot ? '매운' : '순한'} ${this.favorite}찌개 ${pots}냄비`;
  },
  teachMakingStew: function () {
    return this.makeStew.bind(this);
  }
};

const italian = {
  favorite: '피자'
};

italian.makeStew = korean.teachMakingStew();

console.log(
  italian.makeStew(false, 2)
);

// 5. 생성자 함수일 경우 - 함수 자체를 미리 인스턴스에 바인딩 
function Korean () {
  this.favorite = '김치';
  this.makeStew = function (isHot, pots) {
    return `${isHot ? '매운' : '순한'} ${this.favorite}찌개 ${pots}냄비`;
  };

  // 💡 여기서 바인딩을 고정시켜버림
  this.makeStew = this.makeStew.bind(this);
}

function Italian () {
  this.favorite = '피자';
}

const korean12 = new Korean();
const italian = new Italian();

italian.makeStew = korean12.makeStew;

console.log(
  italian.makeStew(false, 2)
);


// call, apply, bind의 다른 활용 
const korean13 = {
  favorite: '김치',
  makeStew: function (isHot, pots) {
    return `${isHot ? '매운' : '순한'} ${this.favorite}찌개 ${pots}냄비`;
  }
};

console.log(
  // 💡 임의로 특수한 동작을 시킬 때
  korean13.makeStew.call({favorite: '된장'}, true, 2)
);

// 객체들이 가져다 쓰도록 만든 함수
function intro (job) {
  return `${this.name}(${this.age}세) - ${job}`
}

const hong = {
  name: '홍길동',
  age: 20
};

const jeon = {
  name: '전우치',
  age: 25
};

// 동적 바인딩 특성 활용
hong.intro = intro;

console.log(
  hong.intro('개발자')
);

console.log(intro.call(hong, '개발자'));
console.log(intro.apply(jeon, ['사무직']));

const introHong = intro.bind(hong, '개발자');

console.log(
  introHong()
);

// 배열의 thisArg
function recommendForYou (me) {
  const products = [
    { sex: 'F', size: 'M' },
    { sex: 'M', size: 'L' },
    { sex: 'F', size: 'M' },
    { sex: 'U', size: 'S' },
    { sex: 'M', size: 'L' },
    { sex: 'F', size: 'S' },
  ];

  products
  .map((itm, idx) => {
    return { ...itm, idx } 
  })

  // ⚠️ 화살표 함수 대신 function 선언 함수 사용 주목
  // 화살표 함수는 가르키는 this가 다르다?
  .filter(function ({sex, size}) {
    return ['U', this.sex].includes(sex)
    && size === this.size
  }, me) // 💡 thisArg
  // this.sex와 this.size의 this가 me로 주어진 객체를 바라본다.

  .forEach(function ({idx}) {
    console.log(`${this.name}님, ${++idx}번은 어떠세요?`);
  }, me); // 💡 thisArg
}

const peter = {
  name: '피터',
  sex: 'M',
  size: 'L'
};

const jane = {
  name: '제인',
  sex: 'F',
  size: 'S'
};

recommendForYou(peter);
recommendForYou(jane);