# 제어문

## 블록과 스코프
[블록 스코프](./Block&Scope.js)
- 지역, 전역 변수 >> 전역에 선언한건 지역에 재선언 가능
- 다른 지역끼린 변수명 겹쳐도 됨.

### 스코프 체이닝
- 블럭 안에 해당 변수/상수가 없으면 바깥쪽으로 찾아 나간다(체이닝)
- 전역, 지역 변수는 STACK 형식으로 쌓아진다. >
- 전역 변수/상수는 최소화 해야한다. >> 메모리 절약.

## if else
### if ~ else if ~ else는 가독성 망. -> 걍 함수로 if return; if return 하는게 낫다.

## switch (여긴 좀 보기- 신박한 사용 방법 많음)
### [switch](./switch.js) 로 하던가. (default는 break 되지 않으면 무조건 실행)

## for
[for](./forloop.js)
- for문인데 다양한 사용법 있음.
- for(let i=0; i<5; i++) 에서 let을 빼면 var가 대신 들어가버림 ㅠ
- object/ 배열 내부(key) 돌리기 -> const key in object
- 배열 내부 value 돌리기 -> const item of list >> for of는 iterable 자료구조 모드 가능 (ex string, Array)
=> 이런식으로 하면, i가 변수이기 때문에 위험 요소가 존재하지만, for of로 하면 코드도 짧고 변수 위험 요소가 없어짐
- label이란 것도 있는데 실무에선 잘 안쓰인다. -> 중첩 반복문을 명명해서 continue또는 break 명명

# while, do while
[do while](./doWhile.js)
- 모르는 내용은 없는데 살짝 팁? 같은게 있다.