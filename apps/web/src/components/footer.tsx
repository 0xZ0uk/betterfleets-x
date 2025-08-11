import { useQuery } from '@tanstack/react-query';
import { trpc } from '@/utils/trpc';

export const Footer: React.FC = () => {
  // biome-ignore lint/suspicious/noExplicitAny: TRPC proxy is intentionally untyped in web
  const healthCheck = useQuery((trpc as any).healthCheck.queryOptions());

  const checkHealth = (data?: unknown) => {
    if (data) {
      return 'Connected';
    }

    return 'Disconnected';
  };

  return (
    <footer className="flex h-10 items-center justify-center border-t px-4">
      <div className="flex w-full max-w-6xl items-center justify-between">
        <div>
          <span className="text-muted-foreground text-sm">
            BetterFleets©, 2025
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className={`h-2 w-2 rounded-full ${healthCheck.data ? 'bg-green-500' : 'bg-red-500'}`}
          />
          <span className="text-muted-foreground text-sm">
            {healthCheck.isLoading
              ? 'Checking...'
              : checkHealth(healthCheck.data)}
          </span>
        </div>
      </div>
    </footer>
  );
};
