const class1 = {
  a: 1, b: 'A', c: true
};
const class2 = {
  d: { x: 10, y: 100 }, e: [1, 2, 3]
};
const class3 = {
  ...class1, z: 0
}
const class4 = {
  ...class2, ...class3, ...class2.d
}

// 배열은 object이고, 펼쳐보면 length라는 property도 함께 있다.
const array1 = [1,2,3,4,5];

const {length} = array1;
console.log(length);


// 인자가 많은 함수 - ⚠️ 좋지 않음!
function introduce(name, age, job, married) {
  console.log(`제 이름은 ${name}, `
    + `나이는 ${age}세구요. `
    + `직업은 ${job}, `
    + `${married ? '기혼' : '미혼'}입니다.`
  )
}

// 여러 인자, 순서 중요 - 가독성 떨어짐
introduce('김철수', 28, '개발자', false);


// 인자를 하나의 객체로 묶어 받음 
function introduce(person) {
  console.log(`제 이름은 ${person.name}, `
    + `나이는 ${person.age}세구요. `
    + `직업은 ${person.job}, `
    + `${person.married ? '기혼' : '미혼'}입니다.`
  )
}

// 가독성 좋음, 프로퍼티명만 제대로 입력하면 순서 무관
const person1 = {
  job: '개발자',
  age: 28,
  married: false,
  name: '김철수',
  blood: 'O' // 추가 인자 무관
};

introduce(person1);

// 디스트럭쳐링 (적절히 활용)
function introduce({age, married, job, name}) {
  // 순서 무관
  // 이 프로퍼티들을 갖는 객체를 인자로 받겠다는 의도 드러냄

  console.log(`제 이름은 ${name}, `
    + `나이는 ${age}세구요. `
    + `직업은 ${job}, `
    + `${married ? '기혼' : '미혼'}입니다.`
  )
}


introduce(person1);