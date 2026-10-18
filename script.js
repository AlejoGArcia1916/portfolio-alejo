
const botonTema = document.querySelector("#cambiar-tema");
const temaGuardado = localStorage.getItem("tema");

if(temaGuardado === "claro"){
    document.body.classList.add("modo-claro");
    botonTema.textContent = "Modo oscuro";
}else{
    botonTema.textContent ="Modo claro";
}



botonTema.addEventListener("click", function() {
    document.body.classList.toggle("modo-claro");

    const modoClaroActivo = document.body.classList.contains("modo-claro");

    if(modoClaroActivo){
        botonTema.textContent = "Modo oscuro";
        localStorage.setItem("tema", "claro");
    }
    else{
        botonTema.textContent ="Modo claro";
        localStorage.setItem("tema", "oscuro");
    }

    }
);




const seccionProyectos = document.querySelector("#proyectos");


const listaProyectos = [
    {
        nombre: "Portfolio personal",
        descripcion: "Sitio web personal desarrollado para presentar mi formación, habilidades y proyectos. Cuenta con un diseño adaptable a distintos tamaños de pantalla.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        imagen: "img/portfolio.png",
        enlace: "https://alejogarcia1916.github.io/portfolio-alejo/"
    },
    {
        nombre: "En Preparacion",
        descripcion: "Próximamente incorporaré nuevos proyectos de desarrollo web, análisis de datos y automatización.",
        tecnologias: ["Próximamente"],
        
    }
];


function crearTarjeta(proyecto) {

    const nuevaTarjeta = document.createElement("article");
    nuevaTarjeta.classList.add("project");

    
    if (proyecto.imagen) {
        const imagenProyecto = document.createElement("img");

        imagenProyecto.src = proyecto.imagen;
        imagenProyecto.alt = `Imagen de ${proyecto.nombre}`;
        imagenProyecto.classList.add("project-imagen");

        nuevaTarjeta.append(imagenProyecto);
    }

    
    const tituloProyecto = document.createElement("h3");
    tituloProyecto.textContent = proyecto.nombre;

    
    const descripcionProyecto = document.createElement("p");
    descripcionProyecto.textContent = proyecto.descripcion;

    
    const contenedorTecnologias = document.createElement("div");
    contenedorTecnologias.classList.add("project-tecnologias");

    for (const tecnologia of proyecto.tecnologias) {
        const etiquetaTecnologia = document.createElement("span");

        etiquetaTecnologia.textContent = tecnologia;

        contenedorTecnologias.append(etiquetaTecnologia);
    }

    nuevaTarjeta.append(tituloProyecto);
    nuevaTarjeta.append(descripcionProyecto);
    nuevaTarjeta.append(contenedorTecnologias);

    
    if (proyecto.enlace) {
        const contenedorEnlaces = document.createElement("div");
        contenedorEnlaces.classList.add("project-enlaces");

        const enlaceProyecto = document.createElement("a");

        enlaceProyecto.href = proyecto.enlace;
        enlaceProyecto.textContent = "Ver proyecto";
        enlaceProyecto.target = "_blank";
        enlaceProyecto.rel = "noopener noreferrer";

        contenedorEnlaces.append(enlaceProyecto);
        nuevaTarjeta.append(contenedorEnlaces);
    }

    
    return nuevaTarjeta;
}


for (const proyecto of listaProyectos) {
    const tarjeta = crearTarjeta(proyecto);
    seccionProyectos.append(tarjeta);
}

