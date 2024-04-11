// Set 생성
const set1 = new Set();

// add 메서드 - 요소 추가
set1.add(1);
set1.add('A');
set1.add(true);

console.log(set1);

// 배열을 인자 넣으면 생성 + 초기화
// 중복된 요소 제거
const set2 = new Set([1, 1, 1, 'A', true]);

console.log(set2);

// has 메서드 - 요소 포함여부 확인
console.log(
  set2.has(1),
  set2.has('A'),
  set2.has(4)
);

// delete 메서드 - 요소 제거 & 성공 여부 반환
console.log(
  set2.delete('A'),
  set2.delete(true),
  set2.delete(100)
);

console.log(set2);

// add 메서드는 결과 셋을 반환
// set3은 set2를 참조
const set3 = set2.add(2);

console.log(set3);

// keys, values, entries 메서드 - 값 / 값 / [값, 값] 반환
// key를 value와 같이 취급
console.log(
  set2.keys(),
  set2.values(),
  set2.entries()
);

// clear 메서드 - 모든 요소들을 삭제
set2.clear();

console.log(set2, set3);

// 💡 참조형 데이터의 경우
const objSet1 = new Set()
.add({ x: 1, y: 2 })
.add({ x: 1, y: 2 })
.add([1, 2, 3])
.add([1, 2, 3]);

// 각기 다른 것으로 인식 (참조하는 주소가 다르므로)
console.log(objSet1);

const obj = { x: 1, y: 2 };
const arr = [1, 2, 3];

const objSet2 = new Set()
.add(obj)
.add(obj)
.add(arr)
.add(arr);

// 같은 것들로 인식
console.log(objSet2)

console.log(
  objSet2
  .add({ x: 1, y: 2 })
  .add({ x: 1, y: 2 })
  .add([1, 2, 3])
  .add([1, 2, 3])
);

const arr1 = ['A', 'B', 'C', 'D', 'E'];
const set = new Set(arr1);

const newArr = [...set];

console.log(newArr);


// 활용 - 중복을 제거한 배열 반환
const arr2 = [...new Set(arr1)];

console.log(arr2);

console.log(set)
// 디스트럭쳐링
const [x, y] = set;
console.log(x);
console.log(y);


// ⚠️ 두 번째 인자가 인덱스가 아님!
// 배열과 달리 순서 개념이 없으므로...
// 형식을 맞추기 위한 인자일 뿐

set.forEach(console.log);

// 아래의 결과와 같음
// set.forEach((item, idx, set) => {
//   console.log(item, idx, set)
// });