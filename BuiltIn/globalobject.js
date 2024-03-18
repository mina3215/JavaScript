// 래퍼 객체

const str = 'abcde';
console.log(
  str.length,
  str.toUpperCase(),
  str[0]
);

const num = 123.4567;
console.log(
  typeof num.toString(),
  num.toFixed(2)
);

const str1 = new String('abc');

console.log(str.length); // String이 Wrapping
console.log(typeof str1);
console.log(typeof str, str); // string으로 돌아감.

// 실수로 변환
console.log(
  parseFloat(123.4567),
  parseFloat('123.4567'),
  parseFloat(' 123.4567 ')
);

console.log(
  parseInt('11'),
  parseInt('11', 2),
  parseInt('11', 8),
  parseInt('11', 16),
  parseInt('11', 32),

  parseInt('11', 37),
  parseInt('11', 'A'),
);

// encodeURI
const searchURI = 'https://www.google.com/search?q=얄코';
const encodedURI = encodeURI(searchURI); //https://www.google.com/search?q=%EC%96%84%EC%BD%9

console.log(encodedURI);

//encodeURIComponent
const keyword = '얄코';
const encodedKeyword = encodeURIComponent(keyword);

console.log(encodedKeyword); // %EC%96%84%EC%BD%94

const searchURI1 = `https://www.google.com/search?q=${encodedKeyword}`;
console.log(searchURI1); // https://www.google.com/search?q=%EC%96%84%EC%BD%94


const raw = '?q=얄코';
console.log(encodeURI(raw)); //?q=%EC%96%84%EC%BD%94
console.log(encodeURIComponent(raw)); //%3Fq%3D%EC%96%84%EC%BD%94
