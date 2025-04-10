import { useEffect, useState } from "react";
import CursoCard from "../ui/CursoCard";
import { getAllCursos } from "../http/api";
import { ICursos } from "../../types/ICursos";

const CursosScreen = () => {
  const [cursos, setCursos] = useState<ICursos[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCursos();
      if (data) setCursos(data);
    };

    fetchData();
  }, []);
  return (
    <div className="min-h-screen bg-[#dfe0eb]">
      <div className="flex justify-center w-full h-[3rem] text-2xl font-bold text-center items-center bg-white">
        <h1>CURSOS</h1>
      </div>
  
      <div className="grid grid-cols-4 gap-4 p-4">
        {cursos.map((curso) => (
          <CursoCard
            key={curso.id}
            id={curso.id}
            materia={curso.materia}
            profesor={curso.profesor}
            ubicacion={curso.ubicacion}
            estudiantes={curso.estudiantes}
          />
        ))}
      </div>
    </div>
  );
  
};

export default CursosScreen;
