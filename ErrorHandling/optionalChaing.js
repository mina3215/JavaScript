// 옵셔널 체이닝을 사용해야하는 상황
//  - 결과에 prop3이 있다면 가져와야한다. 

// 최소 undefined
// 최대 {prop1:{prop2:{prop3:'성공!'}}}
// 까지 반환하는 함수
const rand = () => Math.random() < 0.75;

const notSure = () => rand() ? {
  prop1: rand() ? {
    prop2: rand() ? {
      prop3: rand() ? '성공!' : undefined
    } : undefined
  } : undefined
} : undefined;

console.log(JSON.stringify(notSure()));

const result = notSure();
console.log(JSON.stringify(result));

// ⚠️ 바로 접근하려 할 시에는 실패시 에러
// console.log(result.prop1.prop2.prop3);
// 


if (result) {
  if (result.prop1) {
    if (result.prop1.prop2) {
      console.log(result.prop1.prop2.prop3);
    }
  }
}

// 방법 2

console.log(
  result
  && result.prop1
  && result.prop1.prop2
  && result.prop1.prop2.prop3
);

// 방법 3
try {
  console.log(result.prop1.prop2.prop3);
} catch {
  console.log(undefined);
}


// 옵셔널 채이닝 
let undef = undefined;

console.log(
  undef?.x,
  undef?.['x'],
  undef?.[1],
  {}.func?.()
);

// 옵셔널 체이닝을 사용한 방법

console.log(
  result?.prop1?.prop2?.prop3
);


// 💡 유무가 불확실한 함수를 호출할 때도 유용
const objs = [
  { func () { console.log(1) } },
  {},
  { func () { console.log(2) } },
  {},
  { func () { console.log(3) } },
]

objs.forEach(o => o.func?.());