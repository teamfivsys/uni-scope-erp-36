import { School, Users, UserCheck, DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useDataStore } from '@/hooks/useDataStore';

export function StatsCards() {
  const { stats } = useDataStore();
  
  const statsData = [
    {
      name: 'Total Institutes',
      value: stats.totalInstitutes.toString(),
      change: stats.instituteGrowth,
      changeType: 'positive' as const,
      icon: School,
      description: 'Active institutes'
    },
    {
      name: 'Total Students',
      value: stats.totalStudents.toLocaleString(),
      change: stats.studentGrowth,
      changeType: 'positive' as const,
      icon: Users,
      description: 'Enrolled students'
    },
    {
      name: 'Staff Members',
      value: stats.totalStaff.toString(),
      change: '+18',
      changeType: 'positive' as const,
      icon: UserCheck,
      description: 'Active staff'
    },
    {
      name: 'Monthly Revenue',
      value: `₹${(stats.monthlyRevenue / 100000).toFixed(1)}L`,
      change: stats.revenueGrowth,
      changeType: stats.revenueGrowth.startsWith('+') ? 'positive' as const : 'negative' as const,
      icon: DollarSign,
      description: 'This month'
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {statsData.map((stat, index) => (
        <Card key={index} className="bg-gradient-card shadow-elegant border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
                <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                <div className="flex items-center mt-2">
                  {stat.changeType === 'positive' ? (
                    <TrendingUp className="w-4 h-4 text-success mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-destructive mr-1" />
                  )}
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'positive' ? 'text-success' : 'text-destructive'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-muted-foreground ml-1">from last month</span>
                </div>
              </div>
              <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}