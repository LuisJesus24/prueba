function accionParaCuandoEllaDigaQueSi(){
    alert('Te quiero mucho<3');

    const colorv = document.querySelector('.respuesta1');
    colorv.addEventListener('click', ()=>{
        document.body.classList.toggle('mostrar');
    });
}

function mueveElBoton(){
    width = window.innerWidth;
    height = window.innerHeight;

    newWidth = (Math.random() * width);
    newHeight = (Math.random() * height);

    document.getElementById('btnNo').style.position = "absolute";
    document.getElementById('btnNo').style.left = newWidth + "px";
    document.getElementById('btnNo').style.top = newHeight + "px";
    

}