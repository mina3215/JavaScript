// Symbol의 기본 생성
const mySymbol = Symbol();

console.log(typeof mySymbol, mySymbol);

// 문자열을 인자로 준다. >> 심벌에 대한 설명일 뿐 각 값은 유일무이하다. 
const symbol1 = Symbol('hello');
const symbol2 = Symbol('hello');

console.log(symbol1, symbol2);

// 래퍼 객체(Symbol)의 인스턴스 프로퍼티
console.log(symbol1.description, symbol2.description);

// 래퍼 객체(Symbol)의 인스턴스 메서드
console.log(symbol1.toString(), symbol2.toString());

// ⭐️ 두 심볼은 같지 않다!
console.log(symbol1 === symbol2);

// ⭐️ 객체에서의 활용
// 객체의 키로 사용시: [, ]로 감쌈

const obj = {
  [Symbol('x')]: 1,
  [Symbol('y')]: 2
}

console.log(obj);
// 유일무이한 값이므로 다음과 같이 출력 불가
console.log(
  obj[Symbol('x')],
  obj[Symbol('y')]
);


// 💡 외부 접근을 제한할 프로퍼티의 키로 활용
const buildingKey = Symbol('secret');

const building = {
  name: '얄코사옥',
  floors: 3,
  [buildingKey]: '1234#'
}

console.log(building);

console.log(
  building.name,
  building.floors,
  building[buildingKey]
);

// 외부로부터의 접근 차단
console.log(
  building[Symbol('secret')]
);

// ⭐️ 아래의 방법들로는 접근되지 않음
for (key in building) {
  console.log(key);
}

console.log(
  Object.keys(building),
  Object.values(building),
  Object.entries(building),
  Object.getOwnPropertyNames(building)
);


// 전역 심볼 레지스트리 
// 전역 심볼 레지스트리에 해당 키로 등록된 키가 없을 시:
// 심볼을 새로 생성
const symbol12 = Symbol.for('hello');

// 전역 심볼 레지스트리에 해당 키가 존재할 시:
// 해당 심볼을 반환
const symbol22 = Symbol.for('hello');

console.log(symbol12 === symbol22); // true

const obj1 = {
  [symbol12]: 'SECRET STRING'
}

console.log(
  obj1[Symbol.for('hello')]
);

// ⚠️ for 메서드로 생성되지 않은 심볼과는 다름
const symbol3 = Symbol('hello'); // 전역 심볼 레지스트리에 저장 ❌

console.log(symbol1 === symbol3);

// keyFor : 정적 심볼 레지스트리에 저장된 심볼의 키 반환
console.log(
  Symbol.keyFor(symbol1),
  Symbol.keyFor(symbol2)
);

// ⚠️ 전역 심볼 레지스트리에 저장되지 않은 심볼에는 작동하지 않음
console.log(
  Symbol.keyFor(symbol3)
);