import Sidebar from '@/components/Sidebar'
import { loggedInMock } from '@/constants'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex w-full h-screen font-inter">
      <Sidebar user={loggedInMock} />
      {children}
    </main>
  )
}
