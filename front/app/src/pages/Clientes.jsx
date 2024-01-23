import React, { useState, useEffect } from "react";
import UserService from "../components/UserService";
import { Link } from "react-router-dom";
import Header from "../components/Header";
const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
   await UserService.getAll().then((resp) => {
      setClientes(resp.body);
    });
  };

  const searcher = (e) => {
    setSearch(e.target.value);
  }; 
  let results = !search
    ? clientes
    : clientes.filter((dato) =>
        dato.nombre.toLowerCase().includes(search.toLocaleLowerCase())
      );

  useEffect(() => {
    getData();
  }, []);
 
  return (
    <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
      <br></br>
      <Header></Header>
      <h1 className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800 mb-6 text-center">
        Lista de Clientes
      </h1>
      <div className="flex items-end justify-between flex-wrap">
      <Link
          to={{ pathname: "/home" }}
          className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-green-700 hover:bg-green-600 focus:outline-none rounded"
        >
          <p className="text-sm font-medium leading-none text-white">
            Retroceder
          </p>
        </Link>
        <div className="flex items-center">
          <div>
            <label
              htmlFor="search"
              className="block mb-3 mx-10 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Buscador
            </label>
            <input
              type="text"
              id="search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:outline-none focus:ring-offset-2 focus:ring-indigo-600 block w-full p-2"
              placeholder="Buscar"
              onChange={searcher}
              value={search}
            />
          </div>
        </div>
        <Link
          to={{ pathname: "/clientes/create" }}
          className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
        >
          <p className="text-sm font-medium leading-none text-white">
            Crear Cliente
          </p>
        </Link>
      </div>
      <div className="mt-7 overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <tbody>
            {results.map((cliente) => (
              <tr
                className="focus:outline-none h-16 border border-gray-100 rounded mb-3 odd:bg-white even:bg-gray-400"
                key={cliente.id}
              >
                <td>
                  <div className="flex items-center pl-5">
                    <p className="text-sm leading-none text-gray-600 ml-2">
                      {cliente.id}
                    </p>
                  </div>
                </td>
                <td>
                  <div className="flex items-center pl-5">
                    <p className="text-base font-medium leading-none text-gray-700 mr-2">
                      {cliente.nombre}
                    </p>
                  </div>
                </td>
                <td>
                  <div className="flex items-center pl-5">
                    <p className="text-base font-medium leading-none text-gray-700 mr-2">
                      {cliente.edad}
                    </p>
                  </div>
                </td>
                <td className="pl-5">
                  <div className="flex items-center">
                    <p className="text-sm leading-none text-gray-600 ml-2">
                      {cliente.profesion}
                    </p>
                  </div>
                </td>
                <td className="px-5">
                  <div className="flex items-end justify-end">
                    <Link
                      to={{ pathname: `delete/${cliente.id}` }}
                      className="focus:ring-2 focus:ring-offset-2 focus:ring-red-400 inline-flex items-start justify-start py-3 px-3 mr-2 bg-red-500 hover:bg-red-400 focus:outline-none rounded"
                    >
                      <p className="text-sm font-medium leading-none text-white">
                        Eliminar
                      </p>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Clientes;
