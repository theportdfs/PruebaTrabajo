import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Error from "../components/Error";
import UserService from "../components/UserService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [usuario, setusuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate()

  const login = async () => {
    const data = JSON.stringify({
      usuario: usuario ,
      password: password
    });
    const resp = await axios.post('http://localhost:3000/auth/login', JSON.parse(data))
    console.log(resp.data.status)
    UserService.login(data)
    .then(()=>{if(resp.data.status == 200){navigate("/home");}});
    
  };

  console.log(usuario)
  console.log(password)

  const limpiar = () => {
    setusuario("");
    setPassword("");
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
  
      return[usuario, password].includes("")
      ? (setError(true)) 
      : (setError(false), login(), limpiar()) //Si todo va bien permite esconder el mensaje y retornr la info 

    };

  return (        
    
    <div className="items-center justify-center text-align:auto mx-15  ">
      <br></br>
    <Header></Header>
       <h2 className="font-black text-3xl text-center">INGRESA</h2>
      <p className="text-blue-800 mt-5 text-center mb-15">
        <span className="text-blue-800 font-bold">COMIENZA A NAVEGAR!</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="margin:auto width:auto mx-10 text-align:right bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Error>
            <p>Todos los campos son obligatorios </p>
          </Error>
        )}

        <div>
          <label htmlFor="Usuario">usuario</label>
          <br></br>
          <input
          
            id="usuario"
            type="text"
            value={usuario}
            onChange={(e) => setusuario(e.target.value)}
            placeholder="Ingrese su usuario"
            className="border-2 w-full p-2 mt-2 placeholder-blue-400 rounded-md"
          />
        </div>
        <p></p>
        <div>
          <label htmlFor="contraseña"></label>
          <br></br>
          <input
            id="passwordHash"
            type="password"
            value={password }
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Escriba su contraseña"
            className="border-2 w-full p-2 mt-2 placeholder-blue-400 rounded-md"
          />
        </div>
        <br></br>
        <input
          type="submit"
          className="bg-green-800 w-full p-3 text-white hover:bg-green-700 cursos-pointer transition-all uppercase rounded mb-2"
          value="LOGUEARSE"
        />
        <br></br>
        <p></p>
        <input
          type="button"
          className="bg-sky-800 w-full p-3 text-white hover:bg-sky-700 cursor-pointer transition-all uppercase rounded mb-5"
          value="LIMPIAR CAMPOS"
          onClick={limpiar}
        />
        <p></p>
      </form>

    </div>
    
  );
};

export default Login;