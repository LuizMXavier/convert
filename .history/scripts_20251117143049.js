const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("")

amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex,"")
})