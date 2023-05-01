const checkboxDiv = document.querySelector(".check-box-entire");
const checkbox = document.querySelector("#check");
const rangeEl = document.querySelector(".range");
const views = document.querySelector(".page-views span");
const priceEl = document.querySelector(".price #indicator");
const timeEl = document.querySelector(".month");
const progressBar = document.querySelector(".progress-bar");
console.log(timeEl);
console.log(priceEl);
console.log(views);

checkboxDiv.onclick = function () {
  if (checkbox.checked == true) {
    let priceInt = parseInt(priceEl.textContent);
    priceEl.textContent = `${(priceInt - priceInt * 0.25) * 12}`;
    timeEl.textContent = `/year`;
  } else {
    refreshPrices();
    timeEl.textContent = `/month`;
  }
};

rangeEl.addEventListener("input", refreshPrices);

function refreshPrices() {
  if (rangeEl.value == 1) {
    if (checkbox.checked == true) {
      priceEl.textContent = `${(8 - 8 * 0.25) * 12}`;
    } else {
      priceEl.textContent = 8;
    }

    views.textContent = "10k";
    progressBar.style.width = "0%";
  }

  if (rangeEl.value == 2) {
    if (checkbox.checked == true) {
      priceEl.textContent = 108;
    } else {
      priceEl.textContent = 12;
    }

    views.textContent = "50k";
    progressBar.style.width = "25%";
  }

  if (rangeEl.value == 3) {
    if (checkbox.checked == true) {
      priceEl.textContent = 144;
    } else {
      priceEl.textContent = 16;
    }

    views.textContent = "100k";
    progressBar.style.width = "50%";
  }

  if (rangeEl.value == 4) {
    if (checkbox.checked == true) {
      priceEl.textContent = 216;
    } else {
      priceEl.textContent = 24;
    }

    views.textContent = "500k";
    progressBar.style.width = "75%";
  }

  if (rangeEl.value == 5) {
    if (checkbox.checked == true) {
      priceEl.textContent = 324;
    } else {
      priceEl.textContent = 36;
    }

    views.textContent = "1M";
    progressBar.style.width = "100%";
  }
}
