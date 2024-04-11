const strObj1 = new String();
const strObj2 = new String('Hello World!');

console.log(strObj1);
console.log(strObj2);

console.log(strObj1.valueOf(), strObj1.toString());
console.log(strObj2.valueOf(), strObj2.toString());

// new 없이 사용하면 걍 string
const str1 = String('Hello World!');
const str2 = String(123);
const str3 = String(true);
const str4 = String({x: 1, y: 2}); // 💡 [object Object]
const str5 = String([1, 2, 3]); // 💡 1,2,3

console.log(typeof str1, str1);
console.log(typeof str2, str2);
console.log(typeof str3, str3);
console.log(typeof str4, str4); //[object Object]
console.log(typeof str5, str5); //1,2,3

// string 123
// string true
// string [object Object]
// string 1,2,3

//유사 배열 객체
let myStr = '안녕하세요!';

console.log(
  myStr.length,
  myStr[0],
  myStr[myStr.length - 1]
);

myStr[myStr.length - 1] = '?';
console.log(myStr); // 💡 배열과 달리 그대로

for (const letter of myStr) {
  console.log(letter);
}

// toUpperCase
function areSameWords (word1, word2) {
  return word1.toLowerCase() === word2.toLowerCase();
}

console.log(
  areSameWords('Hello', 'hello'),
  areSameWords('가나다', '가나다'),
  areSameWords('ABC', 'DEF')
);

// indexOf, lastIndexOf
const word = '반갑습니다!';
console.log (
  word.indexOf('습'),
  word.lastIndexOf('습')
);

const word1 = '아니, 하나마나한 걸 왜 하나?';
console.log (
  word1.indexOf('하나'),
  word1.lastIndexOf('하나')
);

console.log(
  '가나다라마'.indexOf('하'),
  '가나다라마'.lastIndexOf('하')
);

// split
console.log(
  '010-1234-5678'.split('-'),
  'ABC1DEF2GHI3JKL'.split(/[0-9]/)
)

// 인자로 빈 문자열을 넣거나 인자 생략시
const word2 = '안녕하세요';

console.log(
  word2.split(''),
  word2.split()
)

const word3 = '하나 하면 할머니가 지팡이 짚고서 잘잘잘';

console.log(
  word3.split(' ', 2),
  word3.split(' ', 4)
)

// replace
console.log(
  '이스탄불은 터키의 수도이다.'.replace('터키', '튀르키예')
);
const word4 = '밥 좀 먹자, 밥. 응? 야, 밥 좀 먹자고 밥, 밥!';

console.log(word4.replace('밥', '라면'));

console.log(word4.replace(/밥/g, '라면'));

console.log(word4.replaceAll('밥', '라면'));
console.log(word4.replaceAll(/밥/g, '라면'));



// 메서드 체이닝
const word5 = ' 모두 HELLO! ';
const rpFrom = 'hello';
const rpTo = 'bye';

console.log(
  word5
  .trimStart()                // '모두 HELLO! '
  .toLowerCase()              // '모두 hello! '
  .replaceAll(rpFrom, rpTo)   // '모두 bye! '
  .toUpperCase()              // '모두 BYE! '
  .repeat(3)                  // '모두 BYE! 모두 BYE! 모두 BYE! '
  .trimEnd()                  // '모두 BYE! 모두 BYE! 모두 BYE!'
);