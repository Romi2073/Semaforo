const $luces = document.querySelectorAll('.luces');
//console.log($luces);
let contadorLuz=0;

const encenderluz = () => {
    $luces[contadorLuz].className = 'luces';
    contadorLuz++;

    if(contadorLuz>2) contadorLuz =0;
    
    const Luzactual = $luces[contadorLuz];
    Luzactual.classList.add(Luzactual.getAttribute('color'))

}

setInterval(encenderluz,2600)