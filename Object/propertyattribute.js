const person = {

  // ⭐️ 1. 데이터 프로퍼티들
  fullName: '홍길동',
  ageInNumber: 25,

  // ⭐️ 2. 접근자 프로퍼티들
  get name () {
    return this.fullName
    .split('')
    .map((letter, idx) => idx === 0 ? letter : '*')
    .join('');
  },
  get age () { return this.ageInNumber + '세'; },
  set age (age) {
    this.ageInNumber = Number(age);
  }
}

// 특정 프로퍼티를 지정하여 반환
console.log('1.',
  Object.getOwnPropertyDescriptor(person, 'fullName')
);
console.log('2.',
  Object.getOwnPropertyDescriptor(person, 'ageInNumber')
);
console.log('3.', // set: undefined
  Object.getOwnPropertyDescriptor(person, 'name')
);
console.log('4.', // get, set 모두 있음
  Object.getOwnPropertyDescriptor(person, 'age')
);

// 모든 프로퍼티의 어트리뷰트 객체로 묶어 반환
console.log(
  Object.getOwnPropertyDescriptors(person)
);


// defineProperty, defineProperties : 객체의 프로퍼티를 정의 
const person1 = {};

// 한 프로퍼티씩 각각 설정
Object.defineProperty(person1, 'fullName', {
  value: '홍길동',
  writable: true
  // 💡 누락한 어트리뷰트는 기본값으로 자동생성
});

Object.defineProperty(person1, 'name', {
  get () {
    return this.fullName
    .split('')
    .map((letter, idx) => idx === 0 ? letter : '*')
    .join('');
  }
});

console.log(person1, person1.name);
console.log( // ⚠️ 누락된 어트리뷰트들 확인해볼 것
  Object.getOwnPropertyDescriptors(person1)
);


// 여러 프로퍼티를 객체 형식으로 한꺼번에 설정
Object.defineProperties(person1, {
  ageInNumber: { 
    value: 25,
    writable: true
  },
  age: {
    get () { return this.ageInNumber + '세'; },
    set (age) {
      this.ageInNumber = Number(age);
    }
  }
});

person1.age = 30;

console.log(person1, person1.age);
console.log(
  Object.getOwnPropertyDescriptors(person1)
);

// defineProperty 적용 예 

const person3 = {
  fullName: '홍길동',
  ageInNumber: 25,
};

// 💡 value를 전우치로 바꾸면
// person.fullname = '전우치' 로 바꾸는게 쉽잖아.
Object.defineProperty(person3, 'fullName', {
  value: '전우치'
});

console.log(person3);

console.log(
  Object.keys(person3)
);

// 💡 enumerable을 false로 바꾸면
Object.defineProperty(person, 'fullName', {
  enumerable: false
});

// keys에서 fullname이 나오지 않음. 
console.log(
  Object.keys(person)
);

console.log(
  // ⭐️ Object의 또 다른 정적 메서드
  // ⭐️ enemerable이 false인 프로퍼티도 반환
  Object.getOwnPropertyNames(person)
);



// 깊은 동결 deepfreeze
function getDeepFrozen(obj) {
  console.log(obj);

  const result = {};
  const propNames = Object.getOwnPropertyNames(obj);

  for (const name of propNames) {
    const value = obj[name];

    result[name] = 
      (value && typeof value === 'object') ?
      getDeepFrozen(value) : value;
  }
  return Object.freeze(result);
}

let myObj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4
      }
    }
  }
}

// 여러 번 실행해 볼 것
myObj.a++;
myObj.b.c++;
myObj.b.d.e++;
myObj.b.d.f.g++;

console.log(myObj);
// 💡 실행 뒤 바로 위의 출력 코드를 다시 실행해 볼 것
myObj = getDeepFrozen(myObj);