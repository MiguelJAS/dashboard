import { FiHeart } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";


const Vivienda = (props) => {

    let altImagen = props.vivienda.tipo + " número " + props.vivienda.id;
    let imagenes = props.vivienda.imagenes.split(",");

    return (
        <a href="#" className="block rounded-lg p-3 shadow-sm shadow-green-700 mt-4">
  <img
    alt="Home"
    src={props.vivienda.imagenes}
    className="h-40 w-full rounded-md object-cover"
  />
  <div className="mt-2">
    <dl>
      <div>
        <dt className="sr-only">Price</dt>
        <dd className="text-sm text-gray-500">{props.vivienda.precio} €</dd>
      </div>
      <div>
        <dt className="sr-only">Address</dt>
        <dd className="font-medium">{props.vivienda.direccion}, {props.vivienda.provincia}, {props.vivienda.municipio}</dd>
      </div>
    </dl>
    <div className="mt-6 flex items-center gap-8 text-xs">
      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          className="h-4 w-4 text-green-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>
        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Superficie</p>
          <p className="font-medium">{props.vivienda.superficie} m²</p>
        </div>
      </div>
      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          className="h-4 w-4 text-green-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Bathroom</p>
          <p className="font-medium">{props.vivienda.banyos} baños</p>
        </div>
      </div>
      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          className="h-4 w-4 text-green-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Bedroom</p>
          <p className="font-medium">{props.vivienda.habitaciones} habitaciones</p>
        </div>
      </div>
      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          className="h-4 w-4 text-green-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>
        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Parking</p>
          <p className="font-medium">2 spaces</p>
        </div>
      </div>
      
    </div>
    <span className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm mt-4">
    <button className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative">
    <div className="flex items-center">
        <FiPhone className="mr-2" />
        <p>Contactar</p>
    </div>
    </button>
    <button className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative">
    <div className="flex items-center">
        <FiHeart className="mr-2" />
        <p>Favoritos</p>
    </div>
    </button>
</span>

  </div>
</a>

        // <li>
        //     <figure className="flex mb-2 bg-[#C4A484] my-10 border border-gray-500 rounded-xl relative">
        //         <Link to={`/vivienda/${props.vivienda.id}`}><img className="w-48 rounded-tl-xl rounded-bl-xl" src={imagenes[0]} alt={altImagen}></img></Link>
        //         <figcaption className="flex flex-col items-center justify-center flex-1">
        //             <div className="flex items-center">
        //                 <GiBed className="mr-2"></GiBed>
        //                 <p>{props.vivienda.habitaciones} habitaciones</p>
        //                 <FaShower className="mr-2 ml-5"></FaShower>
        //                 <p>{props.vivienda.banyos} baños</p>
        //                 <TbRulerMeasure className="mr-2 ml-5"></TbRulerMeasure>
        //                 <p>{props.vivienda.superficie}m<sup>2</sup></p>
        //             </div>
        //             <br></br>
        //             <div className="text-center">
        //                 <h1 className="text-xl mx-20">La vivienda está en la provincia de {props.vivienda.provincia}, en el municipio de {props.vivienda.municipio}. La dirección completa es {props.vivienda.direccion}.</h1>
        //                 <p>Tiene un precio de {props.vivienda.precio}€.</p>
        //             </div>
        //         </figcaption>
        //         <div className="flex flex-col">
        //             <button className="group relative inline-block overflow-hidden bg-blue-500 rounded-tr-xl px-8 py-3">
        //                 <span className="absolute inset-y-0 right-0 w-[2px] bg-blue-700 transition-all group-hover:w-full group-active:bg-blue-600"></span>
        //                 <span className="relative text-sm font-medium text-white transition-colors">Contactar vendedor</span>
        //             </button>
        //             <button className="group relative inline-block overflow-hidden bg-red-500 px-8 py-3">
        //                 <span className="absolute inset-y-0 right-0 w-[2px] bg-red-700 transition-all group-hover:w-full group-active:bg-red-600"></span>
        //                 <span className="relative text-sm font-medium text-white transition-colors">Descartar vivienda</span>
        //             </button>
        //             <button className="group relative inline-block overflow-hidden bg-yellow-400 rounded-br-xl px-8 py-3">
        //                 <span className="absolute inset-y-0 right-0 w-[2px] bg-yellow-600 transition-all group-hover:w-full group-active:bg-yellow-500"></span>
        //                 <span className="relative text-sm font-medium text-white transition-colors">Añadir a favoritos</span>
        //             </button>
        //         </div>
        //     </figure>
        // </li>
    )
}

export default Vivienda;