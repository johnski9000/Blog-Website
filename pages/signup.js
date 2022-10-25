import Link from "next/link";
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";
import {  signIn, useSession } from "next-auth/react"
import { useRouter } from "next/router";
import axios from 'axios';



function SignUp() {

  const { data: session, status } = useSession()
  const router = useRouter()
  console.log(session)

  useEffect(() => {
    if (session) {
          router.push("/")
    }
  }, [session, router])



  const { register, handleSubmit,   formState: { errors },
} = useForm();

  const onSubmit =  async ({name, email, password}) => {
    try {
      await axios.post('/api/auth/register',{name, email, password})
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password
      })
      if (result.error) {
        console.log(error)
      }
    } 
    catch (error) {
      console.log(error)
    }

  };

  return (
    <Layout>
      <div className="login-page">
        <div className="card">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <div className="mb-12">
              <h1 className="text-2xl">Login</h1>
            </div> */}
            <div className="mb-4 flex flex-col ">
            <label className="text-white">Name:</label>
              <input id="name" type="text" className="p-2 login-input" {...register("name")}/>
            </div>
            <div className="mb-4 flex flex-col ">
            <label className="text-white">Email:</label>
              <input id="email" type="text" className="p-2 login-input" {...register("email")}/>
            </div>
            <div className="mb-8 flex flex-col">
            <label className="text-white">Password:</label>
              <input id="password" type="password"  className="p-2 login-input" {...register("password")}/>
            </div>
            <button className="mb-4">Register</button>
            <p className=" w-5/6 text-center">
              Already have an account?&nbsp;
              <Link href="/login">
                <a className="underline">Click Here</a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default SignUp
