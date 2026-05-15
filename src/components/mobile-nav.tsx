"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  DashboardSquare01Icon,
  Task01Icon,
  Folder01Icon,
  UserMultipleIcon,
  Settings01Icon,
  Menu01Icon,
} from "@hugeicons/core-free-icons"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const navItems = [
  { href: "/", label: "Home", icon: DashboardSquare01Icon },
  { href: "/tasks", label: "Tasks", icon: Task01Icon },
  { href: "/projects", label: "Projects", icon: Folder01Icon },
  { href: "/users", label: "Users", icon: UserMultipleIcon },
]

const menuItems = [
  { href: "/settings", label: "Settings", icon: Settings01Icon },
  { href: "/tasks", label: "Tasks", icon: Task01Icon },
  { href: "/projects", label: "Projects", icon: Folder01Icon },
  { href: "/users", label: "Users", icon: UserMultipleIcon },
]

export function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t lg:hidden">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 text-xs transition-colors",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <HugeiconsIcon
                icon={item.icon}
                size={20}
                strokeWidth={1.5}
              />
              <span className="text-[10px]">{item.label}</span>
            </Link>
          )
        })}

        {/* Kolom ke-5: Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className={cn(
                "flex flex-col items-center justify-center gap-1 text-xs transition-colors",
                open
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <HugeiconsIcon
                icon={Menu01Icon}
                size={20}
                strokeWidth={1.5}
              />
              <span className="text-[10px]">Menu</span>
            </button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[70vh] rounded-t-xl">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="grid gap-2 py-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-3"
                  >
                    <HugeiconsIcon
                      icon={item.icon}
                      size={20}
                      strokeWidth={1.5}
                    />
                    {item.label}
                  </Button>
                </Link>
              ))}
              <Separator className="my-2" />
              <div className="px-4 py-2">
                <p className="text-sm text-muted-foreground">Kimi UI v2.0</p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
