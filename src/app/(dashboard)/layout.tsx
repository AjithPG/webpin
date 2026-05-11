import { AppShell } from '@/components/features/layout/AppShell';
import { Sidebar } from '@/components/features/layout/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell sidebar={<Sidebar />}>
      {children}
    </AppShell>
  );
}
