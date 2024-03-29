'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'

function Login() {
  return (
    <div className="bg-[#0ea47e] h-screen flex flex-col justify-center items-center">
      <Image
        src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="logo"
        priority={true}
      />
      <button
        onClick={() => signIn('google')}
        className="text-white font-bold text-3xl animate-pulse"
      >
        Sign In to use ChatGPT
      </button>
    </div>
  )
}

export default Login
