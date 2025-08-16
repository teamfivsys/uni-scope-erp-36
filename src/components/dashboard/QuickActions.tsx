import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, UserPlus, School, FileText, Mail, BarChart3 } from 'lucide-react';

const actions = [
  {
    title: 'Add Institute',
    description: 'Register new educational institute',
    icon: School,
    color: 'bg-primary hover:bg-primary/90',
  },
  {
    title: 'Enroll Student',
    description: 'Add new student to system',
    icon: UserPlus,
    color: 'bg-success hover:bg-success/90',
  },
  {
    title: 'Generate Report',
    description: 'Create attendance or fee reports',
    icon: FileText,
    color: 'bg-info hover:bg-info/90',
  },
  {
    title: 'Send Announcement',
    description: 'Broadcast message to institutes',
    icon: Mail,
    color: 'bg-warning hover:bg-warning/90',
  },
  {
    title: 'View Analytics',
    description: 'Check performance metrics',
    icon: BarChart3,
    color: 'bg-accent hover:bg-accent/90 text-accent-foreground',
  },
];

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Quick Actions</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`w-full justify-start h-auto p-4 ${action.color} text-white border-0`}
            >
              <action.icon className="w-5 h-5 mr-3 flex-shrink-0" />
              <div className="text-left">
                <div className="font-medium">{action.title}</div>
                <div className="text-sm opacity-90">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}