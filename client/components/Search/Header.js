import React, {useRef} from 'react';
import Logo from "../Logo";
import {MicrophoneIcon, SearchIcon, XIcon} from "@heroicons/react/solid";
import {useRouter} from "next/router";
import Avatar from "../Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
   const searchInputRef = useRef();
   const router = useRouter();

   const search = (e) => {
      e.preventDefault();
      const term = searchInputRef.current.value;
      if (!term) return null;
      router.push(`/search?term=${term}`);
   }

   return (
      <header className={"sticky top-0 bg-white"}>
         <div className={"flex w-full p-6 items-center"}>
            <Logo width={120} height={40}/>
            <form
               className={"flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl px-6 items-center py-3 ml-10 mr-5"}>
               <input type="text" ref={searchInputRef} className={"flex-grow w-full focus:outline-none"}/>
               <XIcon
                  onClick={() => (searchInputRef.current.value = "")}
                  className={"h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"}/>
               <MicrophoneIcon className={"mr-3 icons border-l-2 pl-4 border-gray-300"} />
               <SearchIcon className={"icons"} />
               <button className={"hidden"} type={"submit"} onClick={search}>Search</button>
            </form>
            <Avatar className={"ml-auto"} />
         </div>
         <HeaderOptions />
      </header>
   )
}

export default Header;
