"use client";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineSearch, AiFillCamera } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import { useRouter } from "next/navigation";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
const Main: React.FunctionComponent = () => {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const onSearchSubmit = (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();
    router.push(`https://www.google.com/search?q=${search}`);
  };

  const logo: string =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVNQRL8FmpO940HiJ0jRNSHkuZS-_DJzW5ieflmaAjlg&s";

  return (
    <div className="flex items-center flex-col mt-28">
      <Image src={logo} alt="google" height={100} width={270} />

      <form
        className="flex border mt-7 px-5 py-2 rounded-full w-2/3 items-center hover:shadow-md"
        onSubmit={(e) => onSearchSubmit(e)}
      >
        <AiOutlineSearch className="text-xl text-slate-400" />
        <input
          type="text"
          className="w-full focus:outline-none ml-4"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <BiMicrophone className="text-3xl text-slate-500 mr-2" />
        <AiFillCamera className="text-3xl text-slate-500 ml-2" />
      </form>

      <div className="mt-7 ">
        <button
          className="bg-slate-100 mr-3 py-2 px-4 text-sm rounded hover:border"
          onClick={(e) => {
            onSearchSubmit(e);
          }}
        >
          Google Search
        </button>
        <button
          className="bg-slate-100  py-2 px-4 text-sm rounded hover:border"
          onClick={() => {
            router.push(`https://www.google.com/doodles`);
          }}
        >
          I am Felling Lucky
        </button>
      </div>
    </div>
  );
};

export default Main;
