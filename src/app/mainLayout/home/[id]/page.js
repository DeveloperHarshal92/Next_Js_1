import React from "react";

const page = async ({params}) => { 
    const {id} = await params;
  return (
    <div>
      <h1>Welcome to the Next Js Common Page with Dynamic Id: {id}</h1>
    </div>
  );
};

export default page;
