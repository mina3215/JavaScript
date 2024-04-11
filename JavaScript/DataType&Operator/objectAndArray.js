const person1 = {
  name:'김철수',
  "age":25,
  married:false
};

console.log(person1);
console.log(person1['name']);
console.log(person1.name);

const key1 = 'name';
console.log(person1[key1]);
console.log(
  'age' in person1,
  'job' in person1
) // in 연산자는 있는지 없는지 판단. 

person1.job = 'developer';
person1['bllodtype'] = 'AB';

console.log(person1);

// const지만 내부는 변경 가능
// person1 = {}; 식으로 새로 할당은 불가

const person2 = {
  name:'김달순',
  age:23,
  languages:['Korean','English','French'],
  education:{
    school:'한국대',
    major:['컴퓨터공학','전자공학'],
    graduated:true,
  }
}

console.log(person2);