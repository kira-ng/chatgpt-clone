import SessionProvider from '@/components/SessionProvider'
import SideBar from '@/components/SideBar'
import '../styles/globals.css'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import Login from '@/components/Login'
import ClientProider from '@/components/ClientProider'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              <div className="bg-[#202123] max-w-[16rem] h-screen overflow-y-auto md:min-w-[16rem]">
                <SideBar />
              </div>

              {/* ClientProider - Notification  */}
              <ClientProider />

              <div className="bg-[#343541] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  )
}
