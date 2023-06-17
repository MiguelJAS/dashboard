import Navbar from "../componentes/NavBar";
import ListaPropiedades from "../componentes/ListaPropiedades";
import useAllPropiedades from "../hooks/useAllPropiedades";
const Propiedades = () => {
  const { listaPropiedades, buscando } = useAllPropiedades();
  return (
    <>
      <>
        <div className="flex columns-2">
          <Navbar />
          <div className="md:container md:mx-auto">
            <ListaPropiedades listaPropiedades={listaPropiedades} />
          </div>
        </div>
      </>
    </>
  );
};
export default Propiedades;
