import { useState } from 'react';
import { Plus, Search, Filter, FileText, Calendar, Award, BarChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const mockExams = [
  { id: 1, name: 'Mid-term Exam', course: 'Computer Science', date: '2024-09-15', time: '10:00 AM', duration: '3 hours', totalMarks: 100, status: 'Scheduled' },
  { id: 2, name: 'Unit Test 1', course: 'Physics', date: '2024-08-25', time: '2:00 PM', duration: '2 hours', totalMarks: 50, status: 'Completed' },
  { id: 3, name: 'Final Exam', course: 'Fine Arts', date: '2024-10-20', time: '9:00 AM', duration: '4 hours', totalMarks: 200, status: 'Scheduled' },
  { id: 4, name: 'Project Evaluation', course: 'MBA', date: '2024-08-30', time: '11:00 AM', duration: '2 hours', totalMarks: 75, status: 'In Progress' },
];

const mockResults = [
  { id: 1, studentName: 'Rahul Kumar', exam: 'Unit Test 1', marksObtained: 42, totalMarks: 50, percentage: 84, grade: 'A', status: 'Published' },
  { id: 2, studentName: 'Priya Sharma', exam: 'Unit Test 1', marksObtained: 38, totalMarks: 50, percentage: 76, grade: 'B+', status: 'Published' },
  { id: 3, studentName: 'Amit Patel', exam: 'Unit Test 1', marksObtained: 45, totalMarks: 50, percentage: 90, grade: 'A+', status: 'Published' },
  { id: 4, studentName: 'Sneha Reddy', exam: 'Project Evaluation', marksObtained: 0, totalMarks: 75, percentage: 0, grade: 'Pending', status: 'Pending' },
];

export function ExamManagement() {
  const [exams] = useState(mockExams);
  const [results] = useState(mockResults);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredExams = exams.filter(exam =>
    exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exam.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Exam & Result Management</h1>
          <p className="text-muted-foreground">Schedule exams, manage marks, and publish results</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Schedule Exam
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Exams</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{exams.length}</div>
            <p className="text-xs text-muted-foreground">This semester</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Scheduled Exams</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{exams.filter(e => e.status === 'Scheduled').length}</div>
            <p className="text-xs text-muted-foreground">Upcoming exams</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Published Results</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{results.filter(r => r.status === 'Published').length}</div>
            <p className="text-xs text-muted-foreground">Results available</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(results.filter(r => r.status === 'Published').reduce((sum, r) => sum + r.percentage, 0) / results.filter(r => r.status === 'Published').length)}%
            </div>
            <p className="text-xs text-muted-foreground">Class average</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="exams" className="w-full">
        <TabsList>
          <TabsTrigger value="exams">Exam Schedule</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="exams">
          <Card>
            <CardHeader>
              <CardTitle>Exam Schedule</CardTitle>
              <div className="flex items-center space-x-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search exams..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Exam Name</TableHead>
                    <TableHead>Course</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Total Marks</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredExams.map((exam) => (
                    <TableRow key={exam.id}>
                      <TableCell className="font-medium">{exam.name}</TableCell>
                      <TableCell>{exam.course}</TableCell>
                      <TableCell>{exam.date}</TableCell>
                      <TableCell>{exam.time}</TableCell>
                      <TableCell>{exam.duration}</TableCell>
                      <TableCell>{exam.totalMarks}</TableCell>
                      <TableCell>
                        <Badge variant={
                          exam.status === 'Completed' ? 'default' :
                          exam.status === 'In Progress' ? 'secondary' : 'outline'
                        }>
                          {exam.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">
                          {exam.status === 'Completed' ? 'View Results' : exam.status === 'In Progress' ? 'Enter Marks' : 'Edit'}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="results">
          <Card>
            <CardHeader>
              <CardTitle>Exam Results</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student Name</TableHead>
                    <TableHead>Exam</TableHead>
                    <TableHead>Marks Obtained</TableHead>
                    <TableHead>Total Marks</TableHead>
                    <TableHead>Percentage</TableHead>
                    <TableHead>Grade</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {results.map((result) => (
                    <TableRow key={result.id}>
                      <TableCell className="font-medium">{result.studentName}</TableCell>
                      <TableCell>{result.exam}</TableCell>
                      <TableCell>{result.marksObtained}</TableCell>
                      <TableCell>{result.totalMarks}</TableCell>
                      <TableCell>{result.percentage}%</TableCell>
                      <TableCell>
                        <Badge variant={
                          result.grade === 'A+' || result.grade === 'A' ? 'default' :
                          result.grade === 'B+' || result.grade === 'B' ? 'secondary' :
                          result.grade === 'Pending' ? 'outline' : 'destructive'
                        }>
                          {result.grade}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={result.status === 'Published' ? 'default' : 'secondary'}>
                          {result.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="analytics">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Grade Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">A+ Grade</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div className="bg-success h-2 rounded-full" style={{width: '33%'}}></div>
                      </div>
                      <span className="text-sm font-medium">33%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">A Grade</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '33%'}}></div>
                      </div>
                      <span className="text-sm font-medium">33%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">B+ Grade</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div className="bg-secondary h-2 rounded-full" style={{width: '33%'}}></div>
                      </div>
                      <span className="text-sm font-medium">33%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Performance Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium">Highest Score: 90%</p>
                    <p className="text-sm text-muted-foreground">Amit Patel - Unit Test 1</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Class Average: 83%</p>
                    <p className="text-sm text-muted-foreground">Above institution average</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Passing Rate: 100%</p>
                    <p className="text-sm text-muted-foreground">All students cleared</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}