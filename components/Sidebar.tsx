'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const Sidebar = ({ user }: any) => {
  const pathname = usePathname()
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4 w-full">
        <Link
          href="/"
          className="flex mb-12 cursor-pointer items-center gap-2 w-max"
        >
          <Image
            src="/icons/logo.svg"
            alt="logo"
            width={34}
            height={34}
            className="max-xl:size-14 size-[24px]"
          />
          <h2 className="sidebar-logo">Horizon</h2>
        </Link>

        {sidebarLinks.map((item, index) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`)
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    'brightness-[3] invert-0': isActive
                  })}
                />
              </div>
              <p className={cn('sidebar-label', { '!text-white': isActive })}>
                {item.label}
              </p>
            </Link>
          )
        })}
      </nav>
    </section>
  )
}
export default Sidebar
