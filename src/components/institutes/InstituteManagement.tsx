import { useState } from 'react';
import { Plus, Search, Filter, MoreHorizontal, Edit, Trash2, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { InstituteForm } from './InstituteForm';
import { InstituteDetails } from './InstituteDetails';
import { useDataStore } from '@/hooks/useDataStore';
import { Institute } from '@/lib/data/mockData';

export function InstituteManagement() {
  const { institutes, students, staff, deleteInstitute } = useDataStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedInstitute, setSelectedInstitute] = useState<Institute | null>(null);

  // Calculate students and staff per institute
  const institutesWithCounts = institutes.map(institute => {
    const instituteStudents = students.filter(s => s.instituteId === institute.id).length;
    const instituteStaff = staff.filter(s => s.instituteId === institute.id).length;
    
    return {
      ...institute,
      students: instituteStudents,
      staff: instituteStaff
    };
  });

  const filteredInstitutes = institutesWithCounts.filter(institute =>
    institute.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    institute.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    institute.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (institute: any) => {
    setSelectedInstitute(institute);
    setShowForm(true);
  };

  const handleView = (institute: any) => {
    setSelectedInstitute(institute);
    setShowDetails(true);
  };

  const handleAdd = () => {
    setSelectedInstitute(null);
    setShowForm(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Institute Management</h1>
          <p className="text-muted-foreground">Manage all educational institutes in your network</p>
        </div>
        <Button onClick={handleAdd} className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Institute
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Institutes Overview</CardTitle>
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search institutes..."
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
                <TableHead>Institute Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Staff</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInstitutes.map((institute) => (
                <TableRow key={institute.id}>
                  <TableCell className="font-medium">{institute.name}</TableCell>
                  <TableCell>{institute.type}</TableCell>
                  <TableCell>{institute.location}</TableCell>
                  <TableCell>{institute.students}</TableCell>
                  <TableCell>{institute.staff}</TableCell>
                  <TableCell>
                    <Badge variant={institute.status === 'Active' ? 'default' : 'secondary'}>
                      {institute.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleView(institute)}>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleEdit(institute)}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          className="text-destructive"
                          onClick={() => {
                            if (confirm(`Are you sure you want to delete ${institute.name}? This will also remove all associated students and staff.`)) {
                              deleteInstitute(institute.id);
                            }
                          }}
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {showForm && (
        <InstituteForm
          institute={selectedInstitute}
          open={showForm}
          onClose={() => setShowForm(false)}
        />
      )}

      {showDetails && selectedInstitute && (
        <InstituteDetails
          institute={selectedInstitute}
          open={showDetails}
          onClose={() => setShowDetails(false)}
        />
      )}
    </div>
  );
}