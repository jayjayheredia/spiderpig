let boton_play = true;

let sonido_click = document.querySelector("#click");
let sonido_puerco = document.querySelector("#puerco");

let imagen = document.querySelector(".imagen");
let boton = document.querySelector(".boton");

boton.addEventListener("click", controlar_musica);

function controlar_musica(){

    if(boton_play == true){
        boton_play = false;
        sonido();
        imagen.classList.add("gif");
        boton.classList.add("boton_activo");
    }else{
        boton_play = true;
        sonido();
        imagen.classList.remove("gif");
        boton.classList.remove("boton_activo");
    };
};

function sonido() {
    if(sonido_puerco.paused){
        sonido_click.play();
        sonido_puerco.play();
    }else{
        sonido_click.play();
        sonido_puerco.pause()
    }
};