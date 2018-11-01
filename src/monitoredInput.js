class MonitoredInput {
  constructor(options) {
    if (!("id" in options)) {
      throw new Error("expect an id to attach to");
    }
    var attachTo = document.getElementById(options.id);
    if (!attachTo) {
      throw new Error("expect " + options.id + " to exist");
    }
    attachTo.innerHTML =
      "<div>This is where the input will be: <input type=text data-test=" +
      options.id +
      " /></div>";
    this.inputElement = attachTo.querySelector("input");
    this.inputElement.oninput = this.onInput.bind(this);
    this.options = options;
  }

  onInput(event) {
    if (this.options.onInput) {
      this.options.onInput(event.target.value);
    }
  }
}
