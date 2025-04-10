
interface Props{
  id: number;
  nombre: string;
  edad: number;
}
const EstudianteCard = ({ id, nombre, edad }: Props) => {
  
  return (
    <>
      <div className="bg-white shadow-md rounded-xl p-4 w-full max-w-md mx-auto mb-4 border border-gray-200 m-5">
          
          <div className="flex gap-5 text-sm text-gray-600 font-medium justify-around ">
            <div>ID: {id}</div>
            <div>Nombre: {nombre}</div>
            <div>Edad: {edad}</div>
          </div>
        </div>
    </>
  )
}

export default EstudianteCard
