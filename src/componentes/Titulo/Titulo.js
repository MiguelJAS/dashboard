import imagen from '../../img/logoRM.png';

const Titulo = () => {

    return (
        <header>
            <a href="/"><img className="mx-auto w-[15%]" src={imagen} alt="Logo de Rick y Morty"></img></a>
        </header>
    )
}

export default Titulo;