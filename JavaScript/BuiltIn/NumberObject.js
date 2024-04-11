const numObj1 = new Number();
const numObj2 = new Number(123);
const numObj3 = new Number(-123.45);

console.log(numObj1, numObj2, numObj3);

console.log(
  numObj1.valueOf(),
  numObj2.valueOf(),
  numObj3.valueOf()
);

// 특정 숫자값으로 인식되는 것
console.log(
  new Number('-123.4567'),
  new Number('Infinity'),
  new Number(true),
  new Number(false)
);

// NaN
console.log(
  new Number('1/2'),
  new Number('123ABC'),
  new Number('ABC'),
  new Number('{a: 1, b: 2}'),
  new Number([1, 2, 3])
);

// 정적 프로퍼티
console.log(Number.EPSILON);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);

console.log(
  Number.isInteger(123),
  Number.isInteger(123.45)
);

console.log(
  // 암묵적 변환 하지 않음
  Number.isInteger('123'),
  Number.isInteger(true),
  Number.isInteger(Infinity)
);

console.log(
  Number.isSafeInteger(123),
  Number.isSafeInteger(123.45)
);

console.log(
  Number.isSafeInteger(Number.MAX_SAFE_INTEGER),
  Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)
);


// 인스턴스 메서드
// toExponential
const numInExp = (123.456789).toExponential();
console.log(
  typeof(numInExp), numInExp
);
// 인자로 자릿수 제한
console.log(
  (123.456789).toExponential(2), // 소수점과 property 접근이 구분되지 않아서 괄호로
  (123.456789).toExponential(4),
  (123.456789).toExponential(6)
);

console.log(
  // 인자가 없으면 0을 받은 것과 같음
  (111.234567).toFixed(),
  (111.234567).toFixed(0)
);
console.log(
  (111.234567).toFixed(1),
  (111.234567).toFixed(2)
);
console.log(
  // 반올림
  (111.234567).toFixed(3),
  (111.234567).toFixed(4)
);

//toString
console.log(
  (11).toString(), // 11
  (11).toString(2), // 2진수로 1101
  (11).toString(8), // 8진수 13
  (11).toString(16) // 16진수 b
);