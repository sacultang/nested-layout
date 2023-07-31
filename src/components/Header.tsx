import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="h-8 bg-blue-300">
      <ul className="flex gap-4">
        {links.map(link => (
          <li key={link.name}>
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Header

const links = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'profile', path: '/profile' },
]
