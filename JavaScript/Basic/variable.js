//js에서 var은 없어지고 const와 let만 사용한다. <<원래 알고 있던 사실

let x;
console.log(x); //undefined.. 에러 안나고 참 착해 초기화 안해줘도
//js에서는 undefined도 하나의 값이다. 

x=1;
console.log(x);

// 메모리에서는 변수 영역에 x라는 식별자를 두고, 그 식별자가 가르키고 있는 것을 담아놓는다. 
// js는 undefined 가르키고 있다가 1넣으면 1을 다른 데이터 영역 메모리 주소에 넣어놓고 그걸 다시 가르킨다. 


let a=1, b=2, c=3;
const d=1,e=2,f=3;
