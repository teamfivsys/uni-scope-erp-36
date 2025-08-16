import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Phone, Eye } from 'lucide-react';

const institutes = [
  {
    id: 1,
    name: 'Tech Academy',
    location: 'Mumbai, Maharashtra',
    students: 425,
    staff: 38,
    status: 'Active',
    type: 'Engineering College',
  },
  {
    id: 2,
    name: 'Science College',
    location: 'Delhi, NCR',
    students: 652,
    staff: 74,
    status: 'Active',
    type: 'Degree College',
  },
  {
    id: 3,
    name: 'Creative Arts Academy',
    location: 'Bangalore, Karnataka',
    students: 187,
    staff: 23,
    status: 'Active',
    type: 'Arts Institute',
  },
  {
    id: 4,
    name: 'Business School',
    location: 'Chennai, Tamil Nadu',
    students: 298,
    staff: 35,
    status: 'Active',
    type: 'Management Institute',
  },
];

export function InstituteOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Institute Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {institutes.map((institute) => (
            <div key={institute.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {institute.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{institute.name}</h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3 mr-1" />
                      {institute.location}
                    </div>
                    <Badge variant="secondary" className="text-xs">{institute.type}</Badge>
                  </div>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-3 h-3 mr-1" />
                      {institute.students} Students
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Phone className="w-3 h-3 mr-1" />
                      {institute.staff} Staff
                    </div>
                    <Badge 
                      variant={institute.status === 'Active' ? 'default' : 'secondary'}
                      className="text-xs bg-success text-success-foreground"
                    >
                      {institute.status}
                    </Badge>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                View Details
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}