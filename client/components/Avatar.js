import React from 'react';

const Avatar = ({url, className}) => (
   <img
      className={`h-10 rounded-full cursor-pointer transition duration-150 transform 
       hover:scale-110 ${className}`}
      src={"https://avatars.githubusercontent.com/u/75789956?v=4"} alt={"Profile Picture"} loading={"lazy"}/>
)

export default Avatar;
