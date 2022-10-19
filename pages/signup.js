import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'
import { useForm } from "react-hook-form";

function SignUp() {

    const { register, handleSubmit } = useForm();

  return (
    <Layout>
      <div className="login-page">
        <div className="card">
          <form onSubmit={handleSubmit()}>
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