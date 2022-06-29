const showData = (result) => {
  document.querySelector("#id").innerHTML = "ADVICE # " + result.id;
  document.querySelector("#advice").innerHTML = result.advice;
}

function advice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => showData(data.slip))
    .catch((err) => console.log(err));
}

advice()
