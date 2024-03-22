const bigInt1 = 9007199254740991n; // 끝에 n을 붙임
const bigInt2 = BigInt(9007199254740991);
const bigInt3 = BigInt('9007199254740991');
const bigInt4 = BigInt(0x1fffffffffffff) // 9007199254740991

// 일반 자료형과 섞어서 연산 불가. 
// console.log(
//   1n + 1
// );
console.log(
  1n + 1n
);

// 양쪽 모두 BigInt로 변환하여 계산하는 방법 사용
const calcAsBigInt = (x, y, op) => {
  return op(BigInt(x), BigInt(y));
}

console.log(
  calcAsBigInt(1n, 1, (x, y) => x + y)
);