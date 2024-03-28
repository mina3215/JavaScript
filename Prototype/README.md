# 프로토타입

## 프로토타입의 개념
- 자바스크립트는 프로토타입 기반의 객체지향 프로그래밍을 지원하는 언어
- 오늘날에는 클래스가 더 널리 사용되지만, 사용하기에 따라 보다 강력하고 효율적
- ⭐ 자바스크립트의 모든 객체는 Prototype을 가짐

**I. Object - 모든 것의 조상**
  - 아래 각 객체의 [[Prototype]]의 [[Prototype]]이 Object임 확인
  - 각 [[Prototype]]의 메서드들 확인
  **💡 프로토타입 체인**
    - 특정 객체에 호출된 프로퍼티가 없다면 프로토타입을 거슬러 올라감
    - 예: Array에는 valueOf가 없지만 그 프로토타입인 Object에는 있으므로 호출 가능
![alt text](./img/image.png)

**II. 코드로 프로토타입에 접근하기**
1. `__proto__` 접근자 사용 - Object.prototype의 프로퍼티
  - ⚠️ Deprecated - `사라질 기능, 사용 권장되지 않음`. 위의 링크 확인
  - 아직 많이 사용되지만 이제 권장하지 않는다!
  [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
  - 같은 종류는 프로토타입 공유를 한다. 
  - 최상위 공통 조상은 `Object`

2. `Object.getPrototypeOf` 
  - 수정할 때는 Object.setPrototypeOf 사용
  - ⭐`__proto__` 대신 이 기능을 사용할 것

3. ⭐ 생성자 함수에서는 prototype으로 프로토타입 접근 가능
  - 즉 `function` 으로 선언된 함수들에서 


**IV. 인스턴스 vs 프로토타입 프로퍼티**

![alt text](./img/image-1.png)
- `introduce` : 만들어지는 인스턴스마다 각각 있음
- `introEng` : 프로토타입에만 있음 - 메모리 절약

=> 프로토타입에만 저장해두는게 전체 메모리 절약에 도움이 된다. 

**💡 따라서 메모리 사용을 최소화하려면 아래와 같이 작성**
![alt text](./img/image-2.png)

💡 프로토타입 레벨의 함수를 인스턴스 레벨에서 덮어쓰기 가능
![alt text](./img/image-3.png)

⭐ 클래스에도 적용 가능
![alt text](./img/image-4.png)

## 프로토타입과 상속 
- 실무에선 프로토타입보단 클래스로 쓰긴 하지만
- 어떻게 동작되는진 알아야지!

**프로토타입으로 상속하기**
⭐ Object.create 메서드
- 주어진 것을 프로토타입으로 갖는 객체를 생성
[MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/create)


**부모 생성자 활용하기**
- 생성자에서 중복되는 부분 위임
- class에서는 constructor에서 super 사용

**💡 인스턴스의 클래스/생성자함수 이름 출력**
- 무엇의 인스턴스인지 프로그램상에서 이름으로 파악할 때 유용
![alt text](./img/image-5.png)

**Mixin** - `object.assign`으로 조립하기.
- 상속 - 한 부모로부터만 물려받음
- 믹스인 - 여럿 조합하여 가져올 수 있음. 
=> C++ 언어를 제외하고의 대부분 언어는 상속 시 부모가 한개임.
=> Mixin을 통해서 여럿 조합해서 가져온다.