import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import Signup from '@/pages/Signup.tsx'
import Login from '@/pages/Login.tsx'
import Home from '@/pages/dashboard/index.tsx'
import Dashboard from '@/pages/dashboard/Dashboard'
import AdminDashboard from '@/pages/dashboard/AdminDashboard'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Home />}>
            <Route index element={<Dashboard />} />
            <Route path="admin" element={<AdminDashboard />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
