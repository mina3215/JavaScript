[
  JSON.stringify(1),
  JSON.stringify(Infinity), // ⚠️
  JSON.stringify(NaN), // ⚠️
  JSON.stringify('가나다'),
  JSON.stringify(true),
  JSON.stringify(null),
  JSON.stringify(undefined),
  JSON.stringify([1, 2, 3]),
  JSON.stringify({x: 1, y: 2}),
  JSON.stringify(new Date()), // ⚠️
]
.forEach(i => console.log(i));

// 이후 배울 Symbol - 직렬화되지 않음
console.log( JSON.stringify(Symbol('hello')) ); // ⚠️
// 이후 배울 BigInt - 오류 발생
console.log( JSON.stringify(1n) ); // ⚠️


// 값이 함수인 프로퍼티는 직렬화 XXX
const obj = {
  x: 1,
  y: 2,
  z: function () { return this.x + this.y }
}
console.log(obj.z())

const objStr = JSON.stringify(obj);
console.log(objStr);

const func1 = (a, b) => a + b;
function func2 () { console.log('HELLO'); }

const func1Str = JSON.stringify(func1);
const func2Str = JSON.stringify(func2);

console.log(func1Str);
console.log(func2Str);


const obj = {
  a: 1,
  b: '2',
  c: 3,
  d: true,
  e: false
}

// 2번째 인자 : replace 함수
// 1. key와 value 매개변수
const objStr1 = JSON.stringify(obj, (key, value) => {
  if (key && key < 'a' || key > 'c') {
    // 해당 프로퍼티 생략
    return undefined;
    // ⚠️ 조건에 key && 을 붙이지 않으면 항상 undefined가 반환됨
    // key가 공백('')일 때(value는 객체 자체) undefined를 반환하므로...
    // key와 value를 로그로 출력해보며 확인해 볼 것
  }
  if (typeof value === 'number') {
    return value * 10;
  }
  return value;
});
console.log(objStr1);

// 2. 반환한 key의 배열 매개변수
const objStr2 = JSON.stringify(obj, ['b', 'c', 'd']);
console.log(objStr2); // 'b','c','d' 만 직렬화해서 나옴. 


// 3번째 인자 인덴트
const obj2 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
};

[
  JSON.stringify(obj2, null),
  JSON.stringify(obj2, null, 1),
  JSON.stringify(obj2, null, 2),
  JSON.stringify(obj2, null, '\t')
]
.forEach(i => console.log(i));


// 객체의 toJSON 직렬화 시도시 toJSON 래핑.
const obj5 = {
  x: 1,
  y: 2,
  toJSON: function () {
    return '훗, 나를 직렬화해보겠다는 건가';
  }
}

console.log(
  JSON.stringify(obj5)
);

// 2. parse - 역직렬화

[
  JSON.parse('1'),
  JSON.parse('"가나다"'), // ⚠️ 안쪽에 따옴표 포함해야 함
  JSON.parse('true'),
  JSON.parse('null'),
  JSON.parse('[1, 2, 3]'),
  JSON.parse('{"x": 1, "y": 2}') // ⚠️ key도 따옴표로 감싸야 함
]
.forEach(i => console.log(i));


// parse의 두번째 인자 reciever
const objStr7 = '{"a":1,"b":"ABC","c":true,"d":[1,2,3]}';

const obj7 = JSON.parse(objStr7, (key, value) => {
  if (key === 'c') { 
    // 해당 프로퍼티 생략
    return undefined;
  }
  if (typeof value === 'number') {
    return value * 100;
  }
  return value;
});

console.log(obj7); // ⚠️ 내부까지 적용(배열 확인해 볼 것)

// 깊은 복사 
const obj1 = {
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

const obj12 = JSON.parse(JSON.stringify(obj1));

console.log(obj1);
console.log(obj12);

