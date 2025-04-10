import { useNavigate, useParams } from "react-router";
import EstudianteCard from "../ui/EstudianteCard";
import { IEstudiantes } from "../../types/IEstudiantes";
import { useEffect, useState } from "react";
import { getCursoById } from "../http/api";

const EstudiantesScreen = () => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/cursos");
  };

  const { cursoId } = useParams();
  const [estudiantes, setEstudiantes] = useState<IEstudiantes[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCursoById(Number(cursoId));
      console.log("Curso recibido:", data);
      if (data?.estudiantes) setEstudiantes(data.estudiantes);
    };

    fetchData();
  }, [cursoId]);
  return (
    <div className="bg-[#b6b8d1] min-h-screen">
      <div className="flex justify-center w-full h-[3rem] text-center items-center bg-white relative">
        <h1 className="text-2xl font-bold">ESTUDIANTES</h1>
        <button
          onClick={handleClickButton}
          className="text-center px-3 py-2 bg-[#1d226f] shadow-[1px_1px_5px_rgba(0,0,0,0.3)] cursor-pointer text-white absolute left-3"
        >
          Volver A Cursos
        </button>
      </div>
  
      <div className="grid grid-cols-2 mx-3 gap-3 mt-4">
        {estudiantes.map((estudiante) => (
          <EstudianteCard
            key={estudiante.id}
            id={estudiante.id}
            nombre={estudiante.nombre}
            edad={estudiante.edad}
          />
        ))}
      </div>
    </div>
  );
  
};

export default EstudiantesScreen;
