let str1 = 'helllo';
let str2 = 'world';

let str3 = str1+str2;

str3 +=str1;

const str4='hellllllll';
// str4+=str1;  // const는 변환 x -> 오류

let result = '안녕'+1+true;
console.log(result);
console.log(typeof result);

result+=null;
console.log(result);
console.log(typeof result);