import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Layout from '../components/Layout'

function AccountPage() {
    const { data: session, status } = useSession()

    const router = useRouter()
    useEffect(() => {
      if (!session) {
        router.push("/login")
      }
    }, [session, router])

    if (!session) {
        return (
            <Layout>
                <div>..loading</div>
            </Layout>
        )
    }
  return (
    <Layout>
            <div>Hello {session.user.name}!</div>
    </Layout>
  )
}

export default AccountPage