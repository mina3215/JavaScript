# 스코프와 this 바인딩

## 렉시컬과 클로저

**렉시컬(정적) 스코프 lexical(Static) scope**
- 변수나 상수가 코드상 어디에서 지정되었는가에 따라 그 사용 범위를 결정
- 함수가 코드상 어디에서 정의되었는가에 따라 그 상위 스코프를 결정
- 호출한 곳을 기준으로 하는 동적 스코프 dynamic scope 와 상반되는 개념

**렉시컬 환경 lexical environment**
- 전체 문서, 함수, 블록을 실행하기 전 만들어지는 내부 객체
- 각 스코프의 고유 값들과 외부 스코프에 대한 참조를 포함
- 구성요소
  - 환경 레코드 environment record - 해당 스코프의 데이터들
  - 외부 렉시컬 환경에 대한 참조 outer lexical environment reference
![alt text](/img/image.png)


**클로저 closuer**
- 내부 함수에서 외부 함수의 값에 접근할 수 있다는 개념 - 함수 중첩시
![alt text](/img/image-1.png)
![alt text](/img/image-2.png)

**⭐️ private field 흉내내기**
- 코드 파일에.


## this의 동적 바인딩. 
**⭐️ this - "이곳의~"**
- 기본적으로 자신이 속한 곳을 가리킴 - 문맥 context
- 💡 함수의 호출 방식에 따라 가리키는 바가 달라짐 - 자바스크립트 특성

1. 전역에서의 `this`
- 💡 아래의 환경들에서 각각 실행해 볼 것
  - 브라우저의 콘솔창: Window 객체 - globalThis와 같음
  - Node.js의 REPL: global 객체 - globalThis와 같음
  - .js문서로 작성 후 실행 - 빈 객체
    - Node.js에서 각 .js 문서들은 이후 배울 모듈로서 실행되기 때문

2. 함수 안에서의 `this`
- 느슨한 모드와 엄격 모드에서 다르게 동작
- 객체에 속하지 않은 함수에서는 this 사용이 의미 없음

3. 객체 안에서의 `this`
- ⚠️ 일단 화살표 함수 제외
  a. 객체 리터럴 - 해당 객체를 가리킴
  b. 생성자 함수 - 생성될 인스턴스를 가리킴
  c. 클래스 선언 - 생성될 인스턴스를 가리킴


**⭐ 동적 바인딩**
- 자바스크립트의 독특한 동작방식
- `this`가 가리키는 대상이 함수의 호출 주체 또는 그 방식에 따라 달라짐
- 💡 함수가 누가, 어떻게 호출되었는가에 따라 this가 가리키는 대상이 달라짐

- **해결 방법**
  1. `call`를 사용한 함수 호출 
    [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
    - `this`의 대상과 인자들을 나열 
  
  2. `apply`를 사용한 함수 호출
    [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
    - `this`의 대상 뒤의 인자들을 배열로: `call`과 인자 받는 방법만 다름.
  
  3. ⭐`bind`를 사용한 `this` 대상 고정
    [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
    - `this`의 대상이 동적으로 변하지 않는 함수를 반환
    - 뒤에 인자를 더 넣어주면 추가 인자들까지 바인딩
    => 내보낼 때마다 bind 해줘야 한다.

  4. 바인딩된 함수를 내보내는 함수
    - 함수에 return this.makeStew.bind(this);

  5. 생성자 함수의 경우 - 함수 자체를 미리 인스턴스에 바인딩하기. 
    - 1~4번까지는 객체임 

**`call`, `apply`, `bind`의 다른 활용**
- 코드 파일에 
- 💡 임의로 특수한 동작을 시킬 때
- 객체들이 가져다 쓰도록 만든 함수

**⭐ 배열 메서드의 thisArg**
- 콜백으로 주어진 함수 내에서 this가 가리킬 대상
- 보통 콜백함수 다음 인자로 넣음

## this의 정적 바인딩 
- 화살표 함수의 `this`~````
- 로그의 출력이 다 다르다. 
- fuㄴnc1만 생성자 역할을 수행한다. 
 -  function 선언 함수만 생성자로 활용 가능 - 더 많은 기능이 있고 무겁다는 의미
![alt text](/img/image-3.png)
![alt text](/img/image-4.png)


**화살표 함수와 `this`**
- `function` 함수나 메서드의 동적 바인딩과 다르게 동작
- 함수가 어디서 선언되었는 가에 따름 - ⭐️ 가장 근접한 상위 스코프에 바인딩 고정
- 즉 this를 정적으로 바인딩함

1. 객체 리터럴에서
  - ⚠️ 객체 리터럴의 화살표 함수는 가리키는 기본 스코프가 나머지 둘과 다름
  - 💡 this가 상위 스코프를 가리킴

2. 생성자 함수와 클래스에서
  - 기본적으로는 가리키는 대상이 동일 (해당 인스턴스)
  - ⭐ 동적으로 바인딩하는 타 방식과의 차이 확인
  - 찌개는 function 선언 함수와 메서드로
  - 볶음밥은 화살표 함수로

=> 💡 `call, apply, bind`의 `this` 인자 무시됨

**💡 Node.js 파일 실행시 빈 객체가 출력된 이유**
- Node.js는 각 파일을 모듈 (추후 다룰 것, 기본적으로 객체)로 만들어 실행
- 파일 내 모든 코드는 모듈의 메서드 안으로 들어가 실행됨 - 즉 객체 내 함수의 코드가 됨


