// 3번
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
});

// 4번
function count() {
  const x = 0;
  console.log("4번");
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
}
count();

// 5번
function even() {
  console.log("5번");
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
even();

// 6번
setTimeout(() => {
  console.log("3초 후에 출력되는 텍스트입니다");
}, 3000);
