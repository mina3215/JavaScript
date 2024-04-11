# 함수

## 함수란?
[함수 기본](./whatIsFunction.js)
- 반복될 수 있는 작업을 정의해두는 것. 
- input을 받아 output을 return하는 것. >> js에서는 return 없으면 undefined 반환함. 
- 💡 hoisting : 함수 선언문이 실행문보다 아래에 있어도 된다. 
   > 자바스크립트가 실행될 때 먼저 function을 변수로 등록한 후 실행하기 때문 

## js에서 함수를 정의하는 방법들 
- function 함수명( , ){}
- const 함수명 = function ( , ){}
-> 함수 또한 변수이기 때문에 다른 함수를 재정의 해주는 것도 가능하다.
- 화살표 함수 const 함수명 = (x,y)=> x+y;
- const 함수명 = (x,y)=>{}
- const 함수명 = x => x+1; 
- ⚠️ 화살표 함수는 function 선언 함수와 기능 차이가 있음 >> 나중에 this 배울 떄 나옴

⚠️ 함수 기본형 외 변수 선언, 화살표 함수 등은... 호이스팅되지 않음

## 일급 객체
[일급 객체](./firstClassObject.js)
[일급 객체 MDN](https://developer.mozilla.org/ko/docs/Glossary/First-class_Function)
- 함수를 변수와 같이 다루는 언어에 있는 개념
- 자바스크립트의 함수도 일급 객체 ( 함수는 기본적으로 객체 )

- 상수 또는 변수에 할당될 수 있다.
- 다른 함수에 인자로 전달될 수 있다.
- 다른 함수의 결과값으로 반환될 수 있다.

- 💡 객체와 배열의 값으로도 할당 가능하다.

- 예전엔 객체의 함수 프로퍼티를 메서드 method라고 불렀음
  - ⚠️ ES6부터는 메서드의 정의가 달라짐 - 이후 배울 단축 표현 메서드만 가리킴

- ⭐️ 객체에 함수 프로퍼티를 포함할 때 기억할 것
  => 💡 객체의 다른 프로퍼티에 접근: this 사용
  => ⚠️ 객체 리터럴의 프로퍼티로는 this 사용하는 화살표 함수 권장하지 않음

## 인자로 전달
- 함수가 다른 함수를 인자로 전달받음
- 전달받는 함수 : **고차 함수** (higher-order function)
- 전달되는 함수 : **콜백 함수** (callback function)

- console.log 또한 함수다.
- 인자로 전달된 함수들 : 변수나 상수에 할당되지 않아 이름이 없을 경우 - 익명 함수 anonymous function

## 결과값으로 반환.
- const hongIntro = getIntroFunction('ㅎ',true);
  => hongIntro()

## 💡 커링 currying => 어렵지만.. 알면 프로그래밍 레벨 업임!
[커링](./currying.js)
- 필요한 인자보다 적은 수의 인자를 받으면, 나머지 인자를 인자로 받는 다른 함수를 반환


**⭐️하나의 함수는 한 가지 일만 하도록**
- 하나의 함수가 여러 일을 수행하면 이후 코드를 수정하기 복잡해짐 
- 각자 하나의 일을 하는 여러 함수들의 조합을 사용할 것

## ⭐️ 매개변수
[매개변수](./parameter.js)
- 함수의 매개변수 갯수를 넘어가는 인수 -> js는 추가 인자들은 걍 무시함.

### 기본값 매개 변수 (default parameter )
- function add(a=2, b=4)  => 매개 변수가 덜 들어와도 괜찮게~

### 💡arguments - 함수 내에서 사용가능한 지역 변수
- 배열의 형태를 한 객체 - 배열은 아니지만 사실상 배열처럼 동작 ( 배열도 사실 객체....지만...)
- function add(a,b){ console.log(arguments); console.log(arguments[0])}
- arguments는 iterable => for of 가능
- ⚠️ 화살표 함수에서는 arguments 사용 불가!

### 💡...변수그룹명 - 나머지 변수 (rest parameters)
[MDN문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- 특정 매개변수들 뒤에 정해지지 않은 수의 매개변수들을 받을 때
- 마지막 인자로만 사용 가능
- arguments와는 달리 진짜 **배열**이다


## 함수 더 알아보기
- 함수의 중첩 ( 스코프와 스택 )
- 재귀 함수 
  - 다른 언어에서는 tail recursion(꼬리 재귀)로 작성된 재귀는 stack overflow가 일어나지 않도록 하는데 js에는 없다고 함.
### 즉시 실행 함수 IIFE
- Immideately Invoked Function Expression
- 오늘날엔 잘 쓰지 않는다 -> 과거 코드 분석을 위해
- ex) (function(){console.log('IIFE')})();
- "딱 한 번"만 사용될 함수에
- 전역 변수들을 사용하지 않고, 복잡한 기능을 일회성으로 실행할 때
- 다른 코드들과의 변수명이나 상수명 충돌을 막기 위함 (특히 많은 코드들이 사용될 때)
- 오늘날에는 블록과 이후 배울 모듈의 사용으로 대체
  - 이전에 let이 없을 시절 var는 블록 외에서 사용될 수 있었음(‼️)

### ⭐️ 불변성 ( 주의해야 할 점 )
[데이터타입-원시참조](../DataType&Operator/privmitiveAndReference.js)
- 원시 타입 : 인자로 들어간 함수 내에서의 변경에 영향 받지 않음
  - 실제 값이 아니라 복사된 값이 들어갔기 때문
- 참조 타입 : 인자로 들어간 함수 내에서 요소가 변하면 실제로도 변함
  - 복사된 값도 같은 객체나 배열을 가리키기 때문

**⭐️ 함수에 주어진 인자를 변경하는 것은 좋지 않음**
- ⚠️ 외부의 환경을 변경하는 함수는 위험!
- 이상적인 함수: 받은 값들만 처리하여 새 값을 반환

