import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, User, School, DollarSign, UserCheck, BookOpen } from 'lucide-react';
import { useDataStore } from '@/hooks/useDataStore';

const iconMap = {
  User,
  School,
  DollarSign,
  UserCheck,
  BookOpen
};

export function RecentActivity() {
  const { activities } = useDataStore();
  
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
          {activities.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">No recent activities</p>
          ) : (
            activities.map((activity) => {
              const IconComponent = iconMap[activity.icon as keyof typeof iconMap] || User;
              return (
              <div key={activity.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className={`w-8 h-8 rounded-full ${activity.color} flex items-center justify-center flex-shrink-0`}>
                  <IconComponent className="w-4 h-4 text-white" />
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
            );
            })
          )}
        </div>
      </CardContent>
    </Card>
  );
}