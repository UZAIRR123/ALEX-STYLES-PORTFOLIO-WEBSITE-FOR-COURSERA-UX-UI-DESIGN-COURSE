// Get modal, button, and close
const modal = document.getElementById("checkoutModal");
const closeBtn = document.querySelector(".close-btn");

// Example: open modal when any "Order" button is clicked
const orderButtons = document.querySelectorAll(".service-card");

orderButtons.forEach(card => {
  card.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

// Close modal on X
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
