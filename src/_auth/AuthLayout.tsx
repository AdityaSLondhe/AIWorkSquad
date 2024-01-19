import { Navigate } from "react-router-dom"
import LoginForm from "./forms/LoginForm";
import { useState } from "react";


const AuthLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <>
      {isAuthenticated?(
        <Navigate to="/home"/>
      ):(
        <div className="flex flex-col items-center justify-center w-full h-full bg-gray-700 p-10">
          <div className="flex justify-start w-full sticky sm:justify-center">
            <img 
              src="/assets/images/Logo.png" 
              alt="logo"
              width={222}
              height={49}
              className="sm:w-[150px] sm:h[25px]"
             />
          </div>
          <section className="flex flex-1 justify-center w-fit sm:w-3/5 items-center flex-col py-10 md:w-[626px]">
            <LoginForm setIsAuthenticated={setIsAuthenticated}/>
          </section>
          <footer className=" text-center text-white sm:text-xs">
            <p> 2024 AiworkSquad.</p>
          </footer>
        </div>
       )} 
    </>
  )
}

export default AuthLayout