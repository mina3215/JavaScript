import { on, qs } from "../helpers.js";
import View from "./View.js";

const tag = "[SearchFormView]";

export default class SearchFormView extends View{
  constructor(){
    super(qs("#search-form-view"));

    this.inputElement = qs("[type=text]", this.element);
    this.resetElement = qs("[type=reset]", this.element);
    
    this.showResetButton(false);
    this.bindEvent();
  }

  showResetButton(visible = true){
    this.resetElement.style.display = visible?"block":"none";
  }

  /**
   * search-form-view에서 이벤트를 바인딩 하는 함수
   */
  bindEvent(){
    on(this.inputElement, "keyup", ()=> this.handleKeyup());
    this.on( "submit", event => this.handleSubmit(event));
    // on(this.element, "reset", event=>this.emit("@delete",{}));
    on(this.resetElement, "click", ()=>this.handleReset());
  }
  
  handleKeyup(){
    // console.log(tag, 'handleKeyup', this.inputElement.value);
    const {value} = this.inputElement;
    this.showResetButton(value.length > 0);
    if(value.length === 0){
      // this.emit("@reset");
      this.handleReset();
    }
  }

  handleSubmit(event){
    event.preventDefault(); // 화면이 refresh 되지 않도록. 
    console.log(tag, "handleSubmit");
    const {value} = this.inputElement;
    // 그냥 custom event여서 @ 붙여준거임. 
    this.emit("@submit",{value});
  }

  handleReset(){
    this.emit("@reset");
  }
}