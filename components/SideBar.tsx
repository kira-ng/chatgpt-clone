'use client'

import { db } from '@/firebase'
import { collection, orderBy, query } from 'firebase/firestore'
import { signOut, useSession } from 'next-auth/react'
import { useCollection } from 'react-firebase-hooks/firestore'
import ChatRow from './ChatRow'
import ModelSelection from './ModelSelection'
import NewChat from './NewChat'

function SideBar() {
  const { data: session } = useSession()

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, 'users', session?.user?.email!, 'chats'),
        orderBy('createdAt', 'asc')
      )
  )

  return (
    <div className="flex flex-col p-2 h-screen">
      <div className="flex-1">
        <NewChat />

        <div className="hidden sm:inline">
          <ModelSelection />
        </div>

        <div className="flex flex-col space-y-2 my-2">
          {loading && (
            <div className="animate-pulse text-white text-center">
              <p>Loading Chats...</p>
            </div>
          )}

          {/* Map through the ChatRows */}
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
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
