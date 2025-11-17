const form = document.querySelector("form")
const amount = document.getElementById("amount")
const curr

amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex,"")
})