import { Link } from '@tanstack/react-router';

import { ModeToggle } from './mode-toggle';
import UserMenu from './user-menu';

export default function Header() {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/dashboard', label: 'Dashboard' },
  ];

  return (
    <header className="flex h-12 w-full items-center justify-center border-b">
      <div className="flex w-full max-w-6xl flex-row items-center justify-between px-2 py-1">
        <div>
          <span>BetterFleets</span>
        </div>
        <div className="flex w-full items-center justify-end gap-8">
          <nav className="flex gap-4 text-base">
            {links.map(({ to, label }) => {
              return (
                <Link key={to} to={to}>
                  {label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
