import Link from 'next/link'
import React from 'react'

const SideNav = () => {
  return (
    <div className=" h-screen w-80 flex flex-col gap-4 bg-red-200">
      {links.map(link => (
        <Link key={link.name} href={link.path}>
          {link.name}
        </Link>
      ))}
    </div>
  )
}

export default SideNav

const links = [
  { name: 'about1', path: '/about/about-1' },
  { name: 'about2', path: '/about/about-2' },
  { name: 'about3', path: '/about/about-3' },
]
