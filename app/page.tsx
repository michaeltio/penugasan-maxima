"use client";
import { useEffect, useState } from "react";
import axios from "axios";

interface Fact {
  fact: string;
}

export default function Home() {
  const [factMsg, setFactMsg] = useState<Fact | null>(null);

  const fetchData = async () => {
    const response = await axios.get("https://catfact.ninja/fact");
    setFactMsg(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-20 bg-[#eddcd9]">
      <div className="max-w-xl text-center">
        <h1 className="text-2xl md:text-5xl font-bold mb-8 text-[#264143]">
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
