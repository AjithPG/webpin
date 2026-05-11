'use client'

import * as React from 'react'

interface AppShellProps {
  children: React.ReactNode
  sidebar: React.ReactNode
}

export const AppShell = ({ children, sidebar }: AppShellProps) => {
  return (
    <div className="flex h-screen flex-row overflow-hidden">
      <aside className="hidden md:flex w-60 flex-col overflow-y-auto border-r border-[#E5E7EB] bg-[#FFFFFF] ">
        {sidebar}
      </aside>
      <main className="flex flex-1 flex-col overflow-hidden bg-[#F8F8FC]">{children}</main>
    </div>
  )
}
