// 7번
const counter = document.querySelector("#counter");

let count = Number(counter.textContent);
let intervalId = setInterval(() => {
  count = count + 1;
  counter.textContent = count;
}, 1000);

setTimeout(function () {
  clearInterval(intervalId);
}, 5000);
