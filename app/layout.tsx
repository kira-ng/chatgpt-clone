import SideBar from '@/components/SideBar'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="flex">
          <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[15rem]">
            <SideBar />
          </div>

          {/* ClientProider - Notification  */}

          <div className="bg-[#343541] flex-1">{children}</div>
        </div>
      </body>
    </html>
  )
}
