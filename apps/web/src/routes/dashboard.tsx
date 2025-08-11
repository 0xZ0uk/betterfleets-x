import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import { authClient } from '@/lib/auth-client';
import { trpc } from '@/utils/trpc';

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: session, isPending } = authClient.useSession();

  const navigate = Route.useNavigate();

  // biome-ignore lint/suspicious/noExplicitAny: TRPC proxy is intentionally untyped in web
  const privateData = useQuery((trpc as any).privateData.queryOptions());

  // biome-ignore lint/correctness/useExhaustiveDependencies: navigate doesn't need to be a dependency
  useEffect(() => {
    if (!(session || isPending)) {
      navigate({
        to: '/login',
      });
    }
  }, [session, isPending]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {session?.user.name}</p>
      <p>
        privateData:{' '}
        {String(
          (privateData.data as unknown as { message?: string })?.message ?? '—'
        )}
      </p>
    </div>
  );
}
