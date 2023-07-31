import React from 'react'
import SideNav from './SideNav'
interface NestedLayoutProps {
  children: React.ReactNode
}
const NestedLayout = ({ children }: NestedLayoutProps) => {
  return (
    <div className="flex">
      <SideNav />
      {children}
    </div>
  )
}

export default NestedLayout
