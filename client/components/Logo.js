import React from 'react';
import Image from "next/image";
import {useRouter} from "next/router";

const Logo = ({width, height}) => {
   const router = useRouter();

   return (
      <Image
         onClick={()=>router.push("/")}
         className={"object-contain cursor-pointer"}
         src={"https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"}
         height={height}
         width={width}
      />
   )
}

export default Logo;
