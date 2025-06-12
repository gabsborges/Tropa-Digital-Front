'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface AuthRouteProps {
  children: React.ReactNode
}

export default function AuthRoute({ children }: AuthRouteProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('auth') === 'true'

    if (!isAuthenticated) {
      router.push('/login')
    } else {
      setLoading(false)
    }
  }, [router])

  // Pode exibir um loader enquanto verifica
  if (loading) return 
  <>
  <div className='flex justify-center items-center'>
    <div className="p-4 text-center">Carregando...</div>
  </div>
  </>

  return <>{children}</>
}
