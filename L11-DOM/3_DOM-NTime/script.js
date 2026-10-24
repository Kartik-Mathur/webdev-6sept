let inp = document.querySelector(".inp");
let btn = document.querySelector(".btn");
let numberList = document.querySelector(".numberList");

function addNumbers(n) {
  numberList.innerHTML = "";
  let cnt = 1;
  for (let i = 1; i <= n; i++) {
    let li = document.createElement("li");
    li.innerText = cnt++;
    numberList.appendChild(li);
  }
}

btn.onclick = () => {
  let n = Number(inp.value.trim());
  if (!n) {
    return;
  }

  addNumbers(n);
};
