// app/Providers.tsx
'use client';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastProvider } from '@radix-ui/react-toast';


const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SessionProvider>
          <ToastProvider>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </ToastProvider>
        </SessionProvider>
      </ThemeProvider>
    </>
  );
};
