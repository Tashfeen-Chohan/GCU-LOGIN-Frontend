import React from "react";
import Gcu from "../assets/gcu.png";
import { BsPcDisplayHorizontal } from "react-icons/bs";
import {BiSolidEdit} from 'react-icons/bi'

const Home = ({login, setLogin}) => {
  const {name, rollno, email, phone, address, gender, major} = login
  
  
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="h-[100%] w-[90%] px-3 py-5 rounded-md shadow-lg md:w-[65%] md:mt-5">

        {/* HEADER */}
        <div className="flex justify-center items-center mb-3 md:hidden">
        <img src={Gcu} alt="" width={100} className="" />
        </div>
        <div className="flex items-center justify-around">
          <img src={Gcu} alt="" width={40} className="hidden md:inline-block md:w-20" />
          <h1 className="self-center font-bold text-center text-2xl text-[#b20d15] md:text-5xl">
            Student Portal
          </h1>
          <button onClick={() => setLogin({})} className="bg-[#b20d15] text-white font-bold rounded px-3 py-1">Logout</button>
        </div>

        {/* NAME */}
      <h2 className="font-bold text-center text-xl mt-6 md:text-3xl">{name}</h2>
        <p className="mb-2 mt-1 font-bold text-center md:text-xl">{rollno}</p>
        <hr className="bg-black h-[2px] "  />
        <div className="mt-6 flex items-center gap-3">
          <BsPcDisplayHorizontal className="text-[#b20d15]" />
          <h2 className="text-xl font-bold text-[#b20d15]">
            General Information
          </h2>
        </div>

        {/* TABLE */}

        <div className="flex flex-col mt-3">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm">
                  <tbody>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-slate-200 ">
                    <th scope="col" className="px-6 py-2">
                        Email:
                      </th>
                      <td className="whitespace-nowrap px-6 py-2">{email}</td>
                      <td className="whitespace-nowrap px-6 py-2"><BiSolidEdit className="text-[#b20d15] md:text-xl"/></td>
                    </tr>

                    <tr className="border-b transition duration-300 ease-in-out hover:bg-slate-200">
                    <th scope="col" className="px-6 py-2">
                        Phone:
                      </th>
                      <td className="whitespace-nowrap px-6 py-2">{phone}</td>
                      <td className="whitespace-nowrap px-6 py-2"><BiSolidEdit className="text-[#b20d15] md:text-xl"/></td>
                    </tr>

                    <tr className="border-b transition duration-300 ease-in-out hover:bg-slate-200">
                    <th scope="col" className="px-6 py-2">
                        Address:
                      </th>
                    <td className="whitespace-nowrap px-6 py-2">{address}</td>
                      <td className="whitespace-nowrap px-6 py-2"><BiSolidEdit className="text-[#b20d15] md:text-xl"/></td>
                    </tr>

                    <tr className="border-b transition duration-300 ease-in-out hover:bg-slate-200">
                    <th scope="col" className="px-6 py-2">
                        Gender:
                      </th>
                    <td className="whitespace-nowrap px-6 py-2">{gender}</td>
                    </tr>

                    <tr className="border-b transition duration-300 ease-in-out hover:bg-slate-200">
                    <th scope="col" className="px-6 py-2">
                        Major:
                      </th>
                      <td className="whitespace-nowrap px-6 py-2">{major}</td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Home;
