// 1. try catch

onsole.log('에러 발생 전');

try {
  (3).split('');

} catch (e) {
  console.error('🛑 에러!!', e);
}

console.log('에러 발생 후');


const arr = ['ABC', '가나다', 123, '123'];

function getLetterArray (str) {
  // 💡 인자로 어떤 타입의 값이 주어질지 모르는 상황
  try {
    return str.split('');

  } catch (e) {
    console.error('🛑 에러!!', e);
    return [];
  }
}

arr.forEach(i => {
  console.log(getLetterArray(i));
});


function connect () { console.log('☀️', '통신 연결'); }
function disconnect () { console.log('🌙', '통신 연결 해제'); }
function sendArray (arr) { console.log('전송', arr); }

function sendStringAsArray (str) {
  connect();

  try {
    sendArray(str.split(''));
    return true;

  } catch (e) {
    console.error('🛑 에러!!', e);
    return false;

  } finally {
    // 💡 전송 성공 여부와 관계없이 연결은 끊어야 함
    disconnect();
    console.log('- - - - - - - -');
  }

  // ❓ 이곳에 넣는 것과 무엇이 다른가?
  // 아래로 대체하여 실행해 볼 것
  // disconnect();
  // console.log('- - - - - - - -');
}

['ABC', '가나다', 123, '123'].forEach(i => {
  console.log(
    sendStringAsArray(i) 
    ? '[성공]' : '[실패]', '\n\n'
  );
});


// Error 객체
const error1 = new Error('뭔가 잘못됐어');

console.error(error1);

// 두 번째 인자로 이유를 명시할 수도 있음
const error = new Error(
  '뭔가 잘못됐어',
  { cause: '뭘 잘못했으니까' }
);

console.error(error);

console.log(error.name);
console.log(error.message);

// cause를 입력했을 경우
console.log(error.cause);

// 에러 자체를 로그 출력하면 나오는 문구
console.log(error.toString()); // Error : 뭔가 잘못 됐어

// ⭐ 의도적으로 에러 발생시키기
throw new Error('이유를 묻지 마라');

//오류 종류에 따라 할 수도 있따.
errorFuncs.forEach(func => {
  try {
    func();

  } catch (e) {
    if (e instanceof TypeError) {
      console.error('자료형 확인하세요.');
      return;
    }
    if (e instanceof ReferenceError) {
      console.error('선언 안 된 거 쓴 거 없는지 확인하세요.');
      return;
    }
    console.error('아니, 뭘 한 거에요?');
  }
});


// 특정 월의 당번으로 지원하는 함수
function applyForMonth (date) {
  try {
    if (typeof date !== 'number') {
      throw new TypeError('숫자로 입력해주세요.');
    }
    if (date < 1 || date > 12) {
      throw new RangeError('유효한 월을 입력해주세요.');
    }

    console.log(`${date}월 당번으로 등록되셨습니다.`);

  } catch (e) {
    console.error('🛑 에러 발생!', e);
    console.log('다시 등록해주세요.');
  }
}


//커스텀 에러 
class MilitaryError extends Error {
  constructor (position, ...params) {
    super(...params); // error constructor 받아옴

    this.name = 'MilitaryError';

    switch (position) {
      case '이병':
        this.message = '개판이군. 맞선임 데려와봐.';
        break;
      case '일병':
        this.message += ' 엎드려 뻗쳐.';
        break;
      case '상병':
        this.message = '짬을 거꾸로 먹었나. ' + this.message;
        break;
      default:
        this.message = '집에 갈 때 됐다 이거지? ㅎㅎ';
    }
  }
}

class Soldier {
  constructor (position) {
    this.position = position;
  }

  speak (word) {
    console.log(this.position + ':', word);
    try {
      if (!'다나까'.includes(word.at(-1))) {
        throw new MilitaryError(
          this.position,
          '군대에서 모든 말은 다나까로 끝낸다.'
        );
      }

    } catch (e) {
      console.error(e);
    }
  }
}

['이병', '일병', '상병', '병장'].forEach(pos => {
  const soldier = new Soldier(pos);
  soldier.speak('무슨 일입니까');
  soldier.speak('왜요');
});




function func1 () {
  throw new Error('에러');
}

function func2 () {
  func1();
}

function func3 () {
  func2();
}

function func4 () {
  try {
    func3();

  } catch (e) {
    console.error(e);
  }
  console.log('실행완료');
}

func4();

// ⭐ 에러는 가능한 발생 곳 가까이서 처리하는 것이 좋음

// 🧑‍💼 사장 > 부장 > 대리 > 사원 단계로 일을 시켰을 때
function func1 (e) { // 사원
  try {
    if (e) { throw e } // 여기서 e가 있으면 e를 던져서 catch로 가는 것.
    console.log('저 가 봐도 되죠?');
    console.log('- - - - - - - - - -');

  } catch (e) {
    if (e instanceof SyntaxError) {
      console.error('저 이건 알아요!', e);
      console.log('- - - - - - - - - -');
      return;
    }
    console.log('대리님, 이거 뭐에요?');
    throw e; // 💡 처리하지 못하는 에러는 윗선으로 던짐
  }
}


function func2 (e) { // 대리
  try {
    func1(e);
  } catch (e) {
    if (e instanceof TypeError) {
      console.error('내가 할 테니 가봐요.', e);
      console.log('- - - - - - - - - -');
      return;
    }
    console.log('부장님, 이건 제 선에서 안 되겠습니다.');
    throw e;
  }
}

function func3 (e) { // 부장
  try {
    func2(e);
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.error('잘 하자, 응?', e);
      console.log('- - - - - - - - - -');
      return;
    }
    console.log('사장님, 이것 좀 보셔야겠습니다.');
    throw e;
  }
}

function func4 (e) { // 사장
  try {
    func3(e);

  } catch (e) {
    console.error('전원 집합.', e);
  }
}
func4();
func4(new SyntaxError());