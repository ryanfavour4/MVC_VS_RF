export class View {
  #viewName = "first view";
  #counterEl;
  #addingEl;
  #minusingEl;

  constructor(controllerEvents) {
    const ctrlEvents = controllerEvents;
    
    this.#addingEl = document.getElementById("adding");
    this.#minusingEl = document.getElementById("minusing");
    this.#counterEl = document.getElementById("counter");
    // ? ============= ? ==========  ? ========= ? //
  
    this.#addingEl.addEventListener("click", ctrlEvents[0], false);
    this.#minusingEl.addEventListener("click", ctrlEvents[1], false);
  }

  get counterEl() {
    return this.#counterEl;
  }

  set counterEl(value) {
    this.#counterEl = value;
  }

  updateValue(value) {
    this.#counterEl.innerHTML = value;
  }
}
