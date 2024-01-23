import Header from "../components/Header"
const Home2=() =>{
  return (
  
    <div
      id="sidebar"
      className="bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
      x-show="sidenav"
    >
      
      <div className="space-y-6 md:space-y-10 mt-10"> 
        <h1 className="font-bold text-4xl text-center md:hidden">
          D<span className="text-teal-600">.</span>
        </h1>
        <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
          Dashboard<span className="text-teal-600">.</span>
        </h1>
        <div id="profile" className="space-y-3">
          <img
            src="https://www.shutterstock.com/image-vector/collaborative-concept-design-260nw-363777467.jpg"
            alt="Avatar user"
            className="w-10 md:w-16 rounded-full mx-auto"
          />
          <div>
            <h2
              className="font-medium text-xs md:text-sm text-center text-teal-500"
            >
              Administrador
            </h2>
            <p className="text-xs text-gray-500 text-center">Administrator</p>
          </div>
        </div>
        <div id="menu" className="flex flex-col space-y-2">
          <a
            href="http://localhost:5173/clientes"
            className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
          >
            <svg
              className="w-6 h-6 fill-current inline-block"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
              ></path>
            </svg>
            <span className="">Clientes</span>
          </a>
        </div>
      </div>
    </div>

 )
}

export default Home2
