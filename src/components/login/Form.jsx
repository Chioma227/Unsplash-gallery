import React, { useState } from "react";
import clsx from "clsx";
import { auth } from "../../../firebase.config";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEye, faEyeSlash, } from "@fortawesome/free-regular-svg-icons";

const Form = () => {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const DefaultUserName = "user@example.com";
  const defaultPassword = "1Password";

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    // prevent default browser behaviour
    e.preventDefault();

    if (
      password === defaultPassword &&
      userName === DefaultUserName
    ) {
      navigate("/gallery");
    } else {
      alert("wrong username or password");
      setIsLoggedIn(true);
    }

    // if(userName && password){
      
    //   setIsLoggedIn(true)
    // }
    setUserName('')
    setPassword('')
  };
  return (
    <main>
      <form
        action=""
        method="post"
        onSubmit={onSubmit}
        className="flex items-center justify-center h-[100vh] flex-col"
      >
        <h2 className="sm:text-[35px] text-[28px] text-gray-300 uppercase font-semibold sm:mb-[3rem] mb-[2rem]">
          login
        </h2>
        <article className="sm:w-[300px] w-[250px]">
          <div className="relative">
            <input
              className={clsx(
                "bg-transparent border-l-8 border-gray-400 placeholder:text-gray-400",
                "rounded-md mb-[20px] border-2 indent-8 w-[100%] py-[7px] outline-none text-gray-400",
                "sm:placeholder:uppercase"
              )}
              required
              value={userName}
              type="text"
              placeholder="username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <div className="absolute top-[7px] left-[10px] text-gray-400">
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>
          <div className="relative">
            <input
              className={clsx(
                "bg-transparent border-l-8 border-gray-400 placeholder:text-gray-400",
                "rounded-md mb-[20px] border-2 indent-8 w-[100%] py-[7px] outline-none text-gray-400",
                "sm:placeholder:uppercase"
              )}
              required
              value={password}
              type={passwordVisibility ? "text" : "password"}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="absolute top-[7px] right-[10px] text-gray-400 cursor-pointer"
              onClick={() => setPasswordVisibility(!passwordVisibility)}
            >
              {passwordVisibility ? (
                <FontAwesomeIcon icon={faEyeSlash} />
              ) : (
                <FontAwesomeIcon icon={faEye} />
              )}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className={clsx(
                "w-full bg-gray-300 text-black font-medium rounded-md ",
                "py-2 hover:bg-gray-400 transition-all"
              )}
            >
              LOGIN
            </button>
          </div>
        </article>
      </form>
    </main>
  );
};

export default Form;
