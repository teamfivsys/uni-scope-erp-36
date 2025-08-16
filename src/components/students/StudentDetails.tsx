import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Mail, Phone, MapPin, Calendar, GraduationCap, DollarSign, ClipboardList } from 'lucide-react';

interface StudentDetailsProps {
  student: any;
  open: boolean;
  onClose: () => void;
}

export function StudentDetails({ student, open, onClose }: StudentDetailsProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="" alt={student.name} />
              <AvatarFallback>{student.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <span>{student.name}</span>
              <div className="flex items-center space-x-2 mt-1">
                <Badge variant={student.status === 'Active' ? 'default' : 'secondary'}>
                  {student.status}
                </Badge>
                <Badge variant={
                  student.feeStatus === 'Paid' ? 'default' : 
                  student.feeStatus === 'Due' ? 'secondary' : 'destructive'
                }>
                  {student.feeStatus}
                </Badge>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="academic">Academic</TabsTrigger>
            <TabsTrigger value="fees">Fees</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Full Name</p>
                      <p className="text-sm text-muted-foreground">{student.name}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">{student.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">{student.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Date of Birth</p>
                      <p className="text-sm text-muted-foreground">January 15, 2000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Address</p>
                      <p className="text-sm text-muted-foreground">123 Main Street, Mumbai, Maharashtra</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Guardian Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-medium">Guardian Name</p>
                    <p className="text-sm text-muted-foreground">Mr. Rajesh Kumar</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium">Guardian Phone</p>
                    <p className="text-sm text-muted-foreground">+91 9876543220</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium">Relationship</p>
                    <p className="text-sm text-muted-foreground">Father</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium">Guardian Email</p>
                    <p className="text-sm text-muted-foreground">rajesh.kumar@example.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="academic" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Institute</CardTitle>
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-bold">{student.institute}</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Course</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-bold">{student.course}</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Batch</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-bold">{student.batch}</div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Academic Records</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium">Admission Date</p>
                    <p className="text-sm text-muted-foreground">{student.admissionDate}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium">Current Semester</p>
                    <p className="text-sm text-muted-foreground">Semester 6</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium">Overall Grade</p>
                    <p className="text-sm text-muted-foreground">A (8.5 GPA)</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium">Attendance Percentage</p>
                    <p className="text-sm text-muted-foreground">85%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="fees" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Fees</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₹1,50,000</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Paid Amount</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-success">₹1,20,000</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Due Amount</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-destructive">₹30,000</div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div>
                      <p className="font-medium">Semester 1 Fees</p>
                      <p className="text-sm text-muted-foreground">January 15, 2024</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-success">₹25,000</p>
                      <Badge variant="default">Paid</Badge>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div>
                      <p className="font-medium">Semester 2 Fees</p>
                      <p className="text-sm text-muted-foreground">March 15, 2024</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-success">₹25,000</p>
                      <Badge variant="default">Paid</Badge>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div>
                      <p className="font-medium">Semester 3 Fees</p>
                      <p className="text-sm text-muted-foreground">Due: August 15, 2024</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-destructive">₹30,000</p>
                      <Badge variant="destructive">Due</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="attendance" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Overall Attendance</CardTitle>
                  <ClipboardList className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">85%</div>
                  <p className="text-sm text-muted-foreground">153 out of 180 days</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">This Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">92%</div>
                  <p className="text-sm text-muted-foreground">23 out of 25 days</p>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Attendance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex justify-between items-center p-2 border rounded">
                      <span className="text-sm">August {25 - i}, 2024</span>
                      <Badge variant={i < 4 ? 'default' : 'destructive'}>
                        {i < 4 ? 'Present' : 'Absent'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}