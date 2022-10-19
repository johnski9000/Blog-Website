import Link from "next/link";
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";
import {  signIn, useSession } from "next-auth/react"
import { useRouter } from "next/router";


function SignUp() {
//   const { data: session, status } = useSession()
//   const router = useRouter()
//   useEffect(() => {
//     if (session) {
//       console.log("logged in")
//       router.push("/")
//     }
//   }, [router, session])
  

  const { register, handleSubmit,   formState: { errors },
} = useForm();

  const onSubmit =  async ({email, password}) => {
    // console.log(email, password)
    
  };

  return (
    <Layout>
      <div className="login-page">
        <div className="card" style={{height: 460}}>
          <form onSubmit={handleSubmit(onSubmit)} style={{height: 450}}>
            {/* <div className="mb-12">
              <h1 className="text-2xl">Login</h1>
            </div> */}
            <div className="mb-4 flex flex-col ">
            <label className="text-white">Name:</label>
              <input id="username" type="text" className="p-2 login-input" {...register("name")}/>
            </div>
            <div className="mb-4 flex flex-col ">
            <label className="text-white">Email:</label>
              <input id="username" type="text" className="p-2 login-input" {...register("email")}/>
            </div>
            <div className="mb-8 flex flex-col">
            <label className="text-white">Password:</label>
              <input id="password" type="password"  className="p-2 login-input" {...register("password")}/>
            </div>
            <button className="mb-4">Reigster</button>
            <p className=" w-5/6 text-center">
              Already have an account?&nbsp;
              <Link href="/login">
                <a className="underline">Click here!</a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default SignUp;
