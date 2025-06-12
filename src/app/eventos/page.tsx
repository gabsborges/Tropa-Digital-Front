
'use client'

import AuthRoute from "../components/AuthRoute"
import Sidebar from "../components/Sidebar"
import { TabelaEventos } from "../components/TabelaEventos"


export default function EventosPage() {
  return (
    <AuthRoute>
      <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-[30px]">
        <div className="flex flex-col gap-[15px]">
          <p className="text-[16px]">Bem vindo de volta, <span className="font-[600]">Kaique Steck</span></p>
          <h2 className="text-2xl font-bold text-primary">Todos eventos</h2>
        </div>
        <TabelaEventos/>
      </main>
    </div>
    </AuthRoute>
  )
}