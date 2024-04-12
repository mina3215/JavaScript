
const tag = "[Controller]";

export default class Controller {
  constructor(store, {searchFormView}) {
    this.store = store;

    this.searchFormView = searchFormView;

    this.subscribeViewEvents();

  }

  subscribeViewEvents(){
    // on 메서드에 함수체이닝이 걸려 있다.
    this.searchFormView.on('@submit', event => 
      this.search(event.detail.value)
    ).on("@reset",()=>this.reset());
  }

  search(event){
    console.log(tag, event, event.detail); 
  }

  reset(){
    console.log(tag,"reset");
  }
}
