'use client';

import { ThemeProvider, useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { createContext, useEffect, useRef } from 'react';

function usePrevious<T>(value: T) {
  let ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export const AppContext = createContext<{ previousPathname?: string | null }>({});

export function Providers({ children }: { children: React.ReactNode }) {
  let pathname = usePathname();
  let previousPathname = usePrevious(pathname);

  return (
    <AppContext.Provider value={{ previousPathname }}>
      <ThemeProvider attribute='class' forcedTheme='dark' disableTransitionOnChange>
        {/* <ThemeWatcher /> */}
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
}
