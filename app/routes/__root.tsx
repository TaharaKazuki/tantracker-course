import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/tanstack-start';
import poppins100 from '@fontsource/poppins/100.css?url';
import poppins200 from '@fontsource/poppins/200.css?url';
import poppins300 from '@fontsource/poppins/300.css?url';
import poppins400 from '@fontsource/poppins/400.css?url';
import poppins500 from '@fontsource/poppins/500.css?url';
import poppins600 from '@fontsource/poppins/600.css?url';
import poppins700 from '@fontsource/poppins/700.css?url';
import poppins800 from '@fontsource/poppins/800.css?url';
import poppins900 from '@fontsource/poppins/900.css?url';
import { Outlet } from '@tanstack/react-router';
import {
  createRootRoute,
  HeadContent,
  Scripts,
  Link,
} from '@tanstack/react-router';
import { ChartColumnBigIcon } from 'lucide-react';
import type { ReactNode } from 'react';

import appCss from '../app.css?url';

import { Button } from '@/components/ui/button';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'stylesheet', href: poppins100 },
      { rel: 'stylesheet', href: poppins200 },
      { rel: 'stylesheet', href: poppins300 },
      { rel: 'stylesheet', href: poppins400 },
      { rel: 'stylesheet', href: poppins500 },
      { rel: 'stylesheet', href: poppins600 },
      { rel: 'stylesheet', href: poppins700 },
      { rel: 'stylesheet', href: poppins800 },
      { rel: 'stylesheet', href: poppins900 },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html>
        <head>
          <HeadContent />
        </head>
        <body>
          <nav className="flex h-20 items-center justify-between bg-primary p-4 text-white">
            <Link to="/" className="flex items-center gap-1 text-2xl font-bold">
              <ChartColumnBigIcon className="text-lime-500" /> TanTracker
            </Link>
            <div>
              <SignedOut>
                <div className="flex items-center text-white">
                  <Button asChild variant="link" className="text-white">
                    <SignInButton />
                  </Button>
                  <div className="h-8 w-[1px] bg-zinc-700" />
                  <Button asChild variant="link" className="text-white">
                    <SignUpButton />
                  </Button>
                </div>
              </SignedOut>
              <SignedIn>
                <UserButton
                  showName
                  appearance={{
                    elements: {
                      userButtonOuterIdentifier: {
                        color: 'white',
                      },
                    },
                  }}
                />
              </SignedIn>
            </div>
          </nav>
          {children}
          <Scripts />
        </body>
      </html>
    </ClerkProvider>
  );
}
