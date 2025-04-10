import { IEstudiantes } from "./IEstudiantes";

  export interface ICursos {
    id: number;
    materia: string;
    profesor: string;
    ubicacion: string;
    estudiantes: IEstudiantes[];
  }