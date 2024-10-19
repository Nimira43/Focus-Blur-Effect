'use client'

import { cn } from '@/lib/utils'
import { CalendarCheck, HomeIcon, LucideProps, Settings2, Users } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ForwardRefExoticComponent, RefAttributes } from 'react'

interface iAppProps {
  id: number
  name: string
  href: string
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> &RefAttributes<SVGSVGElement>>
}

export const dashboardLinks: iAppProps[] = [
  {
    id: 0,
    name: 'Event Types',
    href: '/dashboard',
    icon: HomeIcon,
  },
  {
    id: 1,
    name: 'Meeting',
    href: '/dashboard/meetings',
    icon: Users,
  },
  {
    id: 2,
    name: 'Availability',
    href: '/dashboard/availability',
    icon: CalendarCheck,
  },
  {
    id: 3,
    name: 'Settings',
    href: '/dashboard/settings',
    icon: Settings2,
  },
]

export function DashboardLinks() {
  const pathname = usePathname()

  return (
    <>
      {dashboardLinks.map((link) => (
        <Link 
          className={cn(
            pathname === link.href 
              ? 'text-[#ffa500] bg-[#ddd]' 
              : 'text-muted-foreground hover:text-foreground',
              'flex items-center, gap-3 rounded-lg px-3 py-2 transition-all hover:text-[#daa520]' 
          )} 
          key={link.id} 
          href={link.href}
        >
          <link.icon className='size-4' />
          {link.name}
        </Link>
      ))}
    </>
  )
}