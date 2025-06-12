import React from "react";
import GreenLightIcon from "./GreenLightIcon";
import DotsIcon from "./DotsIcon";

interface Evento {
  nome: string;
  totalEquipes: number;
  status: string;
  data: string;
}

const eventos: Evento[] = [
  { nome: "Clube do Laço Coração Pantaneiro", totalEquipes: 10, status: "Ativo", data: "09 a 11 de Junho" },
  { nome: "Clube do Laço Coração Pantaneiro", totalEquipes: 10, status: "Ativo", data: "09 a 11 de Junho" },
  { nome: "Clube do Laço Coração Pantaneiro", totalEquipes: 10, status: "Ativo", data: "09 a 11 de Junho" },
]

export function TabelaEventos() {
  return (
    <div className="bg-white p-[20px]">
        <div>

        </div>
        <table className="w-full border-none">
      <thead>
        <tr className="text-primary-hover">
          <th className="p-[12px] text-left">Nome do evento</th>
          <th className="p-[12px] text-center">Total de equipes</th>
          <th className="p-[12px] text-center">Status</th>
          <th className="p-[12px] text-center">Data</th>
          <th className="p-[12px] text-center">Opções</th>
        </tr>
      </thead>
      <tbody>
        {eventos.map((evento, idx) => (
          <tr key={idx}>
            <td className="p-[12px]">{evento.nome}</td>
            <td className="p-[12px] text-center">{evento.totalEquipes}</td>
            <td className="p-[12px] text-center"><GreenLightIcon/>  {evento.status}</td>
            <td className="p-[12px] text-center">{evento.data}</td>
            <td className="p-[12px] text-center"><div className="cursor-pointer"><DotsIcon/></div></td>
          </tr>)
        )}
      </tbody>
    </table>
    <div>

    </div>
    </div>
  )
}
