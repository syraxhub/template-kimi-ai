import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mockTasks as tasks, mockProjects as projects, mockUsers as users } from "@/lib/mock-data"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Task01Icon,
  Folder01Icon,
  UserMultipleIcon,
  Activity01Icon,
} from "@hugeicons/core-free-icons"

export default function Page() {
  const stats = [
    {
      title: "Total Tasks",
      value: tasks.length,
      icon: Task01Icon,
      change: "+12%",
      trend: "up" as const,
    },
    {
      title: "Projects",
      value: projects.length,
      icon: Folder01Icon,
      change: "+5%",
      trend: "up" as const,
    },
    {
      title: "Team Members",
      value: users.length,
      icon: UserMultipleIcon,
      change: "+2",
      trend: "up" as const,
    },
    {
      title: "Completed",
      value: tasks.filter(t => t.status === "done").length,
      icon: Activity01Icon,
      change: "+8%",
      trend: "up" as const,
    },
  ]

  const recentTasks = tasks.slice(0, 5)
  const recentProjects = projects.slice(0, 3)

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        {/* Header - hidden on mobile, show on lg */}
        <header className="hidden lg:flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Overview</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b">
          <h1 className="text-lg font-semibold">Dashboard</h1>
          <SidebarTrigger />
        </div>

        {/* Main Content */}
        <div className="flex flex-1 flex-col gap-4 p-4">
          {/* Stats Grid - 2 cols mobile, 4 cols desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {stats.map((stat) => {
              return (
                <Card key={stat.title} className="border-0 shadow-none bg-muted/50">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-xs font-medium text-muted-foreground">
                      {stat.title}
                    </CardTitle>
                    <HugeiconsIcon
                      icon={stat.icon}
                      size={16}
                      strokeWidth={1.5}
                      className="text-muted-foreground"
                    />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      <span className="text-emerald-600">{stat.change}</span> from last month
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Recent Tasks - Full width on mobile */}
          <Card className="border-0 shadow-none">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Recent Tasks</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-2">
                {recentTasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
                  >
                    <div className="flex flex-col gap-1 min-w-0">
                      <span className="text-sm font-medium truncate">{task.title}</span>
                      <span className="text-xs text-muted-foreground">{task.projectId}</span>
                    </div>
                    <Badge
                      variant={
                        task.status === "done"
                          ? "default"
                          : task.status === "in_progress"
                          ? "secondary"
                          : "outline"
                      }
                      className="shrink-0 text-xs"
                    >
                      {task.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Projects */}
          <Card className="border-0 shadow-none">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Recent Projects</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-2">
                {recentProjects.map((project) => (
                  <div
                    key={project.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
                  >
                    <div className="flex flex-col gap-1 min-w-0">
                      <span className="text-sm font-medium truncate">{project.name}</span>
                      <span className="text-xs text-muted-foreground">{project.description}</span>
                    </div>
                    <Badge
                      variant={
                        project.status === "active"
                          ? "default"
                          : project.status === "archived"
                          ? "secondary"
                          : "outline"
                      }
                      className="shrink-0 text-xs"
                    >
                      {project.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
