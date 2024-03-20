// forEach

const arr = [10, 20, 30, 40, 50, 60, 70];

const result = arr.forEach(itm => {
  console.log(itm);
});

// 💡 결과로는 undefined 반환 - 실행 자체를 위한 메서드
console.log('반환값:', result);


// 콜백함수의 인자가 둘일 때
arr.forEach((itm, idx) => {
  console.log(itm, idx);
});

// 콜백함수의 인자가 셋일 때
arr.forEach((itm, idx, arr) => {
  // 💡 세 번째 인자는 원본 배열의 실제 참조임
  arr[idx]++;
  console.log(itm);
});

console.log(arr);

// map
const orgArr = [1, 2, 3, 4, 5];

// ⭐️ 각 콜백함수는 어떤 값을 반환해야 함
const arr1 = orgArr.map(i => i + 1);
const arr2 = orgArr.map(i => i * i);
const arr3 = orgArr.map(i => i % 2 ? '홀수' : '짝수');

const orgArr1 = [
  { name: '사과', cat: '과일', price: 3000 },
  { name: '오이', cat: '채소', price: 1500 },
  { name: '당근', cat: '채소', price: 2000 },
  { name: '살구', cat: '과일', price: 2500 },
  { name: '피망', cat: '채소', price: 2500 },
  { name: '딸기', cat: '과일', price: 5000 }
];


const arr12 = orgArr1.map(itm => {
  // 💡 블록 안에서는 return 문 필요함
  return {
    name: itm.name,
    cat: itm.cat
  }
});

console.log(arr12);

// 디스트럭쳐링 사용 (편의에 따라 적절히)
const arr22 = orgArr.map(({name, cat}) => {
  return { name, cat }
});


// 디스트럭처링을 인자로. 
const joined = orgArr1
.map(({name, cat, price}, idx) => {
  return `${idx + 1}: [${cat[0]}] ${name}: ${price}원`
})
.join('\n - - - - - - - - - \n');

console.log(joined);


// find, findLast, findIndex, findLastIndex
const arr5 = [1, 2, '삼', 4, 5, 6, '칠', 8, 9];

const isString = i => typeof i === 'string';
const isBoolean = i => typeof i === 'boolean';

console.log(
  arr5.find(isString), // '삼'
  arr5.findLast(isString), // '칠'
  arr5.findIndex(isString), // 2
  arr5.findLastIndex(isString) // 6
);

// 없을 시 값은 undefined, 인덱스는 -1 반환
console.log(
  arr.find(isBoolean),
  arr.findLast(isBoolean),
  arr.findIndex(isBoolean),
  arr.findLastIndex(isBoolean)
);

// some, every

console.log(
  arr.some(i => i % 2),
  arr.every(i => i % 2),
  arr.some(i => i < 0),
  arr.every(i => i < 10)
);

const isCheapVege = i => {
  return i.cat === '채소' && i.price < 2000;
}

// 여기 참고하기 조히음 
const isPlant = ({cat}) => {
  return ['과일', '채소'].includes(cat);
}

console.log(
  orgArr1.some(isCheapVege),
  orgArr1.every(isCheapVege),
  orgArr1.some(isPlant),
  orgArr1.every(isPlant)
);

console.log(
  '과일 목록:',
  orgArr1
  .filter(({cat}) => cat === '과일')
  .map(({name}) => name)
  .join(', ')
);
//과일만 뽑아서 이름을 join.


// reudce : 접음
// 💡 초기화 값이 없을 때는 첫 번째와 두 번째 값부터


// const arr = [10, 20, 30, 40, 50, 60, 70];

console.log(
  arr.reduce((prev, curr, idx) => {
    console.log(`p: ${prev}, c: ${curr}, i: ${idx}`); // 여긴 걍 과정 보려고 그런거고. 
    return prev + curr;
  })
);
//막판에 return 되는게 진짜.

//초기화 값이 있을 때
console.log(
  arr.reduce((prev, curr, idx) => {
    console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
    return prev + curr;
  }, 10)
);

// 곱해나가기
console.log(
  arr.reduce((prev, curr, idx) => {
    console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
    return prev * curr;
  })
);


// 더하기와 빼기 반복
console.log(
  arr.reduce((prev, curr, idx) => {
    console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
    return idx % 2 ? prev + curr : prev - curr;
  })
);

// 홀수와 짝수 갯수
console.log(
  arr.reduce((prev, curr) => {
    return {
      odd: prev.odd + curr % 2,
      even: prev.even + (1 - (curr % 2)),
    }
  }, { odd: 0, even: 0 })
);

// 복합적으로 써봐! 
// 메서드 체이닝
['과일', '채소'].forEach(category => {
  console.log(
    `${category}의 가격의 합:`,
    orgArr1
    .filter(({cat}) => cat === category)
    .map(({price}) => price)
    .reduce((prev, curr) => prev + curr)
  );
});
// 과일의 가격의 합: 10500
// 채소의 가격의 합: 6000

// sort : 오름차순 정렬 
let randomWord = 'DBKGICAHFEJ';

console.log(
  randomWord
  .split('')
  .sort()
  // .reverse()
  .join('')
);

console.log(randomWord);


// ⚠️ 숫자일 시 문제가 생김
const arr11 = [1, 2, 30, 400, 10, 100, 1000];
console.log(arr11.sort());
[1, 10, 100, 1000,  2,  30, 400 ]

const arr31 = [1, 2, 30, 400, 10, 100, 1000];


// 변함없음
console.log(
  arr31.sort((a, b) => {
    console.log(`a: ${a}, b: ${b}`);
    return 1;
  })
);


// 순서 거꾸로
console.log(
  arr31.sort((a, b) => {
    console.log(`a: ${a}, b: ${b}`);
    return -1;
  })
);

const arr66 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 셔플 - ⚠️ 위의 코드들과 로그 갯수 비교
console.log(
  arr66.sort((a, b) => {
    console.log(`a: ${a}, b: ${b}`);
    return Math.random() - 0.5;
  })
);


// 아래의 실습결과는 환경이 달라도 같음
const arr234 = [1, 2, 30, 400, 10, 100, 1000];

console.log(
  arr234.sort((a, b) => a - b)
);
console.log(
  arr234.sort((a, b) => b - a)
);

console.log(
  orgArr1
  .sort((a, b) => {
    if (a.cat !== b.cat) {
      return a.cat > b.cat ? 1 : -1;
    }
    return a.price > b.price ? 1 : -1;
  })
  .map(({name, cat, price}, idx) => {
    return `${idx + 1}: [${cat[0]}] ${name}: ${price}원`
  })
  .join('\n - - - - - - - - - \n')
);

// faltMap 이런식으로 사용 가능
console.log(
  arr.flatMap(i => [i * 10, i * 100, i * 1000])
);

// flatMap은 한 단계만 ... 
// 💡 한 단계만 펼침
console.log(
  arr.flatMap(i => [i, [i], [[i]]])
)

const word = '하나 둘 셋 넷 다섯 여섯 일곱 여덟 아홉 열';

console.log(
  word
  .split(' ')
  .flatMap(i => i.split(''))
);
// [
//   '하', '나', '둘', '셋',
//   '넷', '다', '섯', '여',
//   '섯', '일', '곱', '여',
//   '덟', '아', '홉', '열'
// ]

console.log(
  word.replaceAll(' ','').split('')
);
//[
//   '하', '나', '둘', '셋',
//   '넷', '다', '섯', '여',
//   '섯', '일', '곱', '여',
//   '덟', '아', '홉', '열'
// ]