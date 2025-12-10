"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useState } from "react"
import {
  Home,
  Server,
  Router,
  Globe,
  Network,
  Terminal,
  Bell,
  FileText,
  Users,
  Settings,
  Menu,
  ChevronDown,
} from "lucide-react"

export default function SideBar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(true)
  const [openGroup, setOpenGroup] = useState(true)

  return (
    <>
      {/* Botão Mobile */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden p-2 m-2 rounded-md border bg-white shadow-sm"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-screen bg-white border-r border-gray-200 dark:border-gray-700 transition-all",
          open ? "w-64" : "w-0 lg:w-16"
        )}
      >
        <div className={cn("h-full flex flex-col", open ? "px-4" : "px-0")}>
          {/* Header */}
          <div className={cn("py-4 font-semibold text-lg", !open && "hidden lg:block text-center text-sm")}>
            {open ? "Monitor Pro" : "MP"}
          </div>

          {/* Conteúdo */}
          <nav className="flex-1 space-y-1 overflow-y-auto py-2">
            <SidebarItem
              title="Dashboard"
              href="/dashboard"
              icon={Home}
              active={pathname === "/dashboard"}
              open={open}
            />

            {/* Grupo Monitoramento */}
            <div>
              <button
                onClick={() => setOpenGroup(!openGroup)}
                className={cn(
                  "w-full flex items-center justify-between px-2 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition",
                  !open && "hidden lg:flex lg:justify-center"
                )}
              >
                <span className={cn(!open && "hidden")}>Monitoramento</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition",
                    openGroup && "rotate-180",
                    !open && "hidden"
                  )}
                />
              </button>

              {openGroup && (
                <div className="ml-3 space-y-1">
                  <SidebarItem
                    title="Servidores"
                    href="/monitoramento/servidores"
                    icon={Server}
                    active={pathname === "/monitoramento/servidores"}
                    open={open}
                  />
                  <SidebarItem
                    title="Redes"
                    href="/monitoramento/redes"
                    icon={Router}
                    active={pathname === "/monitoramento/redes"}
                    open={open}
                  />
                  <SidebarItem
                    title="APIs"
                    href="/monitoramento/apis"
                    icon={Globe}
                    active={pathname === "/monitoramento/apis"}
                    open={open}
                  />
                  <SidebarItem
                    title="Domínios"
                    href="/monitoramento/dominios"
                    icon={Network}
                    active={pathname === "/monitoramento/dominios"}
                    open={open}
                  />
                  <SidebarItem
                    title="Portas"
                    href="/monitoramento/portas"
                    icon={Terminal}
                    active={pathname === "/monitoramento/portas"}
                    open={open}
                  />
                </div>
              )}
            </div>

            <SidebarItem
              title="Alertas"
              href="/alertas"
              icon={Bell}
              active={pathname === "/alertas"}
              open={open}
            />

            <SidebarItem
              title="Logs"
              href="/logs"
              icon={FileText}
              active={pathname === "/logs"}
              open={open}
            />

            <SidebarItem
              title="Utilizadores"
              href="/users"
              icon={Users}
              active={pathname === "/users"}
              open={open}
            />

            <SidebarItem
              title="Configurações"
              href="/configuracoes"
              icon={Settings}
              active={pathname === "/configuracoes"}
              open={open}
            />
          </nav>

          {/* Footer */}
          <div
            className={cn(
              "py-4 text-sm text-gray-500 dark:text-gray-400",
              !open && "hidden lg:block text-center"
            )}
          >
            {open ? "v1.0.0" : "v1"}
          </div>
        </div>
      </aside>
    </>
  )
}

/* Componente de item */
function SidebarItem({ title, href, icon: Icon, active, open }: any) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 px-2 py-2 rounded-md text-sm transition",
        active
          ? "bg-primary text-primary-foreground"
          : "hover:bg-gray-100 dark:hover:bg-gray-700",
        !open && "lg:justify-center lg:px-0"
      )}
    >
      <Icon className="w-4 h-4" />
      <span className={cn(!open && "hidden")}>{title}</span>
    </Link>
  )
}
