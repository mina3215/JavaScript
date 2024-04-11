
// 정적메서드 parse,UTC

console.log(
  Date.parse('August 20, 2022 00:00:00 UTC')
);
console.log(
  // 💡 시스템(실행 컴퓨터) 시간이 한국이면 시차 9시간 적용
  Date.parse('August 20, 2022 09:00:00')
);
console.log(
  // ⭐️ 월은 0부터 시작
  Date.UTC(2022, 7, 20, 0, 0, 0)
);

const now = new Date();

console.log(
  now.toString()
);
console.log(
  now.toDateString()
);
console.log(
  now.toTimeString()
);

//toLocaleString

console.log(
  now.toString()
);

// getter setter메서드들
for (i of [
  [ '연:', now.getFullYear() ],
  [ '월:', now.getMonth() ], // 0 ~ 11
  [ '일:', now.getDate() ],
  [ '요일:', now.getDay() ], // 0부터 일월화수목금토 
  [ '시:', now.getHours() ],
  [ '분:', now.getMinutes() ],
  [ '초:', now.getSeconds() ],
  [ '밀리초:', now.getMilliseconds() ]
]) {
  console.log(i[0], i[1]);
}

now.setFullYear(2022);
now.setMonth(7);
now.setDate(20);
// 💡 요일은 setter가 없음
now.setHours(14);
now.setMinutes(35);
now.setSeconds(47);
now.setMilliseconds(789);

console.log(now.toString());


// getTime, setTime
const date1 = new Date(2020, 7, 20);
const date1value = date1.getTime();
// Thu Aug 20 2020 00:00:00 GMT+0900 (대한민국 표준시)
// 1597849200000

const date2 = new Date();
// Tue Mar 19 2024 16:09:21 GMT+0900 (대한민국 표준시)

// setTime으로 바꿔줌
date2.setTime(date1value);

console.log(date2.toString());
// Thu Aug 20 2020 00:00:00 GMT+0900 (대한민국 표준시)