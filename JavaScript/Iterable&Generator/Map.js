// Map 생성
const map1 = new Map();

// set 메서드 - 키와 값의 쌍 추가
map1.set('x', 1);
map1.set(123, 'ABC');
map1.set(true, { a: 1, b: 2 });

console.log(map1);

// [[키 쌍]...] 배열로 생성 + 초기화
const map2 = new Map([
  ['x', 1],
  [123, 'ABC'],
  [true, { a: 1, b: 2 }],
]);

console.log(map2);

map1['x']=2; // 변경
console.log(map1['x']);

// 키의 중복 불허 - 해당 키 있을 시 덮어씀
map2.set('x', 3);

console.log(map2);

// has 메서드 - 요소 포함여부 확인
console.log (
  map2.has('x'),
  map2.has('y')
);

// get 메서드 - 값에 접근
console.log(
  map2.get('x'),
  map2.get(123),
  map2.get(true),

  // 없는 키로 접근시
  map2.get('y')
);

// 💡 참조값도 키로 사용 가능
const objKey = { x: 1, y: 2 };
const arrKey = [1, 2, 3];

map2.set(objKey, 'OBJ_KEY');
map2.set(arrKey, 'ARR_KEY');

console.log(map2);

console.log (
  map2.get(objKey),
  map2.get(arrKey),
);

// ⚠️ [참조값]이 키임에 유의
// 💡 5-1강의 객체와 비교해 볼 것
console.log(
  map2.get({ x: 1, y: 2 }),
  map2.get([1, 2, 3])
); // undefined undefined

// 때문에 이렇게 사용하면 안 됨
// map2.set({x: 3, y: 4}, '못꺼냄');

// console.log(map2);
// console.log(
//   map2.get({x: 3, y: 4})
// );


// II. 이터러블로서의 Map
const arr = [
  ['🐶', '강아지'],
  ['🐱', '고양이'],
  ['🐯', '호랑이'],
  ['🐵', '원숭이'],
  ['🐨', '코알라']
];
const map = new Map(arr);

// 1. `for ... of`문
for ([key, value] of map) {
  console.log(key, value);
}

// 2. 스프레드 문법
const newArr = [...map];

console.log(newArr);
//3. 디스트럭쳐링
const [x, y] = map;
console.log(x);
console.log(y);

const [a, b, ...rest] = map;

console.log(a);
console.log(b);
console.log(rest);

// 이터러블과는 별개로 forEach 사용가능
map.forEach(console.log);

// 아래의 결과와 같음
// map.forEach((item, idx, set) => {
//   console.log(item, idx, set)
// });