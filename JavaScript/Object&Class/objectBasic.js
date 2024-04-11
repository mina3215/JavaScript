const obj = {
  1: '하나', // 숫자도 객체의 키로는 사용 가능
  'ab-cd': 'ABCD', // 문자 포함 시 키도 따옴표로 감싸야 함
  's p a c e': 'Space'
}

// 대괄호 프로퍼티 접근 연산자로만 가능
console.log(
  obj[1],
  obj['ab-cd'],
  obj['s p a c e']
);

// ⚠️ 오류 발생
// console.log(
//   obj.1,
//   obj.ab-cd,
//   obj.s p a c e
// );

let idx = 0;
const  obj2 = {
  ['key-' + ++idx]: `value-${idx}`,
  ['key-' + ++idx]: `value-${idx}`,
  ['key-' + ++idx]: `value-${idx}`,
  [idx ** idx]: 'POWER'
}

console.log(obj2);

// 객체를 키값으로?
const objKey = { x: 1, y: 2 };
const arrKey = [1, 2, 3];

const obj10 = {
  [objKey]: '객체를 키값으로',
  [arrKey]: '배열을 키값으로'
}

console.log(
  obj10[objKey],
  obj10[arrKey]
);

// ⚠️ ??????? -> local에선 안되는데 개발자 도구에서는 아래처럼 다른 배열도 
// "객체를 키값으로" 출력됨
console.log(
  obj1[{ a: 1, b: 2, c: 3 }], // 내용이 다른 객체
  obj1['1,2,3'] // 문자열
);

// delete 연산
const person1 = {
  name: '홍길동',
  age: 24,
  school: '한국대',
  major: '컴퓨터공학'
};

console.log(person1);
delete person1.age;
console.log(person1);

// key의 동적 사용
const product1 = {
  name: '노트북',
  color: 'gray',
  price: 800000
}

function addModifyProperty (obj, key, value) {
  // obj.key = value; // ⚠️ 의도와 다른 작업 수행
  obj[key] = value;
}
function deleteProperty (obj, key) {
  // delete obj.key // ⚠️ 의도와 다른 작업 수행
  delete obj[key];
}

addModifyProperty (product1, 'inch', 16);
console.log(product1);

const x = 1, y = 2;

const obj1 = { 
  x: x,
  y: y
}
const obj3 = {x,y};
//{x:1,y:2}로 들어감.

//obj1과 obj3이 동일하다. 

console.log(obj1);
console.log(obj3);

function createProduct (name, price, quantity) {
  return { name, price, quantity };
}

const product11 = createProduct('선풍기', 50000, 50);
const product12 = createProduct('청소기', 125000, 32);

console.log(product11, product12);

// method 메서드 : 객체에 함수 정의
// 일반 함수 프로퍼티 정의
const person11 = {
  name: '홍길동',

  salutate: function (formal) {
    return formal
    ? `안녕하십니까, ${this.name}입니다.`
    : `안녕하세요, ${this.name}이에요.`;
  }
}
console.log(person11.salutate(true));

// ⭐️ 메서드 정의 ES6부터.
const person12 = {
  name: '홍길동',
  
  salutate (formal) {
    return formal
    ? `안녕하십니까, ${this.name}입니다.`
    : `안녕하세요, ${this.name}이에요.`;
  }
}
console.log(person12.salutate(true));

// ⭐ ES6부터는 위의 표현으로 정의된 함수만 메서드라고 부름
// 일반 함수 프로퍼티와 특성이 다름 - 이후 자세히 배울 것