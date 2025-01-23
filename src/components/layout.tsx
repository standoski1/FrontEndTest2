"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  Grid,
  AlertTriangle,
  Box,
  Asterisk,
  Satellite,
  FileText,
  Filter,
  Settings,
  MessageSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navigationItems = [
  { id: "dashboard", icon:"/home.png", label: "Lorem", href: "#" },
  { id: "alerts", icon:"/home1.png", label: "Lorem", href: "#" },
  { id: "docs", icon: "/home2.png", label: "Lorem", href: "#" },
  { id: "security", icon: "/home3.png", label: "Lorem", href: "#", isActive: true },
  { id: "tools", icon: "/home4.png", label: "Lorem", href: "#" },
  { id: "files", icon: "/home5.png", label: "Lorem", href: "#" },
  { id: "filter", icon: "/home6.png", label: "Lorem", href: "#" },
]

const footerItems = [
  { id: "settings", icon: "/home7.png", label: "Lorem", href: "#" },
  { id: "messages", icon: "/home8.png", label: "Lorem", href: "#" },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="flex min-h-screen bg-[#F9F9F9]">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b z-50 flex items-center px-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            <SidebarContent />
          </SheetContent>
        </Sheet>
        <div className="ml-4 flex items-center gap-2">
          <img
            src="/logo.png"
            alt=""
            className="h-6"
          />
          <span className="text-xl font-semibold">Astelia</span>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden lg:flex bg-white border-r border-[#E5E7EB] flex-col fixed h-screen transition-all duration-300 relative",
          isCollapsed ? "w-16" : "w-64",
        )}
      >
        <SidebarContent isCollapsed={isCollapsed} />
        {/* Toggle button */}
        <div
          className={cn(
            "hidden lg:block absolute z-20 transition-all duration-300",
            isCollapsed ? "-right-3 top-4" : "-right-3 top-4",
          )}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="h-6 w-6 rounded-full bg-[#00732E] flex items-center justify-center p-0 shadow-md"
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4 text-white" />
            ) : (
              <ChevronLeft className="h-4 w-4 text-white" />
            )}
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className={cn("flex-1 transition-all duration-300 lg:pt-0", isCollapsed ? "mt-25" : "mt-5")}>
        <div className="p-1">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">{children}</div>
        </div>
      </main>
    </div>
  )
}

function SidebarContent({ isCollapsed }: { isCollapsed?: boolean }) {
  return (
    <div className="flex flex-col h-full">
      <div className={cn("p-4", isCollapsed ? "pb-2" : "")}>
        <Link href="/" className={cn("flex items-center", isCollapsed ? "justify-center" : "gap-2")}>
          <div className={cn("flex-shrink-0", isCollapsed ? "w-10 h-10" : "w-6 h-6")}>
            <img
              src="/logo.png"
              alt="Astelia"
              className={cn(isCollapsed ? "w-[1rem] h-[1rem]" : "w-[2rem] h-[1.5rem]")}
            />
          </div>
          {!isCollapsed && <span className="text-xl font-semibold">Astelia</span>}
        </Link>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigationItems.map((item,i) => (
            <li key={i}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md",
                  item.isActive ? "bg-[#E9FAF0] text-[#00732E]" : "text-[#5C5C5C] hover:bg-gray-100",
                  isCollapsed && "justify-center",
                )}
              >
                <img
                    src={item.icon}
                    alt=""
                    className={cn("object-cover",isCollapsed ? "w-[2.5rem]" : "w-[.8rem]")}
                />
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto">
        <nav className="p-4">
          <ul className="space-y-2">
            {footerItems.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md text-[#5C5C5C] hover:bg-gray-100",
                    isCollapsed && "justify-center",
                  )}
                >
                  <img
                    src={item.icon}
                    alt=""
                    className={cn("object-cover",isCollapsed ? "w-[2.5rem]" : "w-[.8rem]")}
                  />
                  {!isCollapsed && <span>{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-[#E5E7EB]">
          <div className={cn("flex items-center gap-3", isCollapsed && "justify-center")}>
            <img
            src="/home9.png"
            alt=""
            className="w-[1.5rem]"
            />
            {!isCollapsed && (
              <div>
                <div className="text-sm font-medium">Lorem</div>
                <div className="text-xs text-[#5C5C5C]">Lorem</div>
              </div>
            )}
            <img
            src="/exit.png"
            alt=""
            className="w-[1.5rem] ml-[7rem]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

