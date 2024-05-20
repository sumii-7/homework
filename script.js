// 1번
const container = document.querySelector("#container");
const box = document.querySelectorAll(".box");

container.addEventListener("click", function (e) {
  if (e.target.className === "box") {
    e.target.classList.add("clicked");
  }
});

// 2번
function getSquare(number) {
  return number * number;
}

const result = getSquare(5);
console.log(result);

const helloId = setInterval(function () {
  console.log("hello");
}, 1000);

setTimeout(function () {
  clearInterval(helloId);
}, 5000);
