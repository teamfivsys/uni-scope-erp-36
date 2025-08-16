import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { School, Users, UserCheck, MapPin, Phone, Mail, Calendar } from 'lucide-react';

interface InstituteDetailsProps {
  institute: any;
  open: boolean;
  onClose: () => void;
}

export function InstituteDetails({ institute, open, onClose }: InstituteDetailsProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <School className="w-5 h-5" />
            <span>{institute.name}</span>
            <Badge variant={institute.status === 'Active' ? 'default' : 'secondary'}>
              {institute.status}
            </Badge>
          </DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="staff">Staff</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{institute.students}</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Staff</CardTitle>
                  <UserCheck className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{institute.staff}</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Established</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{institute.established}</div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Institute Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Institute Type</h4>
                    <p className="text-sm">{institute.type}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Principal/Director</h4>
                    <p className="text-sm">{institute.principal || 'Dr. John Smith'}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Location</h4>
                      <p className="text-sm">{institute.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Phone</h4>
                      <p className="text-sm">{institute.phone || '+91 9876543210'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Email</h4>
                      <p className="text-sm">{institute.email || 'info@' + institute.name.toLowerCase().replace(/\s+/g, '') + '.edu'}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Affiliation</h4>
                    <p className="text-sm">{institute.affiliation || 'State Education Board'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="students">
            <Card>
              <CardHeader>
                <CardTitle>Student Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Student management features will be available here.</p>
                <div className="mt-4">
                  <p className="text-sm">Total Students: <span className="font-semibold">{institute.students}</span></p>
                  <p className="text-sm">Active Students: <span className="font-semibold">{Math.floor(institute.students * 0.95)}</span></p>
                  <p className="text-sm">New Admissions (This Month): <span className="font-semibold">{Math.floor(institute.students * 0.05)}</span></p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="staff">
            <Card>
              <CardHeader>
                <CardTitle>Staff Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Staff management features will be available here.</p>
                <div className="mt-4">
                  <p className="text-sm">Total Staff: <span className="font-semibold">{institute.staff}</span></p>
                  <p className="text-sm">Teaching Staff: <span className="font-semibold">{Math.floor(institute.staff * 0.7)}</span></p>
                  <p className="text-sm">Non-Teaching Staff: <span className="font-semibold">{Math.floor(institute.staff * 0.3)}</span></p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="courses">
            <Card>
              <CardHeader>
                <CardTitle>Courses Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Course management features will be available here.</p>
                <div className="mt-4">
                  <p className="text-sm">Active Courses: <span className="font-semibold">15</span></p>
                  <p className="text-sm">Total Batches: <span className="font-semibold">42</span></p>
                  <p className="text-sm">Average Class Size: <span className="font-semibold">{Math.floor(institute.students / 42)}</span></p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}