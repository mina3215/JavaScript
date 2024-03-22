*****

[인프런 얄팍한 코딩 사전](https://www.inflearn.com/course/%EC%A0%9C%EB%8C%80%EB%A1%9C-%ED%8C%8C%EB%8A%94-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8#reviews)  
[JavaScript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

*****


# ABOUT THIS LECTURE

Visual Studio command

- CodeRunner >> Ctrl+Alt+N

- 세미콜론을 붙입니다.
  (JS에서는 ASI를 사용해서 알아서 ;를 붙여주지만...오류가 나는 상황이 있기 때문에.. 붙이는게 편함) 


# JavaScript

JavaScript 기초 ~ 빡구현 PJT 까지 

# JavaScript?

- javascript는 html/css 같은 마크업(배치,장식하는) 언어를 동작할 수 있게 한다.
- 때문에, 원래는 js는 “브라우저” 언어 였다. 
  
   > node.js .. v8엔진을 추출해내서 js를 모바일/로컬 등 어디서나 사용 가능하도록 만들었음.
- Javascript는 인터프리터 언어임. << 컴파일 과정을 거치지 않음. 개발이 빠르나 버그가 좀 걸리고 약간 느림
- JavaScript는 동적 언어를 가진다. >> 오류의 여지를 만듦 >> 타입 스크립트
- JavaScript는 “Prototype” 기반의 객체 지향 언어이기 때문에 C++이나 JAVA와는 다르다.
- ECMA라는 국제 기관에서 JS의 표준을 제작한다! (JavaScript = ECMAScript!)

# 목차

**[Basic](./Basic)**

- console.log
- 변수와 상수 (let, const)

**[Datatype](./DataType&Operator)**

- 자료형> 원시 자료형, 참조 자료형 
- 자료형의 정적, 동적 타입 
- string, string 연산자
- number, number 연산자
- 부동소수점
- boolean, boolean 연산자
- 객체와 배열
- 원시 타입 vs 참조 타입

**[Controll](./Controll/)**
- 블럭과 스코프
- if else 
- for >> for of for in
- while
- switch

**⭐️[Function](./Function/)**
- 기본 함수 사용 > 기본 함수형, 변수형, 화살표 함수
- 일급 객체 = 함수
- 컬링
- 함수의 파라미터
  - arguments
  - rest parameter (...함수그룹명)
- 나머지 함수
  - IIFE
  - 불변성

**⭐️[Object & Class](./Object&Class/)**
- 객체 기초
  - 객체 리터럴 : ({}) 중괄호로 키 value 값 갖고 있는거.
- 생성자 함수
- 클래스
  - 클래스의 생성자 메서드
  - 클래스의 메서드
  - 필드
  - static 필드
- 접근자 프로퍼티와 은닉
  - getter & setter
  - private `#`
- 상속
  - extends
  - overriding
  - super
- 스프레드, 디스트럭터링
  - spread `...`
  - destructuring `{}`

**⭐️[built in object](./BuiltIn)**
- 빌트인 전역 객체
- 빌트인 전역 프로퍼티 및 함수
- String
  - 생성자 함수
  - 주요 인스턴스 메서드
    - at, split, replace
  - 메서드 체이닝 
- Number
  - 생성자 함수
  - 정적 프로퍼티 : 정적? 생성자를 통하지 않아도 전역으로 사용 가능
  - 정적 메서드
  - 인스턴스 메서드
- Math
- Date

**⭐️[Array](./Array) : 자바스크립트의 배열은 조금 다르다.**
- 배열의 기본 특징 
  - JS의 배열과 다른 배열의 차이점 
  - `of`, `from`
- 배열의 메서드
  - 정적(return) : `isArray`, `at`, `includ`, `indexOf,lastIndexOf`, `join`
  - 배열 변경 : `push, unshift`, `pop, shift`, `splice`, `fill`, `reverse`
  - 새 배열 return : `concat`, `slice`, `flat` << 얘넨 얕은 복사
- 고차함수 메서드 : 인자로 다른 함수를 받는 함수.
  - `forEach`, `map`, `find, findLast...`, `some, every`, `filter`, `reduce, reduceRight` `flatMap`
- 배열의 스프레드와 디스트럭쳐링

⭐️[ES14 - 2023](https://www.yalco.kr/lectures/javascript-2023/) : 필수로 확인하기


**⭐️[Deep Object](./Object)**
- Object
  - 주요 정적 메서드 : 
    - `assign` `keys` `values` `entries`
    - `preventExtensions` `seal` `freeze`
- 프로퍼티 어트리뷰트
  - 정적 메서드 
    - `getOwnPropertyDescriber` `getOwnPropertyDescriptors`
    - `defineProperty` `defineProperties`
  - 깊은 동결 
- JSON
  - JSON.stringfy(obj, replacer, indent)
  - JSON.parse(obj, reciever)
  - 깊은 복사 : `JSON` `structuredClone`

**[이터러블과 제너레이터](./Iterable&Generator)**
- 추가 자료형들 
  - `진수`, `BigInt`, `Symbol`
  

# CSS

# JS 구현 문제

[Programmers Front End 과제](https://school.programmers.co.kr/skill_check_assignments)

1. [고양이 검색](https://school.programmers.co.kr/skill_check_assignments/4)
