import imagenLoader from '../../img/ajax-loader.gif';

const AjaxLoader = () => {

    return (
        <div className="flex justify-center mt-20">
            <img src={imagenLoader} alt="ajax-loader"/>
        </div>
    )
}

export default AjaxLoader;