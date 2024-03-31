import React, { useState } from "react";
import Uni from "../assets/uni.jpg";
import { FaLock, FaAddressCard, FaMale, FaPhone, FaUser } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { AiFillMail } from "react-icons/ai";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { BarLoader } from "react-spinners";

const Register = () => {
  const [student, setStudent] = useState({
    name: "",
    rollno: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    gender: "",
    major: "",
  });

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // HANDLE CHANGE FUNCTION
  function handleChange(e) {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value,
    });
  }

  // HANDLE REGISTER FUNCTION
  async function handleRegister(e) {
    e.preventDefault();
    const { name, rollno, email, password, phone, address, gender, major } =
      student;
    try {
      setLoading(true);
      if (
        name &&
        rollno &&
        email &&
        password &&
        phone &&
        address &&
        gender &&
        major
      ) {
        const res = await axios.post(
          "https://gcu-login-backend.vercel.app/api/register",
          student
        );
        toast.success("Sign up successfully!");
        navigate("/login");
      } else {
        setError("All fields are required");
      }
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="h-[100%] w-[90%] px-3 py-5 rounded-md shadow-lg md:w-[65%] md:mt-5">
        <h1 className="font-bold text-[#b20d15] text-center text-3xl md:text-5xl">
          Sign up
        </h1>

        <div className="flex flex-col mt-4  md:flex-row md:justify-center md:items-center">
          {/* IMG BOX */}
          <div className="flex justify-center items-center md:flex-1 md:mt-[-25px]">
            {/* <img src={Gcu} alt="Register Image" width={60} className="md:w-[75%]" /> */}
            <img
              src={Uni}
              alt="Register Image"
              width={100}
              className="md:w-[90%]"
            />
          </div>

          {/* FORM BOX */}
          <div className="mt-10 md:flex-1">
            <form
              onSubmit={handleRegister}
              className="flex flex-col justify-center items-center "
            >
              {/* NAME FIELD */}
              <div className="flex justify-center items-center gap-3 w-full mb-4">
                <label className="mt-2 md:text-xl" htmlFor="name">
                  <FaUser />
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={student.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  min={3}
                  // onInvalid={"Name length must be 3 characters long"}
                  className="md:text-md border-b outline-none focus:border-black w-[75%]"
                />
              </div>

              {/* ROLL NO FIELD */}
              <div className="mb-4 flex justify-center items-center gap-3 w-full">
                <label className="mt-2 md:text-2xl" htmlFor="rollno">
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

              {/* EMAIL FIELD */}
              <div className="mb-4 flex justify-center items-center gap-3 w-full">
                <label className="mt-2 md:text-xl" htmlFor="email">
                  <AiFillMail />
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={student.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  // onInvalid={"Email must be a valid email"}
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

              {/* PHONE FIELD */}
              <div className="mb-4 flex justify-center items-center gap-3 w-full">
                <label className="mt-2 md:text-xl" htmlFor="phone">
                  <FaPhone />
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={student.phone}
                  onChange={handleChange}
                  placeholder="Your Mobile Number"
                  min={11}
                  // onInvalid={"Only Pakistan mobile numbers are allowed"}
                  className="border-b outline-none focus:border-black w-[75%]"
                />
              </div>

              {/* ADDRESS FIELD */}
              <div className="mb-4 flex justify-center items-center gap-3 w-full">
                <label className="mt-2 md:text-xl" htmlFor="address">
                  <FaAddressCard />
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={student.address}
                  onChange={handleChange}
                  placeholder="Your Address"
                  className="border-b outline-none focus:border-black w-[75%]"
                />
              </div>

              {/* GENDER FIELD */}
              <div className="mb-4 flex justify-center  items-center gap-3 w-full">
                <label className="mt-2 md:text-2xl">
                  <FaMale />
                </label>

                <div className="flex  items-center gap-10 w-[75%]">
                  <div className="flex justify-center items-center gap-4">
                    <label htmlFor="male">Male:</label>
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="Male"
                      onChange={handleChange}
                      className="border-b outline-none focus:border-black w-[75%]"
                    />
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <label htmlFor="female">Female:</label>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="Female"
                      onChange={handleChange}
                      className="border-b outline-none focus:border-black w-[75%]"
                    />
                  </div>
                </div>
              </div>

              {/* MAJOR FIELD */}
              <div className="mb-4 flex justify-center gap-4 md:justify-start md:gap-5 items-center  w-full md:w-[80%]">
                <label className="font-bold text-xl" htmlFor="major">
                  Major:
                </label>
                <select name="major" id="major" onChange={handleChange}>
                  Choose a major
                  <option value="">Choose a major</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Software Engineering">
                    Software Engineering
                  </option>
                  <option value="Information Technology">
                    Information Technology
                  </option>
                </select>
              </div>

              {/* ERROR DIV */}
              <div
                className={
                  error
                    ? "block text-red-600 text-sm font-bold w-[84%]"
                    : "hidden"
                }
              >
                {error}
              </div>

              {/* SIGN UP BUTTON */}
              <button
                type="submit"
                className="mt-3 bg-[#b20d15] hover:bg-[#86141a] font-bold text-white w-[85%] rounded py-1"
              >
                {loading ? (
                  <BarLoader color="white" className="my-2.5 mx-auto" />
                ) : (
                  "Sign up"
                )}
              </button>

              <div className="flex justify-center items-center gap-5 mt-3">
                <hr className="w-[50%] bg-black" />
                <p className="text-[#b20d15]">OR</p>
                <hr className="w-[50%]" />
              </div>

              {/* SIGN IN */}
              <div className="flex items-center justify-between gap-5">
                <span>Already have an account?</span>
                <button
                  type="button"
                  className="bg-[#b20d15] hover:bg-[#86141a] text-white px-3 py-1 rounded"
                >
                  <Link to={"/login"}>Sign in</Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
