'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import React from 'react'
import { usePathname } from 'next/navigation'

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname()

  return (
    <section className="w-full max-w-[26px] max-h-[26px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            alt="burger menu"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link
            href="/"
            className="flex cursor-pointer items-center gap-1 px-4 w-max"
          >
            <Image src="/icons/logo.svg" alt="logo" width={34} height={34} />
            <h2 className="text-26 font-ibm-plex-serif text-black-1 font-bold">
              Horizon
            </h2>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item, index) => {
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`${item.route}/`)
                  return (
                    <SheetClose key={item.label} asChild>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn('mobilenav-sheet_close w-full', {
                          'bg-bank-gradient': isActive
                        })}
                      >
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                          className={cn({
                            'brightness-[3] invert-0': isActive
                          })}
                        />
                        <p
                          className={cn('text-16 font-semibold text-black-2', {
                            'text-white': isActive
                          })}
                        >
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  )
                })}
                USER
              </nav>
            </SheetClose>
            FOOTER
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}
export default MobileNav
