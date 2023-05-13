class Model {
  #modelName = "first model";
  #counts = 0;

  constructor() {
    console.log(this.#modelName);
  }

  getCounter() {
    return this.#counts;
  }

  adder() {
    this.#counts += 1;
    console.log(this.#counts);
  }

  minus() {
    this.#counts -= 1;
  }

  
}

export const model = new Model();
