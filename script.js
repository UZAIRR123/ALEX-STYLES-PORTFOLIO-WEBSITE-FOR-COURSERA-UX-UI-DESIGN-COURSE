// Open Checkout Modal when Add to Cart is clicked
const cartButtons = document.querySelectorAll(".add-to-cart");
const modal = document.getElementById("checkoutModal");
const closeBtn = document.querySelector(".close-btn");

cartButtons.forEach(button => {
  button.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
