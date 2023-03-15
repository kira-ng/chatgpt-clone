'use client'

import { db } from '@/firebase'
import { collection } from 'firebase/firestore'
import { signOut, useSession } from 'next-auth/react'
import { useCollection } from 'react-firebase-hooks/firestore'
import NewChat from './NewChat'

function SideBar() {
  const { data: session } = useSession()

  const [chats, loading, error] = useCollection(
    session && collection(db, 'users', session?.user?.email!, 'chats')
  )

  console.log(chats.docs[0].data())

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
