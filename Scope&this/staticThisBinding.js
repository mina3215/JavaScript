// 객체의 프로퍼티에서 화살표 this
const obj = {
  // function 선언 함수
  func1: function () { return true; },

  // 메서드
  func2 () { return true; },

  // 화살표 함수
  func3: () => true
}

// func1, func2, func3의 출력이 조금 다르다
// => 3개의 동작이 조금 다르다. 
console.log(
  obj.func1(),
  obj.func2(),
  obj.func3()
);

//생성자 역할 수행 여부 => func1만 동작. 
const func1 = new obj.func1();
const func2 = new obj.func2();
const func3 = new obj.func3();

const obj1 = {
  x: 1,
  y: 2,

  func1: function () {
    console.log('1.', this);
  },
  func2 () {
    console.log('2.', this);
  },
  func3: () => {
    console.log('3.', this);
  }
}

// this가 해당 객체를 가리킴
obj1.func1();
obj1.func2();

// 💡 this가 상위 스코프를 가리킴
obj1.func3();

const outer = {
  a: true,
  b: false,

  func: function () {
    const inner = {
      x: 1,
      y: 2,
      // function 함수와 메서드는 지금 들어있는 객체를 가르킴
      func1: function () {
        console.log('1.', this);
      },
      func2 () {
        console.log('2.', this);
      },
      // 화살표 함수는 상위 스코프. 
      func3: () => {
        console.log('3.', this);
      }
    }

    // this가 inner를 가리킴 
    inner.func1();
    inner.func2();

    // this가 outer를 가리킴
    inner.func3();
  }
}

outer.func();


// 그래도 이런식으로 잘 안짬. 
function Korean () {
  this.favorite = '김치';

  this.makeStew = function (isHot) {
    return `${isHot ? '매운' : '순한'} ${this.favorite}찌개`;
  };
  this.fryRice = (isHot) => {
    return `${isHot ? '매운' : '순한'} ${this.favorite}볶음밥`;
  };
}

function Italian () {
  this.favorite = '피자';
}

const korean = new Korean();
const italian = new Italian();

console.log(korean.makeStew(true));
console.log(korean.fryRice(true));

italian.makeStew = korean.makeStew;
italian.fryRice = korean.fryRice;

console.log(italian.makeStew(false));
// function 함수 : 순한 피자 찌개
console.log(italian.fryRice(false));
// 화살표 함수 : 순한 김치 볶음밥.

// class
// ♻️ 새로고침 후 실행
class Korean12 {
  constructor () {
    this.favorite = '김치';
    this.fryRice = (isHot) => {
      return `${isHot ? '매운' : '순한'} ${this.favorite}볶음밥`;
    }
  }
  makeStew (isHot) {
    return `${isHot ? '매운' : '순한'} ${this.favorite}찌개`;
  }
}

class Italian12 {
  constructor () {
    this.favorite = '피자';
  }
}

const korean12 = new Korean12();
const italian12 = new Italian12();

console.log(korean12.makeStew(true));
console.log(korean12.fryRice(true));


