'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import DashboardIcon from '../components/DashboardIcon'
import EventosIcon from '../components/EventosIcon'
import EquipesIcon from '../components/EquipesIcon'
import InscricoesIcon from '../components/InscricoesIcon'
import { useRouter } from 'next/navigation'
import SairIcon from './SairIcon'
import PerfilIcon from './PerfilIcon'
import Logo from './Logo'

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const menuItems = [
    { label: 'Dashboard', href: '/dashboard', icon: DashboardIcon },
    { label: 'Eventos', href: '/eventos', icon: EventosIcon },
    { label: 'Equipes', href: '/equipes', icon: EquipesIcon },
    { label: 'Inscrições', href: '/inscricoes', icon: InscricoesIcon },
  ]

  const handleLogout = () => {
    localStorage.clear()
    router.push('/login')
  }

  return (
    <aside className="w-[210px] bg-white border-r border-[#2525] min-h-screen px-[15px] sticky top-0 flex flex-col justify-between">
      <div>
        <div className="py-[30px] self-center">
        <Logo width={160}/>
        </div>

        <nav className="flex flex-col gap-[5px]">
          <p className="text-[#A3A3A3] font-extrabold px-[10px]">MENU</p>
          {menuItems.map(({ label, href, icon: Icon }) => {
            const isActive = pathname === href
            const iconColor = isActive ? '#fff' : '#252525'

            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-[10px] p-[10px] rounded-[5px] transition 
                  ${isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-primary-hover'}
                `}
              >
                <Icon background={iconColor} width={24} height={24} />
                {label}
              </Link>
            )
          })}
        </nav>
      </div>

      <div className='py-[30px]'>

        <Link
          href='/perfil'
          className={`flex items-center gap-[10px] p-[10px] rounded-[5px] transition text-gray-700 hover:bg-gray-100 hover:text-primary-hover`}
        >
          <PerfilIcon width={30} height={30} />
          Alterar dados
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center gap-[10px] p-[10px] rounded-[5px] transition border-none bg-white cursor-pointer hover:text-primary-hover"
        >
          <SairIcon width={30} height={30} />
          Sair
        </button>
      </div>
    </aside>
  )
}
