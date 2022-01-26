import React, { useState } from "react";
import { XIcon } from "@heroicons/react/solid";

function Register() {
  const [formData, setformData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [submitted, setsubmitted] = useState(false);
  const handleChange = (e) => {
    setformData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setsubmitted(true);
  };

  const handleClick = () => {
    setsubmitted(false);
  };

  return (
    <div
      className="w-full h-screen bg-no-repeat bg-cover bg-right  flex  items-center pt-20 justify-center"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
      }}
    >
      <div className=" relative md:w-1/2 w-full mx-3 overflow-hidden py-10 flex-col space-y-6 bg-gray-100 rounded-lg shadow-2xl shadow-gray-600 flex items-center justify-center px-4 ">
        {submitted ? (
          <h1 className="text-2xl text-yellow-600 font-mono">{`Hello ${formData.firstname} ${formData.lastname} !!`}</h1>
        ) : (
          ""
        )}
        {submitted ? (
          <XIcon
            className=" absolute h-4 w-4 z-50 right-0 top-0 mr-4 cursor-pointer"
            onClick={handleClick}
          />
        ) : (
          ""
        )}
        <h1 className="mt-4 self-start text-3xl font-extralight select-none">
          CREATE AN ACCOUNT
        </h1>

        {/* FORM */}

        <form action="" className="" onSubmit={handleSubmit}>
          <div className="flex space-x-4 justify-between items-center flex-grow w-full mb-4">
            <input
              type="text"
              placeholder="firstname"
              required="required"
              name="firstname"
              className="w-1/2 font-light outline-none border-1 border-gray-400 h-10 pl-3"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="lastname"
              required="required"
              name="lastname"
              onChange={handleChange}
              className=" w-1/2 font-light outline-none border-1 border-gray-400 h-10 pl-3"
            />
          </div>
          <div className="flex space-x-4 justify-between items-center flex-grow w-full mb-4">
            <input
              type="text"
              placeholder="username"
              required="required"
              name="username"
              onChange={handleChange}
              className="w-1/2 font-light outline-none border-1 border-gray-400 h-10 pl-3"
            />
            <input
              type="email"
              placeholder="email"
              required="required"
              name="email"
              onChange={handleChange}
              className="w-1/2 text-xs md:text-base font-light outline-none border-1 border-gray-400 h-10 pl-3"
            />
          </div>
          <div className="flex space-x-4 justify-between items-center flex-grow w-full mb-4">
            <input
              type="password"
              placeholder="password"
              required="required"
              name="password"
              onChange={handleChange}
              className="w-1/2 font-light outline-none border-1 border-gray-400 h-10 pl-3"
            />
            <input
              type="password"
              placeholder="confirm password"
              required="required"
              name="confirmPassword"
              onChange={handleChange}
              className="w-1/2 font-light outline-none border-1 border-gray-400 h-10 pl-3"
            />
          </div>
          <p className="text-sm text-start mb-4">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>{" "}
          </p>

          <button className="self-start outline-green-700 h-10 w-20 bg-teal-600 text-white hover:bg-teal-700 active:scale-90 transform transition duration-150 ease-in">
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
