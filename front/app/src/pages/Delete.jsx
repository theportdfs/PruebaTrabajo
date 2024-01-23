import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserService from "../components/UserService";

const Delete = () => {
const { id } = useParams();
const [nombre, setNombre] = useState("");
const [edad, setEdad] = useState("");
const [profesion, setProfesion] = useState("");
const navigate = useNavigate();

  const getData = async () => {
    UserService.getById(id).then((resp) => {
        setNombre(resp.nombre);
        setEdad(resp.edad);
        setProfesion(resp.profesion);
    });
  };
  
const handleSubmit =(e) => {
    e.preventDefault(); //Evitar parpadeo
  };
  const handleSaveOnClick = async () => {
    const status = await UserService.delete(id)
    console.log(status)
    if(status == 200 || status  == 201){
      navigate("/clientes")
    console.log('sias')
    }else{
      console.log("ocurrio un error")
    }
  };
 const  handleretrocedeOnClick = () => {
    navigate("/clientes")
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mb:w-1/2 lg:w-2/5 mx-auto">
      <h2 className="font-black text-3xl text-center">Estás seguro?</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Deseas eliminar el Cliente? <span className="text-pink-600 font-bold"> </span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      > 
        <input
          onClick={handleretrocedeOnClick}
          type="submit"
          className="bg-green-600 w-full p-3 text-white hover:bg-green-700 cursor-pointer transition-all"
          value="Retroceder"
        />

        <input
          onClick={handleSaveOnClick}
          type="submit"
          className="bg-red-600 w-full p-3 text-white hover:bg-red-700 cursor-pointer transition-all"
          value="Eliminar el Cliente"
        />
      </form>
    </div>
  );
};

export default Delete;
