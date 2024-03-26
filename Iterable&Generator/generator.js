function* genFunction () {
  console.log('하나를 반환합니다.');
  yield '하나';

  console.log('둘을 반환합니다.');
  yield '둘';

  console.log('셋을 반환합니다.');
  yield '셋';
}

const genFunc = genFunction();

console.log(getFunc().next())
// 함수를 호출하면 하나 둘 셋 모두 반환할 것 같지만 그렇지 않다. 
// 또 다음을 실행할 건지 확인하는 것
// 다음으로 함수를 실행하면 그 다음 둘이 반환되고 셋이 반환된다.


// 함수 선언
function* genFunc1 () {
  yield 'genFunc1';
}

// 값으로 대입
const genFunc2 = function* () {
  yield 'genFunc2';
}

// 객체의 메서드
const obj = {
  * genFunc3 () {
    yield 'genFunc3';
  }
}

// 클래스의 메서드
class MyClass {
  * genFunc4 () {
    yield 'genFunc4';
  }
}

// 테스트
console.log(
  genFunc1().next().value,
  genFunc2().next().value,
  obj.genFunc3().next().value,
  new MyClass().genFunc4().next().value,
);

function* genFunction () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

let genObj = genFunction();

