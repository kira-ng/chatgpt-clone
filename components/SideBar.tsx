'use client'

import { signOut, useSession } from 'next-auth/react'
import NewChat from './NewChat'

function SideBar() {
  const { data: session } = useSession()

  return (
    <div className="flex flex-col p-2 h-screen">
      <div className="flex-1">
        <NewChat />

        <div>{/* ModelSelection */}</div>

        {/* Map through the ChatRows */}
      </div>

      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt="Profile pic"
          className="h-12 w-12 rounded-full mx-auto cursor-pointer mb-2 hover:opacity-50"
        />
      )}
    </div>
  )
}

export default SideBar
