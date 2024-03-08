# 자료형 - 데이터 종류
[DataType](./datatype.js)
1) 원시 자료형
2) 참조 자료형

## 원시 자료형 primitive data types
- 담백하게 값 하나만 담는 단순 자료형 

- 자스에서는 정수와 실수의 구분이 없다. 
- 정수는 2^53-1까지만 안정적으로 표현 => 더 큰 정수는 bigInt;
  
 **undefined**
- 값이 부여되지 않은 상태라는 의미다. 
- 그러나 undefined도 값이다. 
- 아무것도 반환하지 않는 구문 ex) let x = 1; 같은 경우에도 undefined를 반환한다.  

 **null**
- 의도적인 빈 값이다. 
- 그러나 `null`도 값이다. ! 반환되어야 하지만 없을 때 주로 사용한다. 

- undefiined랑 null 중 뭘 써야 하지?
- null은 보통 object가 들어있거나 반환되어야 하지만 없을 때 주로 사용한다!  

- let x = null/ typeof null 은 object이다. >> js의 잘못 만든 부분
- 따라서 typeof로 object와 구분할 수 없다. 다른 방법으로 구분 필요.

# 자료형과 정적, 동적 타입
[동적, 정적 타입](./dynammic)

- JavaScript는 `동적 타입` 언어이다. 
- 컴파일 언어는 `정적 타입`

- '1'+1 이나 정수가 들어있던 변수에 문자를 넣는게 가능하다. 
-> '11'로 나옴. 

# 문자열 자료형
[문자열](./stringData.js)
- js는 ' ', " " 모두 사용해도 상관 없지만
- 문자열 안에 ' '나 " "를 써야 하는 경우 주의해줘야 한다. 
- \' or \" or \n or \t or \\.... 이런거 써주면 됨 >> escape expression

## 백틱 (`)
- 문자열 안에 탭과 줄바꿈 그대로 사용 가능 
- ex) let word = ``안녕하세요  ~``;

## template literal
- ${} 안에 상수나 변수, 표현식 등을 삽입 가능
- 다른 자료형에도 사용 가능

