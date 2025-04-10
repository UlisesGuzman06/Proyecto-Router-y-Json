import { useNavigate } from "react-router";
import { IEstudiantes } from "../../types/IEstudiantes";

interface Props {
  id: number;
  materia: string;
  profesor: string;
  ubicacion: string;
  estudiantes: IEstudiantes[];
}
const CursoCard = ({ materia, profesor, ubicacion,id}: Props) => {
  
  const navigate = useNavigate();
  const handleClickButton = () =>{
    navigate(`/estudiantes/${id}` )
  }
  return (
    <>
      <div className="w-60 h-60 border border-gray-200 flex flex-col m-10 shadow-[1px_1px_5px_rgba(0,0,0,0.3)] bg-white">
        <div className="text-xl font-bold py-2 w-[100%] text-center shadow-xl">
          <h1>Curso: {id}</h1>
        </div>
        <div className="p-5">
          <p>Materia: {materia}</p>
          <p>Profesor: {profesor}</p>
          <p>Ubicacion: {ubicacion}</p>
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
