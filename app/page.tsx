"use client";
import { useEffect, useState } from "react";
import axios from "axios";

interface Fact {
  fact: string;
  length: number;
}

export default function Home() {
  const [factMsg, setFactMsg] = useState<Fact | null>(null);

  const fetchData = async () => {
    const response = await axios.get("https://catfact.ninja/fact");
    setFactMsg(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-[#eddcd9] gap-10 ">
      <div className=" text-center w-full h-1/3 px-8 md:px-24">
        <h1
          className={`
          ${factMsg?.length && factMsg.length < 300 ? `text-xl` : `text-lg`} ${
            factMsg?.length && factMsg.length < 300
              ? `md:text-5xl`
              : `md:text-3xl`
          } font-bold mb-8 text-[#264143]`}
        >
          {factMsg?.fact}
        </h1>
      </div>
      <button
        onClick={fetchData}
        className="px-6 py-3 bg-[#264143] text-white font-semibold rounded shadow hover:bg-[#3B5859] transition duration-300 ease-in-out"
      >
        Generate New Fact!
      </button>
    </div>
  );
}
