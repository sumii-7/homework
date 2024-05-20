// 1번
const child = [
  {
    name: "철수",
    age: 19,
    gender: "남",
  },
  {
    name: "짱구",
    age: 20,
    gender: "남",
  },
  {
    name: "유리",
    age: 21,
    gender: "여",
  },
];
console.log(child);

// 2번
const children = document.querySelector(".children");

child.forEach((child) => {
  let html = `
  <div>이름: ${child.name}</div>
  <div>나이: ${child.age}</div>
  <div>성별: ${child.gender}</div>
  <hr>
  `;
  children.insertAdjacentHTML("beforeend", html);
});

// 3번
const girl = child.find((child) => {
  return child.gender === "여";
});
console.log(girl);

// 4번
const man = child.filter((child) => {
  return child.gender === "남";
});
console.log(man);

// 5번
const newChild = child.map((child) => {
  return {
    이름: child.name,
    나이: child.age * 10,
    성별: child.gender,
  };
});
console.log(newChild);

// 6번
let arrange = [...child];
arrange.sort((a, b) => b.age - a.age);
console.log(child);
console.log(arrange);

// 7번
const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};
console.log(user["이름"]);
console.log(user["나이"]);
console.log(user["주소"]);
