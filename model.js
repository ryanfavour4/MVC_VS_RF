export class Model {
  #views = [];

  #counter = 0;

  attach(view) {
    this.#views.push(view);
    this.#notify();
  }

  incrementCounter() {
    this.#counter += 1;
    this.#notify();
  }

  getCounter() {
    return this.#counter;
  }

  #notify = () => {
    if (this.#views.length > 0) {
      for (const view of this.#views) {
        view.update(this.#counter);
      }
    }
  };
}
