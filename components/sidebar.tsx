"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    title: string
    href: string
    icon?: React.ReactNode
    items?: {
      title: string
      href: string
      icon?: React.ReactNode
    }[]
  }[]
}

export function Sidebar({ className, items, ...props }: SidebarProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      {/* Mobile Sidebar Trigger */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pr-0 sm:max-w-xs">
          <MobileSidebar items={items} setOpen={setOpen} />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className={cn("hidden md:flex h-screen flex-col", className)} {...props}>
        <div className="py-4 px-4 border-b">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-[#0a3b25]">
            IVY COACH
          </Link>
        </div>
        <ScrollArea className="flex-1 py-2">
          <nav className="grid gap-1 px-2">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                {item.items ? (
                  <div className="py-2">
                    <h4 className="mb-1 px-2 text-sm font-semibold">{item.title}</h4>
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                      >
                        {subItem.icon}
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                  >
                    {item.icon}
                    {item.title}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>
        </ScrollArea>
      </div>
    </>
  )
}

interface MobileSidebarProps {
  items: SidebarProps["items"]
  setOpen: (open: boolean) => void
}

function MobileSidebar({ items, setOpen }: MobileSidebarProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="py-4 px-4 border-b">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-[#0a3b25]"
          onClick={() => setOpen(false)}
        >
          IVY COACH
        </Link>
      </div>
      <ScrollArea className="flex-1">
        <nav className="grid gap-1 px-2 py-2">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {item.items ? (
                <div className="py-2">
                  <h4 className="mb-1 px-2 text-sm font-semibold">{item.title}</h4>
                  {item.items.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                      onClick={() => setOpen(false)}
                    >
                      {subItem.icon}
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.icon}
                  {item.title}
                </Link>
              )}
            </React.Fragment>
          ))}
        </nav>
      </ScrollArea>
    </div>
  )
}

