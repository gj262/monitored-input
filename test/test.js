window.onload = function(event) {
  failTest(
    "present an input field to the user that calls a monitor function when the input value changes"
  );
};

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
