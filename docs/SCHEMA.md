# SCHEMA.md — template-kimi-ai

## Entities

### User
```typescript
interface User {
  id: string;           // UUID
  email: string;        // unique
  name: string;
  avatar?: string;      // URL
  role: "admin" | "user" | "editor";
  createdAt: Date;
  updatedAt: Date;
}
```

### Project (example entity for demo)
```typescript
interface Project {
  id: string;           // UUID
  name: string;
  description: string;
  status: "active" | "archived" | "draft";
  ownerId: string;      // → User.id
  createdAt: Date;
  updatedAt: Date;
}
```

### Task (example entity for demo)
```typescript
interface Task {
  id: string;           // UUID
  title: string;
  description?: string;
  status: "todo" | "in_progress" | "done" | "cancelled";
  priority: "low" | "medium" | "high" | "urgent";
  projectId: string;    // → Project.id
  assigneeId?: string;  // → User.id
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}
```

## Relations
- User 1:N Project (owner)
- User 1:N Task (assignee)
- Project 1:N Task

## Mock Data Structure
Mock data harus match schema di atas persis. Field types:
- `id`: string (UUID format)
- `email`: string (valid email)
- `role`: enum ["admin", "user", "editor"]
- `status`: enum sesuai entity
- Dates: ISO string ("2026-05-15T10:00:00Z")

## Future Migration
Saat backend dibuat:
1. Copy mock data structure ke Prisma schema
2. Enum di mock → enum di Prisma
3. Date string → DateTime
4. Relations tetap sama
