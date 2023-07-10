"use strict";

const form = document.querySelector(".form");
const inputBox = document.querySelector(".input-box");
const output = document.querySelector(".output");

form.addEventListener("click", function (e) {
  e.preventDefault();

  const inputValue = inputBox.value;

  if (inputValue.trim() !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = inputValue;
    output.appendChild(listItem);
    inputBox.value = "";
  }
});
