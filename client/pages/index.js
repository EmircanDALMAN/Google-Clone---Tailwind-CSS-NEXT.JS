import Head from "next/head";
import Header from "../components/Home/Header";
import Logo from "../components/Logo";
import {MicrophoneIcon, SearchIcon} from "@heroicons/react/solid";
import Footer from "../components/Footer";
import React, {useRef} from "react";
import {useRouter} from "next/router";

export default function Home() {
   const searchInputRef = useRef(null);
   const router = useRouter();

   const search = (e) => {
      e.preventDefault();
      const term = searchInputRef.current.value;
      if (!term) return null;
      router.push(`/search?term=${term}`);
   }

  return (
   <div className={"flex flex-col items-center justify-center h-screen"}>
      <Head>
        <title>Google</title>
      </Head>
      <Header />
      <form className={"flex flex-col items-center mt-44 flex-grow mx-auto w-4/5"}>
         <Logo width={300} height={100} />
         <div className={"flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border px-5 " +
         " py-3 items-center border-gray-200 sm:max-w-xl lg:max-w-2xl "}>
            <SearchIcon className={"h-5 mr-3 text-gray-500"} />
            <input ref={searchInputRef} type="text" className={"focus:outline-none flex-grow"} />
            <MicrophoneIcon className={"h-5"} />
         </div>
         <div className={"flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 " +
         " sm:flex-row sm:space-x-4"}>
            <button onClick={search} className={"btn"}>Google Search</button>
            <button onClick={search} className={"btn"}>I'm Feeling Lucky</button>
         </div>
      </form>
      <Footer />
   </div>
  )
}
