# React



## MVC 패턴

- `모델(Model)` `View` `Controller`라는 세 개의 계층으로 구성되고 각자의 역할을 하며 협력해 문제를 해결한다. 

- **모델** **(Model)**
  
  - 데이터를 관리하는 역할. 
  
  - API나 브러우저 로컬 저장소의 데이터를 가져와 어플리케이션에서 사용할 수 있는 모양으로 만든다. 

- **뷰 (View)**
  
  - 사용자가 볼 수 있는 화면을 관리하는 역할. 
  
  - 데이터를 DOM에 출력하거나 사용자가 발생한 이벤트를 처리하는 기능. 
  
  - HTML, CSS가 이에 속한다

- **컨트롤러 (Controller)**
  
  - 모델과 뷰를 연결하고 움직이는 주체. 
  
  - 데이터를 뷰로, 뷰를 통해 일어난 이벤트로 데이터를 조작. 



## 1. VanilaJS

- MVC 패턴을 사용해서 구현



### 추가 공부 
1. VanilaJS
  - `distructuring` 
    - const {value} = 객체 : 디스트럭쳐링으로 value 값만 받은 것
  - `querySelector()` : html의 속성이나 css를 받을 수 있다. 
  - `dispatchEvent` : `customEvent`를 만들고, 이벤트를 실행해 줌. 
    - bubbles=true를 통해 이벤트 버블링도 할 수 있다. [[이벤트 버블링?]](https://jhyonhyon.tistory.com/24)
    - `이벤트 버블링` : 하위 요소에서 발생한 이벤트를 부모 요소로 거슬러 올라가며 전파하는 것. 
  - JS에서 파라미터가 부족하게 넘어오는 경우, undefined로 채워진다. 
