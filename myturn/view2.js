export class View2 {
    #viewName = "first view";
    #counterEl;
  
    constructor(controllerEvents) {
      const ctrlEvents = controllerEvents;

      this.#counterEl = document.getElementById("counter2");
      // ? ============= ? ==========  ? ========= ? //
    }

    updateValue(value) {
      this.#counterEl.innerHTML = value;
    }
  }
  