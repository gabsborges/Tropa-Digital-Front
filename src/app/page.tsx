'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('auth') === 'true'
    router.push(isAuthenticated ? '/dashboard' : '/login')
  }, [router])

  return null
}
