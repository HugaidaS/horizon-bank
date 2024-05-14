import Sidebar from '@/components/Sidebar'
import { loggedInMock } from '@/constants'
import Image from 'next/image'
import MobileNav from '@/components/MobileNav'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex w-full h-screen font-inter">
      <Sidebar user={loggedInMock} />

      {/* Mobile Nav */}
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="icons/logo.svg" width={30} height={30} alt="menu-icon" />
          <MobileNav user={loggedInMock} />
        </div>
        {children}
      </div>
    </main>
  )
}
