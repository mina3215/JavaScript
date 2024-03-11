// 가독성 위주로 (다소 오버스럽게) 짠 코드
// 코드에 의도가 드러나도록 상수에 저장해서 짠다.
let x = 0;
while (x < 14) {
  const toContinue = x % 2 === 0;
  const toBreak = x > 7;
  const xNow = x++;

  if (toContinue) continue;
  if (toBreak) break;

  console.log(xNow);
}