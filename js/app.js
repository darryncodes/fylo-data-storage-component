const amount = document.querySelector(".popup__amount");

function updateCount() {
    const count = parseInt(amount.innerText);
    const target = parseInt(amount.getAttribute("data-target"));
    const increment = 1;

    if (count < target) {
        amount.innerText = count + increment;
        setTimeout(updateCount, 5);
    } else {
        amount.innerText = target;
    }
    console.log(count);
}

setTimeout(updateCount, 2600);
