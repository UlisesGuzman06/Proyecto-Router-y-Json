import { useNavigate } from "react-router";

const EstudiantesScreen = () => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/cursos");
  };
  return (
    <>
      <div className="">
        <div className=" flex justify-center w-[100%] h-[3rem] border-b-1  text-center items-center">
          <h1 className="text-2xl font-bold">ESTUDIANTES</h1>
          <button
            onClick={handleClickButton}
            className="text-center px-3 py-2 bg-[#1d226f] shadow-[1px_1px_5px_rgba(0,0,0,0.3)] cursor-pointer text-white absolute left-3 "
          >
           Volver A Cursos
          </button>
        </div>

        <div className="bg-white shadow-md rounded-xl p-4 w-full max-w-md mx-auto mb-4 border border-gray-200 m-5">
          <h2 className="text-xl font-semibold text-center mb-4 text-gray-700">
            Estudiante
          </h2>
          <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
            <div className="font-medium">ID:</div>

            <div className="font-medium">Nombre:</div>

            <div className="font-medium">Apellido:</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EstudiantesScreen;
