
"use strict";

window.onload = init;

function init() {
    document.getElementById("estimateButton").onclick = getTotalDue;
}

function getTotalDue() {
    const numberOfDays = Number(document.getElementById("numberOfDays").value);
    const tollTag = document.getElementById("tollTag").checked;
    const GPS = document.getElementById("GPS").checked;
    let roadAssistance = document.getElementById("roadAssistance").checked;
    const under25Yes = document.getElementById("under25Yes").checked;

    let carTotalOnly = (numberOfDays * 29.99);
    let optionsPrice = 0;
    let ageExtra = 0;

    if (tollTag) {
        optionsPrice += (numberOfDays * 3.95);
    }
    if (GPS) {
        optionsPrice += (numberOfDays * 2.95);
    }
    if (roadAssistance) {
        optionsPrice += (numberOfDays * 2.95);
    }
    if (under25Yes) {
        ageExtra += ((29.99 * .3) * numberOfDays);
    }

    let total = carTotalOnly + optionsPrice + ageExtra;

    document.getElementById("carPrice").value = carTotalOnly.toFixed(2);
    document.getElementById("optionPrice").value = optionsPrice.toFixed(2);
    document.getElementById("agePrice").value = ageExtra.toFixed(2);
    document.getElementById("totalCost").value = total.toFixed(2);
}