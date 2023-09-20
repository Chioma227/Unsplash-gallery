import React from "react";
import Form from "./Form";

const Login = () => {
  return (
    <section className="bg-blue-900 relative flex items-center justify-center">
      <h2 className="absolute lg:text-[10rem] md:text-[8rem] text-[1rem] text-gray-900 opacity-50">
        DRAGDROP
      </h2>
      <div className=" bg-hero h-[100vh] w-[100%] bg-cover bg-center bg-no-repeat md:backdrop-blur-md backdrop-blur-[6px]">
        <Form />
      </div>
    </section>
  );
};

export default Login;
