let x = 1;

{
  let y = 2;
  console.log(x, y);
}
console.log(x);
console.log(y);

// 전역은 접근 가능, 블록 안쪽은 사용 x

const xx = 0;
let yy = 'Hello!';
console.log(xx, yy);

{
  const xx = 1; // 💡 블록 안에서는 바깥의 const 재선언 가능
  let yy = '안녕하세요~';

  console.log(xx, yy);
  // ⚠️ const, let을 빼먹으면 재선언이 아니라 바깥것의 값을(변수면) 바꿈!
}

console.log(xx, yy);

