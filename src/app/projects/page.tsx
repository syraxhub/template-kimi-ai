"use client";

import { DataTable } from "@/components/ui-custom/data-table";
import { StatusBadge } from "@/components/ui-custom/status-badge";
import { mockProjects } from "@/lib/mock-data";
import { Project } from "@/types";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function ProjectsPage() {
  const columns = [
    {
      key: "name",
      header: "Name",
      cell: (project: Project) => (
        <span className="font-medium">{project.name}</span>
      ),
      sortable: true,
    },
    {
      key: "description",
      header: "Description",
      cell: (project: Project) => (
        <span className="text-muted-foreground line-clamp-1">
          {project.description}
        </span>
      ),
      sortable: false,
    },
    {
      key: "status",
      header: "Status",
      cell: (project: Project) => <StatusBadge status={project.status} />,
      sortable: true,
    },
    {
      key: "createdAt",
      header: "Created",
      cell: (project: Project) =>
        new Date(project.createdAt).toLocaleDateString(),
      sortable: true,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <p className="text-muted-foreground">Manage your projects</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Project
        </Button>
      </div>

      <DataTable
        data={mockProjects}
        columns={columns}
        searchKeys={["name", "description", "status"]}
      />
    </div>
  );
}
