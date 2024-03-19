const isEqual = (a, b) => {
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(
  isEqual(0.1 + 0.2, 0.3)
);

// 0~9 사이 무작위 값 만들기. 
for (let i = 0; i < 10; i++) {
  console.log(
    Math.floor(Math.random() * 10)
  );
}

// ⭐️ 현재시각으로 맞추기 
const now = new Date();
const timezoneOffset = now.getTimezoneOffset() * 60000;

const isoStr = new Date(now.getTime() - timezoneOffset).toISOString();

console.log(isoStr);
console.log(now.toString());