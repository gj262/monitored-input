window.onload = function(event) {
  (() => {
    var testInput = new MonitoredInput({ id: "test" });

    var elementToInteractWith = document.querySelector("[data-test=test]");

    (elementToInteractWith ? passTest : failTest)(
      "it gives me something to interact with"
    );
  })();

  (() => {
    var testInput = new MonitoredInput({ id: "test" });

    var elementToInteractWith = document.querySelector("[data-test=test]");

    elementToInteractWith.value = "a value";

    (elementToInteractWith.value === "a value" ? passTest : failTest)(
      "it accepts a value"
    );
  })();

  failTest(
    "present an input field to the user that calls a monitor function when the input value changes"
  );
};

function passTest(name) {
  addTestResult("passed", name);
}

function failTest(name) {
  addTestResult("failed", name);
}

function addTestResult(type, name) {
  var results = document.getElementById("results");
  var thisResult = document.createElement("li");
  thisResult.innerHTML = name;
  thisResult.classList.add(type);
  results.appendChild(thisResult);
}
