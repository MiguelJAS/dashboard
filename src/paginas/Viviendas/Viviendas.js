import '../../App.css';
import AjaxLoader from '../../componentes/Ajax-Loader/AjaxLoader';
import { useState } from 'react';
import TipoViviendaContext from '../../contextos/TipoViviendaContext';
import GeneroContext from '../../contextos/GeneroContext';
import StatusContext from '../../contextos/StatusContext';
import OrdenacionForm from '../../componentes/Ordenacion/OrdenacionForm';
import TipoViviendaForm from '../../componentes/TipoVivienda/TipoViviendaForm';
import GeneroForm from '../../componentes/Genero/GeneroForm';
import StatusForm from '../../componentes/Status/StatusForm';
import ListaViviendas from '../../componentes/ListaViviendas/ListaViviendas';
import CambioPagina from '../../componentes/CambioPagina/CambioPagina';
import useAllViviendas from '../../hooks/useAllViviendas';
import Banner from '../../componentes/Banner/Banner';
import Menu from '../../componentes/Menu/Menu';

function Viviendas() {

    //El vivienda recibido en este componente es el vivienda de una id específica. Esta id es recogida del la url y pasada al hook useUnVivienda, que a su vez devuelve el vivienda de dicha id.
    const [ordenacion, setOrdenacion] = useState("A...Z");
    const [tipovivienda, setTipoVivienda] = useState("Todos");
    const [genero, setGenero] = useState("Todos");
    const [status, setStatus] = useState("Todos");
    //Dependiendo de la página, se devolverá gracias al hook useAllViviendas una lista de viviendas en concreto
    const [page, setPage] = useState(1);
    const { buscando, listaViviendas } = useAllViviendas(page);

    //Se recibe el valor del nieto o del hijo mediante el contexto en las siguientes funciones, en forma de event, y luego se manda al estado en forma de value
    function manejarOrdenacion(event) {
        actualizarOrdenacion(event.target.value);
    }

    function actualizarOrdenacion(value) {
        setOrdenacion(value);
    }

    function manejarFiltroTipoVivienda(event) {
        actualizarTipoVivienda(event.target.value);
    }

    function actualizarTipoVivienda(value) {
        setTipoVivienda(value);
    }

    function manejarFiltroGenero(event) {
        actualizarGenero(event.target.value);
    }

    function actualizarGenero(value) {
        setGenero(value);
    }

    function manejarFiltroStatus(event) {
        actualizarStatus(event.target.value);
    }

    function actualizarStatus(value) {
        setStatus(value);
    }

    function manejarPage(page) {
        setPage(page);
    }

    return (
        <div>
        <Menu></Menu>
        <Banner></Banner>
            {/* <div className="filtros">
                    <ul>
                        <li>
                            <h3>Filtro 1</h3>
                            <OrdenacionForm manejarOrdenacion={manejarOrdenacion}></OrdenacionForm>
                        </li>
                        <li>
                            <h3>Filtro 2</h3>
                            <TipoViviendaContext.Provider value={manejarFiltroTipoVivienda}>
                                <TipoViviendaForm></TipoViviendaForm>
                            </TipoViviendaContext.Provider>
                        </li>
                        <li>
                            <h3>Filtro 3</h3>
                            <GeneroContext.Provider value={manejarFiltroGenero}>
                                <GeneroForm></GeneroForm>
                            </GeneroContext.Provider>
                        </li>
                        <li>
                            <h3>Filtro 4</h3>
                            <StatusContext.Provider value={manejarFiltroStatus}>
                                <StatusForm></StatusForm>
                            </StatusContext.Provider>
                        </li>
                        <li>
                            <h3>Filtro 5</h3>
                        </li>
                        <li>
                            <h3>Filtro 6</h3>
                        </li>
                        <li>
                            <h3>Filtro 7</h3>
                        </li>
                        <li>
                            <h3>Filtro 8</h3>
                        </li>
                        <li>
                            <h3>Filtro 9</h3>
                        </li>
                    </ul>
                </div> */}
                <div className='mt-4 mb-4'>
                <h1 className="text-3xl sm:text-5xl text-center">
                    Viviendas
                    <h1 className="block text-green-500">
                    Destacadas
                    </h1>
                </h1>
                </div>
                <div className="flex justify-center items-center mt-2">
                <div className="flex gap-8">
                <div className="relative">
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                        <span className="text-sm font-medium"> Disponibilidad </span>
                        <span className="transition group-open:-rotate-180">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4 mr-3"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                        </span>
                    </summary>
                    <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
                        <div className="w-96 rounded border border-gray-200 bg-white">
                        <header className="flex items-center justify-between p-4">
                            <span className="text-sm text-gray-700"> 0 Selected </span>
                            <button
                            type="button"
                            className="text-sm text-gray-900 underline underline-offset-4"
                            >
                            Reset
                            </button>
                        </header>
                        <ul className="space-y-1 border-t border-gray-200 p-4">
                            <li>
                            <label
                                htmlFor="FilterInStock"
                                className="inline-flex items-center gap-2"
                            >
                                <input
                                type="checkbox"
                                id="FilterInStock"
                                className="h-5 w-5 rounded border-gray-300"
                                />
                                <span className="text-sm font-medium text-gray-700">
                                In Stock (5+)
                                </span>
                            </label>
                            </li>
                            <li>
                            <label
                                htmlFor="FilterPreOrder"
                                className="inline-flex items-center gap-2"
                            >
                                <input
                                type="checkbox"
                                id="FilterPreOrder"
                                className="h-5 w-5 rounded border-gray-300"
                                />
                                <span className="text-sm font-medium text-gray-700">
                                Pre Order (3+)
                                </span>
                            </label>
                            </li>
                            <li>
                            <label
                                htmlFor="FilterOutOfStock"
                                className="inline-flex items-center gap-2"
                            >
                                <input
                                type="checkbox"
                                id="FilterOutOfStock"
                                className="h-5 w-5 rounded border-gray-300"
                                />
                                <span className="text-sm font-medium text-gray-700">
                                Out of Stock (10+)
                                </span>
                            </label>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </details>
                </div>
                </div>
                
                <div className="relative">
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                        <span className="text-sm font-medium"> Precio </span>
                        <span className="transition group-open:-rotate-180">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4 mr-2"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                        </span>
                    </summary>
                    <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
                        <div className="w-96 rounded border border-gray-200 bg-white">
                        <header className="flex items-center justify-between p-4">
                            <span className="text-sm text-gray-700">
                            The highest price is $600
                            </span>
                            <button
                            type="button"
                            className="text-sm text-gray-900 underline underline-offset-4"
                            >
                            Reset
                            </button>
                        </header>
                        <div className="border-t border-gray-200 p-4">
                            <div className="flex justify-between gap-4">
                            <label
                                htmlFor="FilterPriceFrom"
                                className="flex items-center gap-2"
                            >
                                <span className="text-sm text-gray-600">$</span>
                                <input
                                type="number"
                                id="FilterPriceFrom"
                                placeholder="From"
                                className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                />
                            </label>
                            <label
                                htmlFor="FilterPriceTo"
                                className="flex items-center gap-2"
                            >
                                <span className="text-sm text-gray-600">$</span>
                                <input
                                type="number"
                                id="FilterPriceTo"
                                placeholder="To"
                                className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                />
                            </label>
                            </div>
                        </div>
                        </div>
                    </div>
                    </details>
                </div>

                <div className="relative">
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                        <span className="text-sm font-medium"> Baños </span>
                        <span className="transition group-open:-rotate-180">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4 mr-2"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                        </span>
                    </summary>
                    <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
                        <div className="w-96 rounded border border-gray-200 bg-white">
                        <header className="flex items-center justify-between p-4">
                            <span className="text-sm text-gray-700">
                            The highest price is $600
                            </span>
                            <button
                            type="button"
                            className="text-sm text-gray-900 underline underline-offset-4"
                            >
                            Reset
                            </button>
                        </header>
                        <div className="border-t border-gray-200 p-4">
                            <div className="flex justify-between gap-4">
                            <label
                                htmlFor="FilterPriceFrom"
                                className="flex items-center gap-2"
                            >
                                <span className="text-sm text-gray-600">$</span>
                                <input
                                type="number"
                                id="FilterPriceFrom"
                                placeholder="From"
                                className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                />
                            </label>
                            <label
                                htmlFor="FilterPriceTo"
                                className="flex items-center gap-2"
                            >
                                <span className="text-sm text-gray-600">$</span>
                                <input
                                type="number"
                                id="FilterPriceTo"
                                placeholder="To"
                                className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                />
                            </label>
                            </div>
                        </div>
                        </div>
                    </div>
                    </details>
                </div>

                <div className="relative">
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                        <span className="text-sm font-medium"> Superficie </span>
                        <span className="transition group-open:-rotate-180">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4 mr-2"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                        </span>
                    </summary>
                    <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
                        <div className="w-96 rounded border border-gray-200 bg-white">
                        <header className="flex items-center justify-between p-4">
                            <span className="text-sm text-gray-700">
                            The highest price is $600
                            </span>
                            <button
                            type="button"
                            className="text-sm text-gray-900 underline underline-offset-4"
                            >
                            Reset
                            </button>
                        </header>
                        <div className="border-t border-gray-200 p-4">
                            <div className="flex justify-between gap-4">
                            <label
                                htmlFor="FilterPriceFrom"
                                className="flex items-center gap-2"
                            >
                                <span className="text-sm text-gray-600">$</span>
                                <input
                                type="number"
                                id="FilterPriceFrom"
                                placeholder="From"
                                className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                />
                            </label>
                            <label
                                htmlFor="FilterPriceTo"
                                className="flex items-center gap-2"
                            >
                                <span className="text-sm text-gray-600">$</span>
                                <input
                                type="number"
                                id="FilterPriceTo"
                                placeholder="To"
                                className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                />
                            </label>
                            </div>
                        </div>
                        </div>
                    </div>
                    </details>
                </div>
            </div>

            
                
            <div className="main2">
                {buscando ? <AjaxLoader></AjaxLoader>
                          : <ListaViviendas actualizarOrdenacion={ordenacion}
                                             actualizarTipoVivienda={tipovivienda}
                                             actualizarGenero={genero}
                                             actualizarStatus={status}
                                             listaViviendas={listaViviendas}>
                            </ListaViviendas>
                }
            </div>
            <CambioPagina manejarPage={manejarPage} page={page}></CambioPagina>
        </div>
    );
}

export default Viviendas;