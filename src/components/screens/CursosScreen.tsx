import CursoCard from "../ui/CursoCard"

const CursosScreen = () => {
  return (
    <>
      <div className="">
        <div className=" flex justify-center w-[100%] h-[3rem] border-b-1 text-2xl font-bold text-center items-center">
          <h1>CURSOS</h1>
        </div>
        <div className="grid grid-cols-4 ">
          <CursoCard/>
          <CursoCard/>
          <CursoCard/>
          <CursoCard/>
        </div>
      </div>
    </>
  )
}

export default CursosScreen
