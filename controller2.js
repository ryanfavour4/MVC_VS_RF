import { View2 } from "./view2.js";
import { Model } from "./model.js";

export class Controller2 {
  #model;

  initialize(vModel) {
    this.#model = vModel;
    const view2 = new View2(this.#handleIncrementBtnClick2);
    this.#model.attach(view2);
  }

  #handleIncrementBtnClick2 = () => {
    this.#model.incrementCounter();
  };
}
