//알아도 다시 한번..

let a = true, b = 1;
console.log(a, typeof(a));
console.log(b, typeof(b));

let d = null;
console.log(d, typeof d);

const e = 1>2;
console.log(e, typeof e);

// 자스에서는 정수와 실수의 구분이 없다. 
// 정수는 2^53-1까지만 안정적으로 표현 => 더 큰 정수는 bigInt;

//undefined
// 값이 부여되지 않은 상태라는 의미다. 
// 그러나 undefined도 값이다. 
// 아무것도 반환하지 않는 구문 ex) let x = 1; 같은 경우에도 undefined를 반환한다.
