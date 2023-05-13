export class View2 {
  #counterEl;
  #incrementBtnEl;

  constructor(incrementBtnClick) {
    this.#counterEl = document.getElementById("counter2");

    this.#incrementBtnEl = document.getElementById("increment-button2");
    this.#incrementBtnEl.addEventListener("click", incrementBtnClick);
  }

  update(counter) {
    this.#counterEl.innerHTML = `<div>${counter}</div>`;
  }
}
