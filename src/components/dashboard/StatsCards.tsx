import { School, Users, UserCheck, DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  {
    name: 'Total Institutes',
    value: '12',
    change: '+2',
    changeType: 'positive',
    icon: School,
    description: 'Active institutes'
  },
  {
    name: 'Total Students',
    value: '2,847',
    change: '+156',
    changeType: 'positive',
    icon: Users,
    description: 'Enrolled students'
  },
  {
    name: 'Staff Members',
    value: '342',
    change: '+18',
    changeType: 'positive',
    icon: UserCheck,
    description: 'Active staff'
  },
  {
    name: 'Monthly Revenue',
    value: '₹18.4L',
    change: '-2.3%',
    changeType: 'negative',
    icon: DollarSign,
    description: 'This month'
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
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