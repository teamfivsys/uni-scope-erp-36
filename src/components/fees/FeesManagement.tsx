import { useState } from 'react';
import { Plus, Search, Filter, Download, DollarSign, Receipt, CreditCard, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const mockFeeRecords = [
  { id: 1, studentName: 'Rahul Kumar', course: 'Computer Science', amount: '₹25,000', dueDate: '2024-08-15', status: 'Paid', paymentDate: '2024-08-10', method: 'Online' },
  { id: 2, studentName: 'Priya Sharma', course: 'Physics', amount: '₹18,000', dueDate: '2024-08-15', status: 'Due', paymentDate: null, method: null },
  { id: 3, studentName: 'Amit Patel', course: 'Fine Arts', amount: '₹15,000', dueDate: '2024-07-15', status: 'Overdue', paymentDate: null, method: null },
  { id: 4, studentName: 'Sneha Reddy', course: 'MBA', amount: '₹62,500', dueDate: '2024-08-20', status: 'Paid', paymentDate: '2024-08-18', method: 'Bank Transfer' },
];

const mockExpenses = [
  { id: 1, description: 'Faculty Salaries', amount: '₹5,50,000', category: 'Payroll', date: '2024-08-01', institute: 'Tech Academy' },
  { id: 2, description: 'Laboratory Equipment', amount: '₹2,25,000', category: 'Infrastructure', date: '2024-08-05', institute: 'Science College' },
  { id: 3, description: 'Utility Bills', amount: '₹85,000', category: 'Utilities', date: '2024-08-10', institute: 'All Institutes' },
  { id: 4, description: 'Marketing Campaign', amount: '₹1,20,000', category: 'Marketing', date: '2024-08-12', institute: 'Business School' },
];

export function FeesManagement() {
  const [feeRecords] = useState(mockFeeRecords);
  const [expenses] = useState(mockExpenses);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFeeRecords = feeRecords.filter(record =>
    record.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalRevenue = feeRecords.filter(r => r.status === 'Paid').reduce((sum, r) => sum + parseInt(r.amount.replace(/[₹,]/g, '')), 0);
  const totalDue = feeRecords.filter(r => r.status !== 'Paid').reduce((sum, r) => sum + parseInt(r.amount.replace(/[₹,]/g, '')), 0);
  const totalExpenses = expenses.reduce((sum, e) => sum + parseInt(e.amount.replace(/[₹,]/g, '')), 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Fees & Accounting</h1>
          <p className="text-muted-foreground">Manage fee collection, expenses, and financial reports</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Add Transaction
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">₹{totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Outstanding Dues</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">₹{totalDue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">-5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
            <Receipt className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{totalExpenses.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">₹{(totalRevenue - totalExpenses).toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="fees" className="w-full">
        <TabsList>
          <TabsTrigger value="fees">Fee Collection</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="reports">Financial Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="fees">
          <Card>
            <CardHeader>
              <CardTitle>Fee Collection Records</CardTitle>
              <div className="flex items-center space-x-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search fee records..."
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
                    <TableHead>Student Name</TableHead>
                    <TableHead>Course</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Payment Method</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredFeeRecords.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell className="font-medium">{record.studentName}</TableCell>
                      <TableCell>{record.course}</TableCell>
                      <TableCell>{record.amount}</TableCell>
                      <TableCell>{record.dueDate}</TableCell>
                      <TableCell>
                        <Badge variant={
                          record.status === 'Paid' ? 'default' : 
                          record.status === 'Due' ? 'secondary' : 'destructive'
                        }>
                          {record.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{record.method || '-'}</TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">
                          {record.status === 'Paid' ? 'View Receipt' : 'Collect Fee'}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="expenses">
          <Card>
            <CardHeader>
              <CardTitle>Expense Records</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Description</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Institute</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {expenses.map((expense) => (
                    <TableRow key={expense.id}>
                      <TableCell className="font-medium">{expense.description}</TableCell>
                      <TableCell>{expense.category}</TableCell>
                      <TableCell>{expense.amount}</TableCell>
                      <TableCell>{expense.date}</TableCell>
                      <TableCell>{expense.institute}</TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Revenue Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Revenue analytics chart will be displayed here</p>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">August 2024</span>
                    <span className="text-sm font-medium">₹{totalRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">July 2024</span>
                    <span className="text-sm font-medium">₹8,75,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">June 2024</span>
                    <span className="text-sm font-medium">₹9,20,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Expense Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Expense category chart will be displayed here</p>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Payroll</span>
                    <span className="text-sm font-medium">₹5,50,000 (58%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Infrastructure</span>
                    <span className="text-sm font-medium">₹2,25,000 (24%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Marketing</span>
                    <span className="text-sm font-medium">₹1,20,000 (13%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Utilities</span>
                    <span className="text-sm font-medium">₹85,000 (5%)</span>
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