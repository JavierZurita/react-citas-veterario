export default function Paciente( {paciente, setPaciente, eliminarPaciente} ){

    const handleEliminar = () => {
        console.log("Eliminando...");
        const respuesta = confirm("Deseas eliminar este paciente?");
        if(respuesta){
            eliminarPaciente(paciente.id);
        }
    }

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Mascota: {''}
                <span className="font-normal normal-case">{paciente.nombre} </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">{paciente.propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">{paciente.email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: {''}
                <span className="font-normal normal-case">{paciente.fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Síntoma: {''}
                <span className="font-normal normal-case">{paciente.sintomas}</span>
            </p>
            <div className="flex justify-between">
                <button className="py-2 px-10 bg-indigo-600 text-white text-bold rounded-lg hover:bg-indigo-700 hover:cursor-pointer"
                    onClick={ () => setPaciente(paciente)}
                >Editar</button>
                <button className="py-2 px-10 bg-red-600 text-white text-bold rounded-lg hover:bg-red-700 hover:cursor-pointer"
                    onClick={ handleEliminar }
                >Eliminar</button>
            </div>
        </div>
    )
}