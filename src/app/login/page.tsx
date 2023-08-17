"use client";

// Aevery comp inside api is backend : server component:
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
// router is changed in NextJS
import axios from "axios";
import { toast } from "react-hot-toast/headless";

export default function Login() {
  const router =  useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
      });

      const [butonDisabled , setButtonDisabled] = useState(false)
      const [loading , setLoading] = useState(false)

  const onLogin = async () => {
     try {
        
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
     console.log("Login Success", response.data);
  toast.success("Login Success!");
  router.push('/profile')
     } catch (error) {
        toast.error("Error in Login")
     } finally{
      setLoading(false);
     }

  };

  useEffect(()=>{
      if(user.email.length >0  && user.password.length>0){
        setButtonDisabled(false)
      }else{
        setButtonDisabled(true)
      }
  },[user])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <h1>{loading ? "Processing" : "Login"}</h1>
      <hr />
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
      <button onClick={onLogin} className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-gray-300">Login here</button>
      <Link href="/signup">SignUp Here</Link>
    </div>
  );
}
