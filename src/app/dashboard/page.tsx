
'use client'

import AuthRoute from "../components/AuthRoute"
import Sidebar from "../components/Sidebar"

interface Evento {
  nome: string;
  totalEquipes: number;
  status: string;
  data: string;
}

const eventos: Evento[] = [
  { nome: "Torneio de Verão", totalEquipes: 16, status: "Em Andamento", data: "10/06/2025" },
  { nome: "Copa da Primavera", totalEquipes: 32, status: "Concluído", data: "05/04/2025" },
  { nome: "Liga Regional", totalEquipes: 24, status: "Ainda não iniciado", data: "20/07/2025" },
]


export default function DashboardPage() {
  return (
   <AuthRoute>
     <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-[30px]">
        <div className="flex flex-col gap-[15px]">
          <p className="text-[16px]">Bem vindo de volta, <span className="font-[600]">Kaique Steck</span></p>
          <h2 className="text-2xl font-bold text-primary">Dashboard</h2>
        </div>
        
      </main>
    </div>
   </AuthRoute>
  )
}