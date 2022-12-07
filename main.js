let add = document.querySelector("[type='text']");
let btn = document.querySelector("button");
let products = document.querySelector(".products");

window.onload = () => {
  add.focus();
};
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (add.value) {
    let div = document.createElement("div");
    div.className = `product`;
    let newProduct = document.createElement("div");
    let newSpan = document.createElement("span");
    newProduct.innerHTML = `${add.value}`;
    newSpan.textContent = `Delete`;
    div.appendChild(newProduct);
    div.appendChild(newSpan);
    products.appendChild(div);
    newSpan.onclick = () => {
      div.remove();
    };
  }
  add.value = ``;
});
