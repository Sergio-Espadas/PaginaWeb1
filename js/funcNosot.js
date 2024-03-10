setTimeout(function () {
    document.getElementById("spinner").classList.add("hidden");
    document.getElementById("imagen").classList.remove("hidden");
}, 1000);

const modal = document.getElementById("myModal");
const img = document.querySelector('.centered-img');
const openModalBtn = document.getElementById("open-modal");
const closeModal = document.getElementsByClassName("close")[0];

openModalBtn.onclick = function () {
    modal.style.display = "block";
    modal.querySelector('.modal-img').src = img.src;
}

closeModal.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}