const BotonCrearUsuario = ({ handleOpenForm }) => {
  return (
    <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
      <button
        className="inline-block border-e px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative"
        onClick={handleOpenForm}
      >
        Crear Usuario
      </button>
    </span>
  );
};

export default BotonCrearUsuario;
