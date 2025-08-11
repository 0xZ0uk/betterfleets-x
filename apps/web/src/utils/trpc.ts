import { QueryCache, QueryClient } from '@tanstack/react-query';
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { createTRPCOptionsProxy } from '@trpc/tanstack-react-query';
import { toast } from 'sonner';
// Using an untyped client locally to avoid cross-package build requirements.
// If you enable TS project references for the server, replace `any` with `AppRouter`.

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      toast.error(error.message, {
        action: {
          label: 'retry',
          onClick: () => {
            queryClient.invalidateQueries();
          },
        },
      });
    },
  }),
});

// biome-ignore lint/suspicious/noExplicitAny: Cross-package Router typing disabled locally
export const trpcClient = createTRPCClient<any>({
  links: [
    httpBatchLink({
      url: `${import.meta.env.VITE_SERVER_URL}/trpc`,
      fetch(url, options) {
        return fetch(url, {
          ...options,
          credentials: 'include',
        });
      },
    }),
  ],
});

// biome-ignore lint/suspicious/noExplicitAny: Cross-package Router typing disabled locally
export const trpc = createTRPCOptionsProxy<any>({
  client: trpcClient,
  queryClient,
});
