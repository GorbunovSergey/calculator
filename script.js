const input = document.querySelector(".enter");
const nums = document.querySelectorAll(".num");
const result = document.querySelector(".result");
const clear = document.querySelector(".clear");
const history = document.querySelector(".history");
const btnHistory = document.querySelector(".btnHistory");
const clearHistory = document.querySelector(".clearHistory");

for (let num of nums) {
  num.addEventListener("click", function () {
    input.value += num.textContent;
  });
};

clear.addEventListener("click", function () {
  input.value = " ";
});

let count = 0;
result.addEventListener("click", function () {
  let his = eval(input.value);
  input.value = his;
  localStorage.setItem(count, his);
  count++;
});

btnHistory.addEventListener("click", function () {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    history.value += localStorage.getItem(key);
  }
});

clearHistory.addEventListener("click", function () {
  localStorage.clear();
  history.value = "";
});
