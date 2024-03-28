function Bird (name, sound) {
  this.name = name;
  this.sound = sound;
}
Bird.prototype.fly = function () {
  console.log(`${this.name} ${this.sound} 비행중`);
}

function Eagle (name, sound, prey) {
  this.name = name;
  this.sound = sound;
  this.prey = prey;
}

// ⚠️ 순서 주의! 상속을 먼저 받음
Eagle.prototype = Object.create(Bird.prototype);
// Eagle.prototype = Bird.prototype; // 💡 비교해 볼 것
// 위처럼 하면 Egale이 Bird의 prototype을 상속받는 또다른 객체가 아니라
// Bird와 같은 객체가 되어 버림.

// 상속 이후 자신의 프로토타입 작성
Eagle.prototype.hunt = function () {
  console.log(`${this.name} ${this.prey} 사냥중`);
}

const bird = new Bird('새돌이', '파닥파닥');
const eagle = new Eagle('독돌이', '푸드덕', '토끼');

// 상속 구조 확인
console.log(bird);
console.log(eagle);

console.log(
  eagle instanceof Bird,
  bird instanceof Eagle
);

bird.fly();
eagle.fly();
eagle.hunt();




//부모 생성자 활용 
function Bird (name, sound) {
  this.name = name;
  this.sound = sound;
}

Bird.prototype.fly = function () {
  console.log(`${this.name} ${this.sound} 비행중`);
}

function Eagle (name, sound, prey) {
  // 💡 call 호출방식 사용
  Bird.call(this, name, sound);
  this.prey = prey
}

Eagle.prototype = Object.create(Bird.prototype);

Eagle.prototype.hunt = function () {
  console.log(`${this.name} ${this.prey} 사냥중`);
}

const eagle = new Eagle('독돌이', '푸드덕', '토끼');
console.log(eagle);

eagle.fly();
eagle.hunt();


// 클래스와 프로토타입 
function AAA () {
  this.field = 1;
  this.run = function () { return 1; };
}

class BBB {
  field = 1;
  run = function () { return 1; }
}

class CCC {
  field = 1;
  run () { return 1; }
}

console.log(new AAA()); // 인스턴스에 속함
console.log(new BBB()); // 인스턴스에 속함
console.log(new CCC()); // 프로토타입에 속함


// ♻️ 새로고침 후 실행
//class로 변환

class Bird {
  constructor (name, sound) {
    this.name = name;
    this.sound = sound;
  }
  fly () {
    console.log(`${this.name} ${this.sound} 비행중`);
  }
}

class Eagle extends Bird {
  constructor (name, sound, prey) {
    super(name, sound);
    this.prey = prey;
  }
  hunt () {
    console.log(`${this.name} ${this.prey} 사냥중`);
  }
}

const bird = new Bird('새돌이', '파닥파닥');
const eagle = new Eagle('독돌이', '푸드덕', '토끼');

console.log(bird);
console.log(eagle);

bird.fly();
eagle.fly();
eagle.hunt();



// Mixin
const runner = {
  run : function () {
    console.log(`${this.name} 질주중`);
  }
}
const swimmer = {
  swim: function () {
    console.log(`${this.name} 수영중`);
  }
}
const flyer = {
  fly: function () {
    console.log(`${this.name} 비행중`);
  }
}
const hunter = {
  hunt: function () {
    console.log(`${this.name} 사냥중`);
  }
}

class Owl {
  constructor (name) {
    this.name = name;
  }
}

class FlyingFish {
  constructor (name) {
    this.name = name;
  }
}

class PolarBear {
  constructor (name) {
    this.name = name;
  }
}

Object.assign(Owl.prototype, flyer, hunter);
Object.assign(FlyingFish.prototype, flyer, swimmer);
Object.assign(PolarBear.prototype, runner, swimmer, hunter);

