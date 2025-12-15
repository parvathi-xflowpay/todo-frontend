'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools'
import React from 'react';
import { useState } from 'react';

const queryClient = new QueryClient();

export default function QueryProvider({children}: {children: React.ReactNode}) {
const [isOpen, setIsOpen] = React.useState(false)
  return (
    <QueryClientProvider client={queryClient}>
        {children}
        <button onClick={() => setIsOpen(!isOpen)}> {`${isOpen ? 'Close' : 'Open'} the devtools panel`} </button>
        {isOpen && <ReactQueryDevtoolsPanel onClose={() => setIsOpen(false)} />}
    </QueryClientProvider>
  )
}
