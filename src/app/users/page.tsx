"use client";

import { DataTable } from "@/components/ui-custom/data-table";
import { StatusBadge } from "@/components/ui-custom/status-badge";
import { mockUsers } from "@/lib/mock-data";
import { User } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function UsersPage() {
  const columns = [
    {
      key: "name",
      header: "User",
      cell: (user: User) => (
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.avatar} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{user.name}</p>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
        </div>
      ),
      sortable: true,
    },
    {
      key: "role",
      header: "Role",
      cell: (user: User) => <StatusBadge status={user.role} />,
      sortable: true,
    },
    {
      key: "createdAt",
      header: "Joined",
      cell: (user: User) =>
        new Date(user.createdAt).toLocaleDateString(),
      sortable: true,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Users</h2>
          <p className="text-muted-foreground">Manage team members</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      <DataTable
        data={mockUsers}
        columns={columns}
        searchKeys={["name", "email", "role"]}
      />
    </div>
  );
}
