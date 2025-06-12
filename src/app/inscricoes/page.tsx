
'use client'

import AuthRoute from "../components/AuthRoute"
import Sidebar from "../components/Sidebar"


export default function InscricoesPage() {
  return (
    <AuthRoute>
      <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-[30px]">
        <div className="flex flex-col gap-[15px]">
          <p className="text-[16px]">Bem vindo de volta, <span className="font-[600]">Kaique Steck</span></p>
          <h2 className="text-2xl font-bold text-primary">Inscrições</h2>
        </div>

      </main>
    </div>
    </AuthRoute>
  )
}