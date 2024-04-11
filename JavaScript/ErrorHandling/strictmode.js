// 변수, 함수, 인자 등 삭제불가한 것을 삭제시 오류 발생
// 실제로 지워지지도 않지만 오류를 발생시키지도 않음

let toDelete1 = 1;
delete toDelete1;

console.log('1.', toDelete1);

function funcToDel1 () { console.log(true); }
delete funcToDel1;

console.log('2.', funcToDel1);


