import { View } from "./view.js";
import { View2 } from "./view2.js";

export class Controller {
  #view;
  #viewTwo;
  #model;

  initialize(model) {
    this.#model = model;

    const counter = this.#model.getCounter();
    const increment = this.increment.bind(this);
    const decrement = this.decrement.bind(this);

    this.#view = new View([increment, decrement]);
    this.#viewTwo = new View2([increment, decrement]);
  }

  updater() {
    this.#view.updateValue(this.#model.getCounter());
    this.#viewTwo.updateValue(this.#model.getCounter());
  }

  increment() {
    this.#model.adder();
    this.updater();
  }

  decrement() {
    this.#model.minus();
    this.updater();
  }
}
