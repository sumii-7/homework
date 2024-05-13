document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector(".title").innerHTML = "제목아니다.";
});

function sum(num1, num2) {
  ex = num1 + num2;
  return ex;
}
console.log(sum(4, 4));

function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    console.log("짝수입니다.");
  } else {
    console.log("홀수입니다.");
  }
}

isEvenOrOdd(4);

const name = "수미";
const age = "20";

console.log(`이름: ${name}`);
console.log(`나이: ${age}`);
