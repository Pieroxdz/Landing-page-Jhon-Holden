/* Insertar datos de manera dinámica */

let nuestrosLocales = ['San Miguel', 'Cercado de Lima', 'Chorrillos', 'Miraflores'];
let locales = document.querySelector(".dropdown-menu");
nuestrosLocales.forEach((local, index) => {
    locales.innerHTML += `<li><a class="dropdown-item" href="#">${local}</a></li>`

    /* Tenemos en cuenta que el método lenght no empieza a contar desde cero, así que por eso le restamos 1 */

    if (index < nuestrosLocales.length - 1) {
        locales.innerHTML += "<hr>";
    }
});

Swal.fire({
    title: "Bienvenid@!",
    text: "Nosotros somos John Holden",
    confirmButtonColor: "#672222",
    imageUrl: " https://yt3.googleusercontent.com/ytc/AIdro_kmp8JLZvQtkhTLxXfSLFKH9B15uFvbMMuseWkLtDE5qA=s900-c-k-c0x00ffffff-no-rj",
    imageWidth: 250,
    imageHeight: 200,
    // icon: "success"
});