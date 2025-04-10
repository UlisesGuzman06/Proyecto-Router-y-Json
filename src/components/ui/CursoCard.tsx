import { useNavigate } from "react-router";

const CursoCard = () => {
  const navigate = useNavigate();
  const handleClickButton = () =>{
    navigate("/estudiantes")
  }
  return (
    <>
      <div className="w-60 h-60 border border-gray-200 flex flex-col m-10 shadow-[1px_1px_5px_rgba(0,0,0,0.3)]">
        <div className="text-xl font-bold py-2 w-[100%] text-center shadow-xl">
          <h1>Curso: LIQ</h1>
        </div>
        <div className="p-5">
          <p>Materia: {}</p>
          <p>Profesor: {}</p>
          <p>Ubicacion: {}</p>
        </div>
        <div className="flex w-full justify-center">
          <button className="text-center px-3 py-2 bg-[#1d226f] shadow-[1px_1px_5px_rgba(0,0,0,0.3)] cursor-pointer text-white" onClick={handleClickButton}>
            Estudiantes
          </button>
        </div>
      </div>
    </>
  );
};

export default CursoCard;
