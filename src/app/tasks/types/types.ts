type Priority = 'high' | 'medium' | 'low' | undefined

export interface Task {
  id: string;
  name: string;
  description: string;
  priority: Priority,
  startDate: Date | null,
  dueDate: Date | null
}
