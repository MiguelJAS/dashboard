import './ScrollButton.css';

const ScrollButon = () => {

    //Manejamos la aparición y desaparición del botón de scroll cada vez que hagamos scroll en la página
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        //Si avanzamos un poco en la página hacia abajo, el botón aparecerá. De lo contrario, se mantendrá oculto
        let miboton = document.getElementById("miboton");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            miboton.style.display = "block";
        } else {
            miboton.style.display = "none";
        }
    }

    function topFunction() {
        //Al pulsar el botón, nos situaremos arriba del todo de la página
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (

        <button onClick={topFunction} id="miboton">↑</button>
    )

}

export default ScrollButon;