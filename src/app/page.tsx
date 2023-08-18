import Link from "next/link";
import React from "react";
import Image from "next/image";
import Header from "./Header";

function Page() {
  return (
    <>
      <div className="flex justify-center  font-semibold ">
      <Header />
       
      </div>
      <div className="flex  justify-center mt-10">
        <h3>Welcome to my app</h3>
      </div>
    </>
  );
}

export default Page;
