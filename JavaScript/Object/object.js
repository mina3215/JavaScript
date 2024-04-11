const intro1 = {
  name: '홍길동'
};
const intro2 = { ...intro1 };

console.log(intro1, intro2);

const personal = {
  age: 25,
  married: false
};
const career = {
  job: '개발자',
  position: '팀장'
}

// assign : 인자로 주어진 객체(들)의 프로퍼티를 대상 객체에 붙여넣음 
Object.assign(intro1, personal);
console.log(intro1);

// 둘 이상의 원본에서 가져올 수도 있음
Object.assign(intro2, personal, career);
console.log(intro2);

// keys : 배열이나 문자열 같은 유사 객체도 가능
const obj = {
  x: 1,
  y: 2,
  z: 3
};

console.log(
  Object.keys(obj),
);

// isExtensible - 해당 여부 확인
console.log(Object.isExtensible(obj)); // true
obj.t = 1; 
console.log(obj) // 추가 가능

Object.preventExtensions(obj);
console.log(Object.isExtensible(obj)); // false

obj.t1='faker';
console.log(obj); // 추가 안됨.


// 배열에 적용시
const arr = [1, 2];
Object.preventExtensions(arr);

//js는 원래는 이게 가능함. 배열 크기 넘어서 넣어버리는거..
arr[2] = 3; // 동작하지 않음.. 

console.log(arr);

arr.push(3); // ⚠️ 오류 발생

console.log(arr);


//seal - 프로퍼티 추가와 삭제 안됨.

const obj1= { x: 1, y: 2 };

console.log(Object.isSealed(obj1));

Object.seal(obj1);

console.log(Object.isSealed(obj1));

obj1.x++; // 프로퍼티 수정 가능
delete obj1.y // 💡 프로퍼티 삭제 금지
obj1.z = 3; // 💡 프로퍼티 추가 금지

console.log(obj1);

// freezen : 객체 동결 - 읽기만 가능
const obj3 = { x: 1, y: 2 };

console.log(Object.isFrozen(obj3));
Object.freeze(obj3);

console.log(Object.isFrozen(obj3));

obj3.x++; // 💡 프로퍼티 수정 불가
delete obj3.y // 💡 프로퍼티 삭제 금지
obj3.z = 3; // 💡 프로퍼티 추가 금지

console.log(obj3);

const obj5 = {
  x: 1,
  y: { a: 1 }
};

Object.freeze(obj5);

obj5.x++;
obj5.y.a++;

console.log(obj5);

