// 생성자 함수 
function YalcoChicken (name, no) {
  this.name = name;
  this.no = no;
  // 이건 메서드 아님. ES6부턴 알지?(objectBasic에 적어놨음)
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

// 인스턴스 생성
const chain1 = new YalcoChicken('판교', 3);
const chain2 = new YalcoChicken('강남', 17);
const chain3 = new YalcoChicken('제주', 24);

console.log(chain1, chain1.introduce());
console.log(chain2, chain2.introduce());
console.log(chain3, chain3.introduce());
// 생성자 함수명은 일반적으로 대문자로 시작 - 파스칼 케이스
// 생성자 함수로 만들어진 객체를 인스턴스 instance 라 부름
// this.~로 생성될 인스턴스의 프로퍼티들 정의
// 생성자 함수는 new 연산자와 함께 사용
// 암묵적으로 this 반환
// 생성자 함수에서는 메서드 정의 불가 - 객체 리터럴과 클래스에서는 가능

// 생성자 함수로 만들어진 객체
// prototype-자바스크립트 객체지향 중심 
function YalcoChicken2 (name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

const chain21 = new YalcoChicken2('판교', 3);
console.log(chain21);

// 본사에서 새 업무를 추가
// 프로토타입: 본사에서 배포하는 메뉴얼이라고 이해
YalcoChicken2.prototype.introEng = function () {
  return `Welcome to Yalco Chicken at ${this.name}!`;
};

console.log(chain21.introEng());


//생성자 함수 vs 객체 반환 함수
function YalcoChicken3 (name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

function createYalcoChicken (name, no) {
  return {
    name, no,
    introduce () {
      return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
    }
  }
}

// 객체 리터럴
// 참고 )  객체 리터럴이란 중괄호({})로 감싸진 하나 이상의 속성 이름과 속성 값의 리스트라고 말할 수 있습니다.
const chain31 = {
  name: '판교', no: 3,
  introduce: function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
};

// 객체 반환 함수
const chain32 = createYalcoChicken('강남', 17);

// 생성자 함수
const chain33 = new YalcoChicken3('제주', 24);

//instanceof : 객체가 특정 생성자 함수에 의해 만들어졌는지 여부 반환
// 프로토타입의 constructor의 체인이 해당 생성자 함수 포함하는지 여부
console.log(chain31, chain31 instanceof YalcoChicken3); // FALSE
console.log(chain32, chain32 instanceof YalcoChicken3); // FALSE
console.log(chain33, chain33 instanceof YalcoChicken3); //TRUE

// 3. 생성자 함수 자체의 프로퍼티와 함수
function YalcoChicken4 (name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

// 본사의 정보와 업무 << 생성자 함수 자체에도 추가가 가능하다. 
YalcoChicken4.brand = '얄코치킨';

YalcoChicken4.contact = function () {
  return `${this.brand}입니다. 무엇을 도와드릴까요?`;
};

const chain41 = new YalcoChicken4('판교', 3);

// 4. 💡 new 생략 실수 방지하기
function YalcoChicken5 (name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }

  if (!new.target) { // 이 부분을 지우고 다시 해 볼 것
    return new YalcoChicken(name, no);
  }
}

const chain51 = new YalcoChicken5('판교', 3);
const chain52 = YalcoChicken5('강남', 17);

console.log(chain51, chain52);