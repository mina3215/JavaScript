const curry =f=>(a,..._)=>_.length?f(a,..._):(..._)=>f(a,..._);

const reduce=curry((f,acc,iter)=>{
  if(!iter){ // if문에 걸림.
    iter=acc[Symbol.iterator]() // 원래의 acc와 동일한 값이다.
    acc=iter.next().value;
  }
  // iter = acc[Symbol.iterator]()가 되고
  // acc = [1,2,3]을 가르킨다. 

  // console.log(iter);
  
  for(const a of iter){
    // console.log(a); // 돌리면 a는 [1,2,3], reduce((total,idx)=>total+idx) 값으로 돌아간다. 
    acc=f(acc,a) 
    // (a,f)=>f(a)라는 뜻인데 여기선 f = reduce((total,idx)=>total+idx) 가 실행된다. 
    // reduce((total,idx)=>total+idx) (total,idx) 부분에 [1,2,3] 들어감.
    // reduce([1,2,3]=>total+idx) > curry에서 6을 만들어옴. 개어려웠다.
 }
 console.log(acc);
  return acc;
})

// const go=(...args)=>reduce((a,f)=>f(a),args)
const go = function(...args){
  // console.log(args)
  return reduce((a,f)=>f(a),args)
}

console.log(
  go([1,2,3],
    reduce((total,idx)=>total+idx)
  ))
//6

