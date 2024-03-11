for(let i=0; i<5; i++){
  // console.log(i);
}

// 두 스택의 스코프가 쌓이는 것
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

//둘 이상 변수 사용
// 이런거 첨보는건 아니지만 잘 안써서 참고. for문 안에 변수 여러개 선언하고,
// y*z<10이면 x는 반전하고, x가 true면 y++ false면 z++..
for (
  let x = true, y = 0, z = 0;
  y * z < 10;
  x = !x, x ? y++ : z++
) {
  // console.log(y, z);
}


let x = 0;
//무한 반복 -> 브라우저 멈출지도
/*
for (;;) {
  console.log(x);
}*/

// console.log('출력 안됨');

// 객체와 배열 ---------------------------------------------------------------
const lunch = {
  name:'라면',
  taste: '매운맛',
  killocalories: 500,
  cold:false
}

//변할 것이 아니므로 const 사용
for(const key in lunch){
  console.log(key,':',lunch[key]);
}

const iist = [1,'가나다',false,null];
for(const item of iist){
  console.log(item);
}

// 이런식으로 하면, i가 변수이기 때문에 위험 요소가 존재하지만, 
// for of로 하면 코드도 짧고 변수 위험 요소가 없어짐
for(let i=0; i<iist.length; i++){
  console.log(iist[i]);
}

const numbers1 = [1,2,3,4,5,6,7,8,9];
const numbers2 = [];

for(let num of numbers1){
  num++; // num은 복사한 값이다. let 사용 주목
  numbers2.push(num+1);
}

// console.log(numbers1,numbers2);

// 신기하니까 알아두기
outer:
for (let i = 1; i < 10; i++) {

  inner:
  for (let j = 1; j < 10; j++) {

    if (j % 2 === 0) continue inner;
    if (i * j >= 30) continue outer;
    
    if (j > 8) break inner;
    if (i - j > 7) break outer;

    console.log(i, j, i * j);
  }
}

//일단 실행 후 조건 따짐
let x1 = 12;

do {
  console.log(x1++);
} while (x1 < 10);