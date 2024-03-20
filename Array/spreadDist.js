const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2);

const arr12 = ['B', 'C'];
const arr22 = ['D'];
const arr32 = ['E'];

const arr42 = ['A', ...arr12, ...arr22, ...arr32, 'F']

// console.log(arr4);

console.log(
  Math.max(...arr1),
  Math.min(...arr1)
);


function classIntro (classNo, teacher, ...children) {
  return `${classNo}반의 선생님은 ${teacher}, `
    + `학생들은 ${children.join(', ')}입니다.`
}

const classNo = 3;
const teacher = '김민지';
const students = ['영희', '철수', '보라', '돌준', '달숙'];

console.log(
  classIntro(classNo, teacher, ...students)
);

const arr = [1, 2, 3, 4, 5, 6, 7];
const toAdd = ['둘', '셋', '넷'];

arr.splice(1, 3, ...toAdd);

console.log(arr);

// splice 대신
const orgArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 4 ~ 6을 제외한 새 배열 만들기

// 💡 slice는 원본을 변경하지 않음
const arr166 = [
  ...orgArr.slice(0, 3),
  ...orgArr.slice(6, 9)
];
console.log(arr166);

// 참고: 또 다른 방법 << 이게 더 좋음! 
const arr222 = orgArr
.filter((_, i) => !(i >= 3 && i < 6));
console.log(arr222);

// 디스트럭쳐링

// const x = arr[0];
// const y = arr[1];
// const z = arr[2];

// console.log(x, y, z);

const arr555=[1,2,3];
const [x, y, z] = arr555;

console.log(x, y, z);

//일부만도 가능
const [x1, y2] = arr555;

console.log(x1, y2);

// 기본값 설정도 가능
const [a, b, c, d = 4, e = 5] = arr555;
console.log(a, b, c, d, e);

//나머지 변수로도 가능
const [x3, ...y3] = arr555;

console.log(x3, y3);

//활요 예시 디스트럭쳐링

const players = [
  { name: '순이', score: 91 },
  { name: '정환', score: 65 },
  { name: '윤수', score: 72 },
  { name: '철웅', score: 88 },
  { name: '지우', score: 98 },
  { name: '세아', score: 40 }
];

// 배열 중 첫 3개만 가져옴
function logTop3 ([first, second, third]) {
  console.log(
    `1등은 ${first}!! 2등과 3등은 ${second}, ${third}입니다.`
  );
}

logTop3(
  [...players] // 💡 원본의 얕은 복사본을 정렬
  .sort((a, b) => b.score - a.score)
  .map(({name}) => name)
);

// 💡 원본의 순서 변경하지 않음
console.log(players);