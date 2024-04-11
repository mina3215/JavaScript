console.log(
  Array.isArray([1, 2, 3]), //true
  Array.isArray('123'), // false
  Array.isArray('123'.split('')) //true
);

// include 참조형 데이터의 경우
const obj1 = { x: 1, y: 2 };
const obj2 = { x: 1, y: 2 };

const arr = [
  obj1,
  { x: 3, y: 4 }
];

console.log(
  arr.includes(obj1),
  arr.includes(obj2),
  arr.includes({ x: 1, y: 2 }),
  arr.includes({ x: 3, y: 4 })
);

// join
const arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = [
  1, true, null, undefined, '가나다', { x: 0 }, [1, 2, 3]
];
console.log(
  arr1.join() // 인자가 없다면 쉼표`,`로
);
console.log(
  arr1.join('')
);
console.log(
  arr1.join(' ')
);
console.log(
  arr2.join(':')
);

console.log('010-3482-3215'.split('-').join('.'));

const arr12 = [1, 2, 3, 4, 5, 6, 7];

// 2번 인덱스부터 2개 요소 제거
arr.splice(2, 2);

console.log(arr);

// splice
delete arr12[2]; 

console.log(arr12); //[ 1, 2, <1 empty item>, 4, 5, 6, 7 ]
// 💡 때문에 배열의 값 삭제에는 splice 사용
arr.splice(2, 1);

console.log(arr);

//concat : 배열에 다른 배열에나 값을 이어붙인 결과를 반환
const arr31 = [1, 2, 3];
const arr32 = ['a', 'b', 'c'];
const arr33 = [true, false];
const arr4 = arr31.concat(arr32);
const arr6 = arr31.concat('ABC', arr32, arr33, 100);

console.log(arr4); // [ 1, 2, 3, 'a', 'b', 'c' ]
console.log(arr6); 
// [
//   1,     2,    3,
//   'ABC', 'a',  'b',
//   'c',   true, false,
//   100
// ]

const arr41 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arr42 = arr41.slice(3);
const arr43 = arr41.slice(3, 7);

console.log(arr42, arr43);  //[ 4, 5, 6, 7, 8, 9 ] [ 4, 5, 6, 7 ]


// flat
// [
//   1,
//   [2, 3],
//   [4, 5, 6],
//   7
// ]

// ↓ ↓ ↓

// [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7
// ]

const orgArr = [
  1, 2,
  [3, 4],
  [5, [6, [7, 8]]]
];

// 인자가 없으면 1을 넣은 것과 같음
const arr0 = orgArr.flat();
const arr15 = orgArr.flat(1);

const arr25 = orgArr.flat(2);
const arr35 = orgArr.flat(3);

console.log('N:', arr0);
console.log('1:', arr15);
console.log('2:', arr25);
console.log('3:', arr35);

// 원본에는 변화 없음
console.log('org:', orgArr);