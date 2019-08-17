
const uiCanInteract = () => {
    document.querySelector("[data-cc-digits] input:nth-child(1)").focus();
    document.querySelector("[data-pay-btn]").addEventListener("click", validatePayment);
    billHype();
}

