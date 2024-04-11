// switch 내가 잘 안써서 간만에 연습삼아 함 써봄

const fingersOut = 2;
switch (fingersOut){
  case 2:
    console.log('가위');
    break;
  case 0:
    console.log('묵');
    break;
  case 5:
    console.log('보');
    break;
  default:
    console.log('무효');
}

const direction = 'north'
let directionKor;

switch (direction) {
  case 'north':
    directionKor = '북';
    break;
  case 'south':
    directionKor = '남';
    break;
  case 'east':
    directionKor = '동';
    break;
  case 'west':
    directionKor = '서';
    break;
  default:
    directionKor = '무효';
}

console.log(directionKor);

// 💡 참고: 객체를 사용한 방법
// 아 이건 처음 봄.
const direction1 = 'north'

//-----------------------------------------------------------------
// ??를 사용해서 null값이면 '무효' >> 객체['']를 사용해서 없는 거면 '무효' 나오는 거임
const directionKor1 = {
  north: '북',
  south: '남',
  east: '동',
  west: '서'
}[direction1] ?? '무효'

console.log(directionKor1);

//-----------------------------------------------------------------

const month = 1;
let season = '';

switch (month) {
  case 1: case 2: case 3:
    season = '1분기'; break;

  case 4: case 5: case 6:
    season = '2분기'; break;

  case 7: case 8: case 9:
    season = '3분기'; break;

  case 10: case 11: case 12:
    season = '4분기'; break;

  default: 
    season = '잘못된 월입니다.';
}

console.log(season);