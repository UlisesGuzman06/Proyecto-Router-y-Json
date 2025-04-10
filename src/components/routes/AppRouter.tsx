import { Navigate, Route, Routes } from "react-router"
import EstudiantesScreen from "../screens/EstudiantesScreen"
import CursosScreen from "../screens/CursosScreen"

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/cursos"/>}/>
        <Route path="/cursos" element={<CursosScreen />} />
        <Route path="/estudiantes" element={<EstudiantesScreen/>}/>
      </Routes>
    </>
  )
}

export default AppRouter
