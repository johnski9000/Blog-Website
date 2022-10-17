import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react"

function Login() {

  const { register, handleSubmit } = useForm();
  const onSubmit =  async ({email, password}) => {
    // console.log(email, password)
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email, 
        password,
      })
      if (result.error) {
        alert(result.error)
      }
    } catch (error) {
      alert(result.error)
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
            <label className="text-white">Email:</label>
              <input id="username" type="text" className="p-2 login-input" {...register("email")}/>
            </div>
            <div className="mb-8 flex flex-col">
            <label className="text-white">Password:</label>
              <input id="password" type="text"  className="p-2 login-input" {...register("password")}/>
            </div>
            <button className="mb-4">Login</button>
            <p className=" w-5/6 text-center">
              No account? Sign up&nbsp;
              <Link href="">
                <a className="underline">here</a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
