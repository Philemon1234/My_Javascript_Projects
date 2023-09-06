const openModal = document.getElementById("open-btn");
const closeModal = document.getElementById("close-btn");
const modalParent = document.querySelector(".modal-parent");

openModal.addEventListener("click", function() {
    modalParent.classList.add("show");
})

closeModal.addEventListener("click", function() {
    modalParent.classList.remove("show");
})