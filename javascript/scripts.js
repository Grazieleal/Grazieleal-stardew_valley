
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("myModal");
  const closeModalBtn = document.getElementById("closeModalBtn");

  modal.style.display = "flex";

  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});


const collapseElementList = document.querySelectorAll('.collapse')
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))