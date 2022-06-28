/*const url = "https://api.adviceslip.com/advice";

function getAdvice() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.slip))
    .catch((error) => console.log(error));
}

getAdvice();
/*adviceId.textContent = JSON.stringify(data.id))*/

fetch("https://api.adviceslip.com/advice")
  .then((response) => response.json())
  .then((data) => {
    adviceId.textContent = data.slip.id;
    advice.textContent = data.slip.advice;
  })
  .catch((err) => console.log(err));
