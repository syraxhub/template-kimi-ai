"use client"

import * as React from "react"
import {
  DashboardSquare01Icon,
  Task01Icon,
  Folder01Icon,
  UserMultipleIcon,
  Settings01Icon,
  Command,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: DashboardSquare01Icon,
      isActive: true,
    },
    {
      title: "Tasks",
      url: "/tasks",
      icon: Task01Icon,
      items: [
        {
          title: "All Tasks",
          url: "/tasks",
        },
        {
          title: "My Tasks",
          url: "/tasks?filter=my",
        },
        {
          title: "Completed",
          url: "/tasks?filter=completed",
        },
      ],
    },
    {
      title: "Projects",
      url: "/projects",
      icon: Folder01Icon,
      items: [
        {
          title: "All Projects",
          url: "/projects",
        },
        {
          title: "Active",
          url: "/projects?filter=active",
        },
        {
          title: "Archived",
          url: "/projects?filter=archived",
        },
      ],
    },
    {
      title: "Users",
      url: "/users",
      icon: UserMultipleIcon,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings01Icon,
      items: [
        {
          title: "General",
          url: "/settings",
        },
        {
          title: "Profile",
          url: "/settings/profile",
        },
        {
          title: "Notifications",
          url: "/settings/notifications",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      variant="inset"
      collapsible="icon"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <HugeiconsIcon icon={Command} size={16} strokeWidth={1.5} />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Kimi UI</span>
                  <span className="truncate text-xs">Template</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
