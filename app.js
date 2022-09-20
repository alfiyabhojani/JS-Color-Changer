let btn = document.getElementById("button");
let display = document.getElementById("canvas");

btn.addEventListener("click", () => {
  let value = "0123456789ABCDEF";
  let cons = "#";
  for (let i = 0; i < 6; i++) {
    cons = cons + value[Math.floor(Math.random() * 16)];
  }
  display.style.background = cons;
});
