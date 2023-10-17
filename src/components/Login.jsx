import React, { useState } from "react";
import Gcu from "../assets/gcu.png";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { PiStudentFill } from "react-icons/pi";
import axios from "axios";

const Login = ({setLogin}) => {
  const [student, setStudent] = useState({
    rollno: "",
    password: "",
  });

  const [error, setError] = useState();
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value,
    });
  }

  // HANDLE LOGIN
  function handleLogin(e) {
    e.preventDefault();
    const { rollno, password } = student;
    if (rollno && password) {
      axios
        .post("https://gcu-login-backend.vercel.app/api/login", student)
        .then((res) => {
          console.log(res);
          setLogin(res.data.student)
          navigate("/");
        })
        .catch((err) => setError(err.response.data.message));
    } else {
      setError("All fields are required")
    }
  }

  return (
    <div className="min-h-screen  flex justify-center items-center">
      <div className="h-[100%] w-[90%] px-3 py-5 rounded-md shadow-lg md:w-[60%] md:mt-5">
        <h1 className="font-bold text-[#b20d15] text-center text-3xl mb-5 md:text-5xl">
          Sign in
        </h1>

        <div className="flex flex-col mt-6 md:flex-row md:justify-center md:items-center">
          {/* IMG BOX */}
          <div className="flex justify-center items-center md:flex-1 md:mt-[-25px]">
            <img
              src={Gcu}
              alt="Login Image"
              width={100}
              className="md:w-[55%]"
            />
            {/* <img src={Uni} alt="Register Image" width={60} className="md:w-[75%]" /> */}
          </div>

          {/* FORM BOX */}
          <div className="mt-10 md:flex-1">
            <form
              onSubmit={handleLogin}
              action=""
              className="flex flex-col justify-center items-center "
            >
              {/* ROLL NO FIELD */}
              <div className="mb-4 flex justify-center items-center gap-3 w-full">
                <label className="mt-2 text-xl md:text-2xl" htmlFor="rollno">
                  <PiStudentFill />
                </label>
                <input
                  type="text"
                  id="rollno"
                  name="rollno"
                  value={student.rollno}
                  onChange={handleChange}
                  placeholder="Your Roll Number"
                  min={12}
                  // onInvalid={"Only Pakistan mobile numbers are allowed"}
                  className="border-b outline-none focus:border-black w-[75%]"
                />
              </div>

              {/* PASSWORD FIELD */}
              <div className="mb-4 flex justify-center items-center gap-3 w-full">
                <label className="mt-2 md:text-xl" htmlFor="password">
                  <FaLock />
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={student.password}
                  onChange={handleChange}
                  placeholder="Your Password"
                  min={5}
                  // onInvalid={"Password length must be 5 characters long"}
                  className="border-b outline-none focus:border-black w-[75%]"
                />
              </div>

              {/* ERROR DIV */}
              <div className={error? "block text-red-600 text-sm font-bold w-[84%]": "hidden"}>
                {error}
              </div>

              {/* SIGN IN BUTTON */}
              <button
                type="submit"
                className="mt-3 bg-[#b20d15] hover:bg-[#86141a] font-bold text-white w-[85%] rounded py-1"
              >
                Sign in
              </button>

              <div className="my-2">
                {/* <hr className="bg-black h-[2px] col-span" /> */}
                <p className="text-[#b20d15] grid-cols-2">OR</p>
                {/* <hr className="bg-black h-[2px] grid-cols-5" /> */}
              </div>

              {/* SIGN UP */}
              <div className="flex items-center justify-between gap-5">
                <span>Don't have an account?</span>
                <button className="bg-[#b20d15] hover:bg-[#86141a] text-white px-3 py-1 rounded">
                  <Link to={"/register"}>Sign up</Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
