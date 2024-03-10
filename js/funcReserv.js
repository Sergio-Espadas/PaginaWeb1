const continuar = document.getElementById("continuar");
const reservar = document.getElementById("reservar");

document.getElementById('miReserva').addEventListener('submit', function (event) {
    event.preventDefault();
});

document.getElementById('miTarjeta').addEventListener('submit', function (event) {
    event.preventDefault();
});

continuar.addEventListener("click", function () {
    const reForm = document.getElementById("miReserva");
    const taForm = document.getElementById("miTarjeta");
    const progres = document.getElementById("barraProgreso");

    progres.style.width = "50%"
    reForm.classList.add("hidden");
    taForm.classList.remove("hidden");
});


reservar.addEventListener("click", function () {
    const taForm = document.getElementById("miTarjeta");
    const progres = document.getElementById("barraProgreso");
    const dialog = document.getElementById("confirmation");

    progres.style.width = "100%";
    taForm.classList.add("hidden");
    dialog.classList.remove("hidden");
});

const conf = document.getElementById("confirm");
conf.addEventListener("click", function () {
    const dialog = document.getElementById("dialog");
    conf.classList.add("hidden");
    canc.classList.add("hidden");
    dialog.querySelector("#dialog-content p").textContent = "Reserva confirmada";
});

const canc = document.getElementById("cancel")
canc.addEventListener("click", function () {
    const dialog = document.getElementById("dialog");
    conf.classList.add("hidden");
    canc.classList.add("hidden");
    dialog.querySelector("#dialog-content p").textContent = "Reserva cancelada";
});