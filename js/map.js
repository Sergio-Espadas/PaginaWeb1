function crearMapaDeImagen() {
    // Selecciona el elemento de imagen
    const img = document.querySelector('#myModal .modal-content img');

    // Crea un nuevo elemento <map>
    const map = document.createElement('map');
    map.name = 'rombos';

    // Crea cinco nuevos elementos <area>
    const coords1 = "586,199, 686,103, 684,302, 786,204";
    const area1 = document.createElement('area');
    area1.shape = "poly";
    area1.coords = coords1;
    area1.href = "./main.html";

    const coords2 = "463,319, 566,221, 566,420, 666,319";
    const area2 = document.createElement('area');
    area2.shape = "poly";
    area2.coords = coords2;
    area2.href = "./reserva.html";

    const coords3 = "706,319, 808,219, 808,421, 906,323";
    const area3 = document.createElement('area');
    area3.shape = "poly";
    area3.coords = coords3;
    area3.href = "./nosotros.html";

    const coords4 = "463,557, 564,446, 564,657, 666,555";
    const area4 = document.createElement('area');
    area4.shape = "poly";
    area4.coords = coords4;
    area4.href = "./contacto.html";

    const coords5 = "706,568, 806,465, 806,666, 907,566";
    const area5 = document.createElement('area');
    area5.shape = "poly";
    area5.coords = coords5;
    area5.href = "./redes.html";

    // Agrega los elementos <area> al elemento <map>
    map.appendChild(area1);
    map.appendChild(area2);
    map.appendChild(area3);
    map.appendChild(area4);
    map.appendChild(area5);

    // Agrega el elemento <map> al documento
    document.body.appendChild(map);

    // Agrega el atributo usemap al elemento de imagen
    img.setAttribute("usemap", "#rombos");
}

document.addEventListener('DOMContentLoaded', () => {
    crearMapaDeImagen();
});