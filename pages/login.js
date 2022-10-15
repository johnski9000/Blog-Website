import React from 'react'
import Layout from '../components/Layout'

function Login() {
  return (
    <Layout>
        <div className='login-page'>
            <div className="card">
            <form>
                <input type="text" placeholder='username'/>
                <input type="text" placeholder='password'/>
                <button>Submit</button>
            </form>
            </div>
        </div>
    </Layout>
  )
}

export default Login