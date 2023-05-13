import { View } from "./view.js";
//import { View2 } from "./view2.js";
import { Model } from "./model.js";

export class Controller {
  #model;

  initialize(vModel) {
    this.#model = vModel;
    const view = new View(this.#handleIncrementBtnClick);
    //const view2 = new View2(this.#handleIncrementBtnClick2);

    this.#model.attach(view);
    //this.#model.attach(view2);
  }

  #handleIncrementBtnClick = () => {
    this.#model.incrementCounter();
  };

//   #handleIncrementBtnClick2 = () => {
//     this.#model.incrementCounter();
//   };
}
