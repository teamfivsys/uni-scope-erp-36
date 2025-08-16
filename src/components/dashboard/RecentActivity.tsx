import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, User, School, DollarSign } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'student',
    title: 'New student enrollment',
    description: 'Rahul Kumar enrolled in Computer Science batch',
    institute: 'Tech Academy',
    time: '2 minutes ago',
    icon: User,
    color: 'bg-info',
  },
  {
    id: 2,
    type: 'payment',
    title: 'Fee payment received',
    description: '₹15,000 received from Priya Sharma',
    institute: 'Science College',
    time: '15 minutes ago',
    icon: DollarSign,
    color: 'bg-success',
  },
  {
    id: 3,
    type: 'institute',
    title: 'New institute added',
    description: 'Creative Arts Academy has been successfully added',
    institute: 'System',
    time: '1 hour ago',
    icon: School,
    color: 'bg-primary',
  },
  {
    id: 4,
    type: 'student',
    title: 'Batch assignment',
    description: '25 students assigned to Physics Advanced batch',
    institute: 'Science College',
    time: '2 hours ago',
    icon: User,
    color: 'bg-warning',
  },
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Clock className="w-5 h-5" />
          <span>Recent Activity</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className={`w-8 h-8 rounded-full ${activity.color} flex items-center justify-center flex-shrink-0`}>
                <activity.icon className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground">{activity.title}</p>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <Badge variant="secondary" className="text-xs">{activity.institute}</Badge>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}