// Mock data for the ERP system
export interface Institute {
  id: number;
  name: string;
  type: string;
  location: string;
  city: string;
  state: string;
  students: number;
  staff: number;
  status: 'Active' | 'Inactive';
  established: string;
  email: string;
  phone: string;
  address: string;
  description?: string;
  website?: string;
  principal: string;
}

export interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  instituteId: number;
  instituteName: string;
  course: string;
  batch: string;
  admissionDate: string;
  status: 'Active' | 'Inactive' | 'Graduated';
  feeStatus: 'Paid' | 'Pending' | 'Overdue';
  rollNumber: string;
  dateOfBirth: string;
  address: string;
  parentName: string;
  parentPhone: string;
  totalFees: number;
  paidFees: number;
}

export interface Staff {
  id: number;
  name: string;
  email: string;
  phone: string;
  instituteId: number;
  instituteName: string;
  department: string;
  position: string;
  joinDate: string;
  status: 'Active' | 'Inactive' | 'On Leave';
  salary: number;
  qualification: string;
  experience: string;
  address: string;
  employeeId: string;
}

export interface Course {
  id: number;
  name: string;
  instituteId: number;
  instituteName: string;
  duration: string;
  fees: number;
  description: string;
  totalSeats: number;
  availableSeats: number;
  startDate: string;
  endDate: string;
  status: 'Active' | 'Inactive' | 'Completed';
}

export interface Activity {
  id: number;
  type: 'student' | 'payment' | 'institute' | 'staff' | 'course' | 'exam';
  title: string;
  description: string;
  institute: string;
  time: string;
  icon: string;
  color: string;
  userId?: number;
  timestamp: Date;
}

// Mock Institutes
export const mockInstitutes: Institute[] = [
  {
    id: 1,
    name: 'Tech Academy',
    type: 'Engineering College',
    location: 'Mumbai, Maharashtra',
    city: 'Mumbai',
    state: 'Maharashtra',
    students: 1245,
    staff: 89,
    status: 'Active',
    established: '2010',
    email: 'admin@techacademy.edu',
    phone: '+91 98765 43210',
    address: '123 Tech Street, Andheri East, Mumbai - 400069',
    description: 'Premier engineering institute focusing on computer science and technology',
    website: 'https://techacademy.edu',
    principal: 'Dr. Rajesh Kumar'
  },
  {
    id: 2,
    name: 'Science College',
    type: 'General College',
    location: 'Delhi, Delhi',
    city: 'Delhi',
    state: 'Delhi',
    students: 987,
    staff: 72,
    status: 'Active',
    established: '2005',
    email: 'info@sciencecollege.edu',
    phone: '+91 87654 32109',
    address: '456 Science Avenue, Connaught Place, Delhi - 110001',
    description: 'Leading science college with excellent research facilities',
    website: 'https://sciencecollege.edu',
    principal: 'Dr. Priya Sharma'
  },
  {
    id: 3,
    name: 'Creative Arts Academy',
    type: 'Arts College',
    location: 'Bangalore, Karnataka',
    city: 'Bangalore',
    state: 'Karnataka',
    students: 456,
    staff: 34,
    status: 'Active',
    established: '2015',
    email: 'contact@creativearts.edu',
    phone: '+91 76543 21098',
    address: '789 Art Boulevard, Koramangala, Bangalore - 560034',
    description: 'Innovative arts college nurturing creative talents',
    website: 'https://creativearts.edu',
    principal: 'Prof. Anita Reddy'
  },
  {
    id: 4,
    name: 'Business School',
    type: 'Management Institute',
    location: 'Pune, Maharashtra',
    city: 'Pune',
    state: 'Maharashtra',
    students: 789,
    staff: 56,
    status: 'Active',
    established: '2012',
    email: 'admin@businessschool.edu',
    phone: '+91 65432 10987',
    address: '321 Business Park, Hinjewadi, Pune - 411057',
    description: 'Top-tier business school with industry connections',
    website: 'https://businessschool.edu',
    principal: 'Dr. Vikram Patel'
  },
  {
    id: 5,
    name: 'Medical Institute',
    type: 'Medical College',
    location: 'Chennai, Tamil Nadu',
    city: 'Chennai',
    state: 'Tamil Nadu',
    students: 654,
    staff: 98,
    status: 'Active',
    established: '2008',
    email: 'info@medicalinstitute.edu',
    phone: '+91 54321 09876',
    address: '654 Medical Street, T. Nagar, Chennai - 600017',
    description: 'Renowned medical college with state-of-the-art facilities',
    website: 'https://medicalinstitute.edu',
    principal: 'Dr. Meera Krishnan'
  }
];

// Mock Students
export const mockStudents: Student[] = [
  {
    id: 1,
    name: 'Rahul Kumar',
    email: 'rahul.kumar@student.edu',
    phone: '+91 98765 43210',
    instituteId: 1,
    instituteName: 'Tech Academy',
    course: 'Computer Science Engineering',
    batch: '2024-A',
    admissionDate: '2024-07-15',
    status: 'Active',
    feeStatus: 'Paid',
    rollNumber: 'TA2024001',
    dateOfBirth: '2005-03-15',
    address: '123 Student Colony, Mumbai',
    parentName: 'Suresh Kumar',
    parentPhone: '+91 87654 32109',
    totalFees: 150000,
    paidFees: 150000
  },
  {
    id: 2,
    name: 'Priya Sharma',
    email: 'priya.sharma@student.edu',
    phone: '+91 76543 21098',
    instituteId: 2,
    instituteName: 'Science College',
    course: 'Physics Honours',
    batch: '2024-B',
    admissionDate: '2024-07-20',
    status: 'Active',
    feeStatus: 'Pending',
    rollNumber: 'SC2024002',
    dateOfBirth: '2005-08-22',
    address: '456 Science Park, Delhi',
    parentName: 'Ravi Sharma',
    parentPhone: '+91 76543 21087',
    totalFees: 120000,
    paidFees: 80000
  },
  {
    id: 3,
    name: 'Arjun Patel',
    email: 'arjun.patel@student.edu',
    phone: '+91 65432 10987',
    instituteId: 3,
    instituteName: 'Creative Arts Academy',
    course: 'Fine Arts',
    batch: '2024-C',
    admissionDate: '2024-08-01',
    status: 'Active',
    feeStatus: 'Paid',
    rollNumber: 'CAA2024003',
    dateOfBirth: '2005-12-10',
    address: '789 Art Street, Bangalore',
    parentName: 'Deepak Patel',
    parentPhone: '+91 65432 10976',
    totalFees: 100000,
    paidFees: 100000
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    email: 'sneha.reddy@student.edu',
    phone: '+91 54321 09876',
    instituteId: 4,
    instituteName: 'Business School',
    course: 'MBA',
    batch: '2024-D',
    admissionDate: '2024-06-15',
    status: 'Active',
    feeStatus: 'Overdue',
    rollNumber: 'BS2024004',
    dateOfBirth: '2000-05-18',
    address: '321 Business Avenue, Pune',
    parentName: 'Srinivas Reddy',
    parentPhone: '+91 54321 09865',
    totalFees: 200000,
    paidFees: 100000
  }
];

// Mock Staff
export const mockStaff: Staff[] = [
  {
    id: 1,
    name: 'Dr. Rajesh Gupta',
    email: 'rajesh.gupta@techacademy.edu',
    phone: '+91 98765 43210',
    instituteId: 1,
    instituteName: 'Tech Academy',
    department: 'Computer Science',
    position: 'Professor',
    joinDate: '2018-03-15',
    status: 'Active',
    salary: 80000,
    qualification: 'PhD in Computer Science',
    experience: '12 years',
    address: '123 Faculty Colony, Mumbai',
    employeeId: 'TA2018001'
  },
  {
    id: 2,
    name: 'Prof. Sunita Verma',
    email: 'sunita.verma@sciencecollege.edu',
    phone: '+91 87654 32109',
    instituteId: 2,
    instituteName: 'Science College',
    department: 'Physics',
    position: 'Associate Professor',
    joinDate: '2020-07-20',
    status: 'Active',
    salary: 70000,
    qualification: 'PhD in Physics',
    experience: '8 years',
    address: '456 Science Colony, Delhi',
    employeeId: 'SC2020002'
  },
  {
    id: 3,
    name: 'Mr. Anil Kumar',
    email: 'anil.kumar@creativearts.edu',
    phone: '+91 76543 21098',
    instituteId: 3,
    instituteName: 'Creative Arts Academy',
    department: 'Fine Arts',
    position: 'Assistant Professor',
    joinDate: '2021-01-10',
    status: 'Active',
    salary: 60000,
    qualification: 'Masters in Fine Arts',
    experience: '5 years',
    address: '789 Art Colony, Bangalore',
    employeeId: 'CAA2021003'
  }
];

// Mock Courses
export const mockCourses: Course[] = [
  {
    id: 1,
    name: 'Computer Science Engineering',
    instituteId: 1,
    instituteName: 'Tech Academy',
    duration: '4 years',
    fees: 150000,
    description: 'Comprehensive computer science program with focus on modern technologies',
    totalSeats: 120,
    availableSeats: 15,
    startDate: '2024-07-01',
    endDate: '2028-06-30',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Physics Honours',
    instituteId: 2,
    instituteName: 'Science College',
    duration: '3 years',
    fees: 120000,
    description: 'Advanced physics program with research opportunities',
    totalSeats: 80,
    availableSeats: 25,
    startDate: '2024-07-15',
    endDate: '2027-06-30',
    status: 'Active'
  },
  {
    id: 3,
    name: 'Fine Arts',
    instituteId: 3,
    instituteName: 'Creative Arts Academy',
    duration: '3 years',
    fees: 100000,
    description: 'Creative arts program focusing on various artistic mediums',
    totalSeats: 60,
    availableSeats: 20,
    startDate: '2024-08-01',
    endDate: '2027-07-31',
    status: 'Active'
  },
  {
    id: 4,
    name: 'MBA',
    instituteId: 4,
    instituteName: 'Business School',
    duration: '2 years',
    fees: 200000,
    description: 'Master of Business Administration with specialization options',
    totalSeats: 100,
    availableSeats: 30,
    startDate: '2024-06-01',
    endDate: '2026-05-31',
    status: 'Active'
  }
];

// Recent Activities
export const mockActivities: Activity[] = [
  {
    id: 1,
    type: 'student',
    title: 'New student enrollment',
    description: 'Rahul Kumar enrolled in Computer Science batch',
    institute: 'Tech Academy',
    time: '2 minutes ago',
    icon: 'User',
    color: 'bg-info',
    userId: 1,
    timestamp: new Date(Date.now() - 2 * 60 * 1000)
  },
  {
    id: 2,
    type: 'payment',
    title: 'Fee payment received',
    description: '₹15,000 received from Priya Sharma',
    institute: 'Science College',
    time: '15 minutes ago',
    icon: 'DollarSign',
    color: 'bg-success',
    userId: 2,
    timestamp: new Date(Date.now() - 15 * 60 * 1000)
  },
  {
    id: 3,
    type: 'institute',
    title: 'New institute added',
    description: 'Creative Arts Academy has been successfully added',
    institute: 'System',
    time: '1 hour ago',
    icon: 'School',
    color: 'bg-primary',
    timestamp: new Date(Date.now() - 60 * 60 * 1000)
  },
  {
    id: 4,
    type: 'student',
    title: 'Batch assignment',
    description: '25 students assigned to Physics Advanced batch',
    institute: 'Science College',
    time: '2 hours ago',
    icon: 'User',
    color: 'bg-warning',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000)
  },
  {
    id: 5,
    type: 'staff',
    title: 'New staff member',
    description: 'Dr. Rajesh Gupta joined as Professor',
    institute: 'Tech Academy',
    time: '3 hours ago',
    icon: 'UserCheck',
    color: 'bg-accent',
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000)
  }
];

// Statistics calculation functions
export const calculateStats = () => {
  const totalInstitutes = mockInstitutes.length;
  const totalStudents = mockStudents.length;
  const totalStaff = mockStaff.length;
  const activeInstitutes = mockInstitutes.filter(i => i.status === 'Active').length;
  const activeStudents = mockStudents.filter(s => s.status === 'Active').length;
  const activeStaff = mockStaff.filter(s => s.status === 'Active').length;
  
  const totalRevenue = mockStudents.reduce((sum, student) => sum + student.paidFees, 0);
  const pendingFees = mockStudents.reduce((sum, student) => sum + (student.totalFees - student.paidFees), 0);
  
  return {
    totalInstitutes,
    totalStudents,
    totalStaff,
    activeInstitutes,
    activeStudents,
    activeStaff,
    totalRevenue,
    pendingFees,
    monthlyRevenue: Math.floor(totalRevenue * 0.1), // Mock monthly revenue
    revenueGrowth: '+12.5%',
    studentGrowth: '+8.3%',
    instituteGrowth: '+2'
  };
};