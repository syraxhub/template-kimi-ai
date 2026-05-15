"use client";

import { DataTable } from "@/components/ui-custom/data-table";
import { StatusBadge } from "@/components/ui-custom/status-badge";
import { mockTasks } from "@/lib/mock-data";
import { Task } from "@/types";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function TasksPage() {
  const columns = [
    {
      key: "title",
      header: "Title",
      cell: (task: Task) => <span className="font-medium">{task.title}</span>,
      sortable: true,
    },
    {
      key: "status",
      header: "Status",
      cell: (task: Task) => <StatusBadge status={task.status} />,
      sortable: true,
    },
    {
      key: "priority",
      header: "Priority",
      cell: (task: Task) => <StatusBadge status={task.priority} />,
      sortable: true,
    },
    {
      key: "dueDate",
      header: "Due Date",
      cell: (task: Task) =>
        task.dueDate
          ? new Date(task.dueDate).toLocaleDateString()
          : "No date",
      sortable: true,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Tasks</h2>
          <p className="text-muted-foreground">Manage your tasks</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Task
        </Button>
      </div>

      <DataTable
        data={mockTasks}
        columns={columns}
        searchKeys={["title", "status", "priority"]}
      />
    </div>
  );
}
