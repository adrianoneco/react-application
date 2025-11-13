import { CheckSquare, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  onCreateClick: () => void;
}

export function EmptyState({ onCreateClick }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4" data-testid="empty-state">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-6">
        <CheckSquare className="h-10 w-10 text-muted-foreground" />
      </div>
      <h3 className="text-2xl font-semibold mb-2">No tasks yet</h3>
      <p className="text-muted-foreground text-center mb-8 max-w-md">
        Get started by creating your first task. Stay organized and track your progress with ease.
      </p>
      <Button onClick={onCreateClick} size="lg" data-testid="button-create-first-task">
        <PlusCircle className="h-5 w-5 mr-2" />
        Create Your First Task
      </Button>
    </div>
  );
}
