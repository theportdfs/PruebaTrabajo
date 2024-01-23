import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../components/Error";
import UserService from "../components/UserService";

const Create = () => {
  const [nombre, setnNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [profesion, setProfesion] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const create = async () => {
    const data = JSON.stringify({
      id: 0,
      nombre : nombre,
      edad: edad,
      profesion: profesion,
    });

    const status = await UserService.create(data)
        if(status != [400,404,401,500]){
          navigate("/clientes")
        }else{
          console.log("ocurrio un error")
        }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //Evitar parpadeo
  
      return[nombre,edad,profesion].includes("")
      ? (setError(true)) 
      : (setError(false), create()) //Si todo va bien permite esconder el mensaje y retornr la info 
    };

  return (
    <div className="bg-white py-4 md:py-7 px-4 md:px-8 w-3/5 mx-auto">
      <h1 className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800 mb-1 text-center">
        Crear Usuario
      </h1>
      <p className="focus:outline-none text-base leading-normal text-gray-500 mb-6 text-center">
        Datos
      </p>
      <form onSubmit={handleSubmit}>
        {error && (
          <Error>
            <p className="font-bold text-yellow-300">Campos vacios</p>
          </Error>
        )}
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          <div>
            <label
              htmlFor="nombre"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Nombre
            </label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setnNombre(e.target.value)}
              id="nombre"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:outline-none focus:ring-offset-2 focus:ring-indigo-600 block w-full p-2.5"
              placeholder="Ingresa el nombre"
            />
          </div>
          <div>
            <label
              htmlFor="edad"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Edad
            </label>
            <input
              type="number"
              id="edad"
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:outline-none focus:ring-offset-2 focus:ring-indigo-600 block w-full p-2.5"
              placeholder="Ingresa la edad que tienes"
            />
          </div>
          <div>
            <label
              htmlFor="profesion"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Profesion
            </label>
            <input
              type="text"
              id="profesion"
              value={profesion}
              onChange={(e) => setProfesion(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:outline-none focus:ring-offset-2 focus:ring-indigo-600 block w-full p-2.5"
              placeholder="Ingresa la profesion a la que se dedica"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <button
            type="submit"
            className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
          >
            <p className="text-sm font-medium leading-none text-white">
              Crear Cliente
            </p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
