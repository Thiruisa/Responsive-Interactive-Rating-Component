const ratingCard = document.querySelector(".rating-card")
const thanksCard = document.querySelector(".thank-you-card")
const submitButton = document.getElementById("submit")
const rates = document.querySelectorAll(".btn")

submitButton.addEventListener("click", () => {
    ratingCard.style.display = "none"
    thanksCard.classList.remove("hidden")

})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
      rating.innerHTML = rate.innerHTML
    })
})

