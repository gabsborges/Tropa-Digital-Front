'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion'
import { InputField } from '../components/InputField';
import { PasswordInputField } from '../components/PasswordInputField';


export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loginError, setLoginError] = useState(false);


  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === 'teste@teste.com' && password === '1234') {
      localStorage.setItem('auth', 'true');
      router.push('/dashboard');
      setLoginError(false);
    } else {
      if (email === "" && password === "") {
        toast.error('Preencha os campos obrigatórios');
      } else {
        toast.error('Credenciais inválidas. Verifique e tente novamente.');
      }
      setLoginError(true);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='w-[755px] p-[10px] rounded-[20px] flex items-start justify-center bg-withe drop-shadow-primary'>
        <form onSubmit={handleLogin} className="flex flex-wrap gap-[35px] pt-[40px] pl-[20px] pr-[20px]">
          <img src="./tropa-digital-logo.svg" alt="tropa digital logo" width={161} />
          <div>
            <h1 className='text-[26px] font-bold text-primary'>Bem-vindo de volta</h1>
            <p className='text-[13px] font-normal text-secondary'>Entre com sua conta para acessar o painel.</p>
          </div>
          <div className='flex flex-col gap-[20px] w-full'>

            <InputField
              id="email"
              label="E-mail"
              type="email"
              placeholder="seunome@seuservidor.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={loginError}
              errorMessage="Campo obrigatório ou inválido"
            />

            <div className="flex flex-col gap-2 relative w-full">
              <PasswordInputField
                id="password"
                label="Senha"
                placeholder="Digite aqui"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={loginError}
                errorMessage="Campo obrigatório ou inválido"
              />

            </div>
            <button type="submit" className="p-[12px] bg-primary text-withe border-none rounded-full cursor-pointer hover:bg-primary-hover">
              Entrar
            </button>
          </div>
        </form>
        <img src="./login-img.svg" alt="Imagem de login" />
      </motion.div>
    </div>
  )
}
