/* Constantes */
const lienzo = document.getElementById("regleta");
const numero = document.getElementById("n_actual");
const n_ceros = document.getElementById("n_ceros");
const n_unos = document.getElementById("n_unos");
const medidor = lienzo.getContext("2d");
const color_lapiz = "red";

/* variables */
let posX=500;
let unos=0, ceros=0;
let aleatorio;
let seguir = true;


linea(color_lapiz, posX, 500, posX, 0, medidor);

document.addEventListener("keydown", (e)=>{movimiento(e); seguir=false;});

function linea(color, xi, yi, xf, yf, papel){
    /* función de dibujo de medidor */
    papel.beginPath();
    papel.strokeStyle = color;
    papel.lineWidth = 2;
    papel.moveTo(xi,yi);
    papel.lineTo(xf,yf);
    papel.stroke();
    papel.closePath();
}

function movimiento(dato){
    medidor.clearRect(posX-2, 0, posX+1, 500);
    posX = 500 + dato;
    linea(color_lapiz, posX, 500, posX, 0, medidor);
}

/* Inicio */
setInterval(() => {
    aleatorio = Math.floor(Math.random()*2);
    numero.innerText=aleatorio;
    n_ceros.innerText=ceros;
    n_unos.innerText=unos;
    if (aleatorio == 1){
        unos+=1;
    }else if (aleatorio == 0){
        ceros+=1;
    }
    movimiento(unos-ceros);
    console.log("diferencia: ", unos-ceros);
}, 500);
    



