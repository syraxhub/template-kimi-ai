import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockProjects, mockTasks, mockUsers } from "@/lib/mock-data";
import { FolderKanban, ListTodo, Users, CheckCircle } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Projects",
      value: mockProjects.length,
      icon: FolderKanban,
      color: "text-blue-600",
    },
    {
      title: "Active Tasks",
      value: mockTasks.filter((t) => t.status !== "done" && t.status !== "cancelled").length,
      icon: ListTodo,
      color: "text-yellow-600",
    },
    {
      title: "Completed",
      value: mockTasks.filter((t) => t.status === "done").length,
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      title: "Team Members",
      value: mockUsers.length,
      icon: Users,
      color: "text-purple-600",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Overview of your projects and tasks
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {mockProjects.slice(0, 3).map((project) => (
              <div
                key={project.id}
                className="flex items-center justify-between rounded-lg border p-3"
              >
                <div>
                  <p className="font-medium">{project.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <span
                  className={`rounded-full px-2 py-1 text-xs ${
                    project.status === "active"
                      ? "bg-green-100 text-green-800"
                      : project.status === "draft"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {project.status}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Tasks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {mockTasks.slice(0, 3).map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between rounded-lg border p-3"
              >
                <div>
                  <p className="font-medium">{task.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {task.status.replace("_", " ")}
                  </p>
                </div>
                <span
                  className={`rounded-full px-2 py-1 text-xs ${
                    task.priority === "urgent"
                      ? "bg-red-100 text-red-800"
                      : task.priority === "high"
                      ? "bg-orange-100 text-orange-800"
                      : task.priority === "medium"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {task.priority}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
