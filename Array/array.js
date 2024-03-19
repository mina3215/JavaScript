const arr1 = []; // 빈 배열
const arr2 = [1, 2, 3];
const arr3 = [1, , 2, , 3] // 빈 요소(undefined) 표함 배열 생성

console.log(arr3.length, arr3); //5 [ 1, <1 empty item>, 2, <1 empty item>, 3 ]


// 유사배열 객체 : length와 인덱싱 프로퍼티를 가진 객체 
const arrLike = {
  0: '🍎',
  1: '🍌',
  2: '🥝',
  3: '🍒',
  4: '🫐',
  length: 5
};

// 일반 for문으로 순회 가능
for (let i = 0; i < arrLike.length; i++) {
  console.log(arrLike[i]);
}

// for ... of 문은 이터러블에서만 사용 가능
// for (const item of arrLike) {
//   console.log(item);
// }

// 배열은 이터러블, 성능도 향상
for (const item of Array.from(arrLike)) {
  console.log(item);
}

// ⚠️ Array.from은 얕은 복사 - 1단계 깊이만 복사
const arr12 = [1, 2, 3];
const arr22 = Array.from(arr12);
arr22.push(4);


console.log(arr12, arr22);

// ⭐️ 두 번째 인자: 매핑 함수
const arr21 = [1, 2, 3, 4, 5];
const arr222 = Array.from(arr21, x => x + 1);
const arr23 = Array.from(arr21, x => x * x);
const arr24 = Array.from(arr21, x => x % 2 ? '홀' : '짝');

console.log(arr222);
console.log(arr23);
console.log(arr24);