let inp = document.querySelector(".inp");
let text = document.querySelector("#text");
inp.addEventListener("keypress", (ev) => {
  let currentVal = inp.value + ev.key;
  console.log(currentVal);
});

text.addEventListener("keypress", (ev) => {
  let currentVal = text.value + ev.key;
  console.log(currentVal);
});
