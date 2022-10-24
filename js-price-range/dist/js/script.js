"use strict";

const rangeInput = document.querySelectorAll(".range-input input");
const priceInput = document.querySelectorAll(".price-input input");
const progress = document.querySelector(".progress");

let priceGap = 100;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    // getting two Inputs value and parsing them to number
    let minValue = parseInt(priceInput[0].value);
    let maxValue = parseInt(priceInput[1].value);

    if (maxValue - minValue >= priceGap && maxValue <= 1000) {
      if (e.target.className === "input-min") {
        // if active input value min input
        rangeInput[0].value = minValue;
        progress.style.left = (minValue / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxValue;
        progress.style.right = 100 - (maxValue / rangeInput[1].max) * 100 + "%";
      }
    }

    // console.log(percent);
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    // getting two ranges  value and parsing them to number
    let minValue = parseInt(rangeInput[0].value);
    let maxValue = parseInt(rangeInput[1].value);

    if (maxValue - minValue < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxValue - priceGap;
      } else {
        rangeInput[1].value = minValue + priceGap;
      }
    } else {
      priceInput[0].value = minValue;
      priceInput[1].value = maxValue;
      progress.style.left = (minValue / rangeInput[0].max) * 100 + "%";
      progress.style.right = 100 - (maxValue / rangeInput[1].max) * 100 + "%";
    }

    // console.log(percent);
  });
});
