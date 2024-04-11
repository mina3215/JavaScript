const x = 1;
const y = 1;
const z = 1;

function func1 () {
  const y = 2;
  const z = 2;

  console.log('2', x, y, z);
  func2();
}

function func2 () {
  const z = 3;

  console.log('3', x, y, z);
}

console.log('1', x, y, z)
func1();

// func2을 호출한 블록에서의 y 값은 2
// func2을 정의된 블록에서의 y 값은 1
// 정의된 블록을 기준으로 상위 스코프의 값이 사용됨

// 💡 func2를 func1 안으로 옮기면

function func12 () {
  const y = 2;
  const z = 2;

  function func22 () {
    const z = 3;

    console.log('3', x, y, z);
  }

  console.log('2', x, y, z);
  func22();
}

console.log('1', x, y, z)
func12();


function func13 (a) {
  const y = 2;
  const z = 2;

  function func23 (b) {
    const z = 3;

    console.log('3', x, y, z, b);
  }

  console.log('2', x, y, z, a);
  func23(a + 1);
}

console.log('1', x, y, z)
func13(1);


// 클로저
function func15 () {
  const word = 'Hello';

  function func25 () {
    console.log(word);
  }
  
  return func25;
}

const logHello = func15();

logHello();

// logHello에는 func1 안의 함수인 func2가 반환되어 지정됨
// func1의 실행이 끝났음에도 불구하고, 해당 스코프 내의 값이 살아 있음
// const word = 'Hello'가 살아있다.  
// func2와 func2가 선언된 환경(func1의 스코프)의 조합 - 클로저


function createCounter (start) {
  let num = start;

  return function () {
    console.log(++start);
    return start;
  }
}

const count = createCounter(10);

count(); // ⭐ 반복 실행해 볼 것

// 단지 값을 복사해서 갖는 것이 아니라, 해당 값이 저장되는 외부 환경 자체가 유지됨

// ⭐️ private field 흉내내기
function employeeCreator (name, age) {
  let _name = name;
  let _age = age;

  return {
    name: () => _name,
    age: () => _age,
    setAge: function (age) { _age = age; },
    getOlder: function (years) { _age += years; }
  }
}

const employee = employeeCreator('홍길동', 20);

console.log(employee);
// _name, _age는 확인할 수 없다 -> private처럼 동작
console.log(employee.name(), employee.age());
employee.setAge(25);
console.log(employee.name(), employee.age());
employee.getOlder(3);
console.log(employee.name(), employee.age());