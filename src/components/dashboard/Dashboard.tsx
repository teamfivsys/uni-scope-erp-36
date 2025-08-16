import { StatsCards } from './StatsCards';
import { RecentActivity } from './RecentActivity';
import { QuickActions } from './QuickActions';
import { InstituteOverview } from './InstituteOverview';

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Welcome back, Admin</h1>
        <p className="text-muted-foreground">Here's what's happening across your institutes today.</p>
      </div>

      <StatsCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <InstituteOverview />
          <RecentActivity />
        </div>
        <div>
          <QuickActions />
        </div>
      </div>
    </div>
  );
}