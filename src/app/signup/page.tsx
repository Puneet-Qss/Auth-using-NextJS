"use client";

// Aevery comp inside api is backend : server component:
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
// router is changed in NextJS
import axios from "axios";
import { toast } from "react-hot-toast";
import Header from "../Header";

export default function Signup() {

  const router =  useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled,  setButtonDisabled] = useState(false)
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
   try {
     setLoading(true)
    const response  = await axios.post("/api/users/signup", user) 
    console.log("Reponse Success", response.data);
    toast("Signup Succes");
   router.push("/login")
  } catch (error:any) {
    console.log("Signup Failed" , error.message); 
     toast.error(error.message)
    }
  };
  
  useEffect(() =>{
      if(user.email.length > 0 && user.password.length > 0  && user.username.length > 0  ){
        setButtonDisabled(false);
        console.log("Email length greater than zero");
      }else{
        setButtonDisabled(true);
      }
  },[user])


  return (
    <>
    <Header />
    <div className="flex flex-col items-center justify-center ">
      <h1>{loading ? "Processing" : "Signup"}</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
      className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none foucs:border-gray-600 text-black"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />
      <label htmlFor="email">email</label>
      <input
      className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none foucs:border-gray-600 text-black"
        type="text"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <label htmlFor="password">password</label>
      <input
      className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none foucs:border-gray-600 text-black" 
        type="text"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button onClick={onSignup} className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-gray-300">
        {buttonDisabled ? "No signup" : "Signup"}
      </button>
      <Link href="/login">Already have account?</Link>
    </div>
    </>
  );
}
