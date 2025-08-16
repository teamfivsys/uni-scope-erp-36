import { useState, useEffect } from 'react';
import { 
  Institute, 
  Student, 
  Staff, 
  Course, 
  Activity,
  mockInstitutes, 
  mockStudents, 
  mockStaff, 
  mockCourses, 
  mockActivities,
  calculateStats 
} from '@/lib/data/mockData';
import { useToast } from '@/hooks/use-toast';

const STORAGE_KEYS = {
  institutes: 'erp_institutes',
  students: 'erp_students',
  staff: 'erp_staff',
  courses: 'erp_courses',
  activities: 'erp_activities'
};

// Load data from localStorage or use mock data
const loadFromStorage = <T>(key: string, fallback: T[]): T[] => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
};

// Save data to localStorage
const saveToStorage = <T>(key: string, data: T[]) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch {
    console.warn('Failed to save to localStorage');
  }
};

export const useDataStore = () => {
  const { toast } = useToast();
  
  // State management
  const [institutes, setInstitutes] = useState<Institute[]>(() => 
    loadFromStorage(STORAGE_KEYS.institutes, mockInstitutes)
  );
  const [students, setStudents] = useState<Student[]>(() => 
    loadFromStorage(STORAGE_KEYS.students, mockStudents)
  );
  const [staff, setStaff] = useState<Staff[]>(() => 
    loadFromStorage(STORAGE_KEYS.staff, mockStaff)
  );
  const [courses, setCourses] = useState<Course[]>(() => 
    loadFromStorage(STORAGE_KEYS.courses, mockCourses)
  );
  const [activities, setActivities] = useState<Activity[]>(() => 
    loadFromStorage(STORAGE_KEYS.activities, mockActivities)
  );

  // Auto-save to localStorage when data changes
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.institutes, institutes);
  }, [institutes]);
  
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.students, students);
  }, [students]);
  
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.staff, staff);
  }, [staff]);
  
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.courses, courses);
  }, [courses]);
  
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.activities, activities);
  }, [activities]);

  // Add activity helper
  const addActivity = (activity: Omit<Activity, 'id' | 'timestamp'>) => {
    const newActivity: Activity = {
      ...activity,
      id: Date.now(),
      timestamp: new Date()
    };
    setActivities(prev => [newActivity, ...prev.slice(0, 49)]); // Keep only 50 activities
  };

  // Institute operations
  const addInstitute = (instituteData: Omit<Institute, 'id'>) => {
    const newInstitute = {
      ...instituteData,
      id: Date.now()
    };
    setInstitutes(prev => [...prev, newInstitute]);
    addActivity({
      type: 'institute',
      title: 'New institute added',
      description: `${newInstitute.name} has been successfully added`,
      institute: 'System',
      time: 'just now',
      icon: 'School',
      color: 'bg-primary'
    });
    toast({
      title: "Success",
      description: `${newInstitute.name} has been added successfully.`
    });
    return newInstitute;
  };

  const updateInstitute = (id: number, updates: Partial<Institute>) => {
    setInstitutes(prev => prev.map(inst => 
      inst.id === id ? { ...inst, ...updates } : inst
    ));
    const institute = institutes.find(i => i.id === id);
    if (institute) {
      addActivity({
        type: 'institute',
        title: 'Institute updated',
        description: `${institute.name} information has been updated`,
        institute: institute.name,
        time: 'just now',
        icon: 'School',
        color: 'bg-warning'
      });
      toast({
        title: "Success",
        description: `${institute.name} has been updated successfully.`
      });
    }
  };

  const deleteInstitute = (id: number) => {
    const institute = institutes.find(i => i.id === id);
    if (institute) {
      setInstitutes(prev => prev.filter(inst => inst.id !== id));
      // Also remove related students and staff
      setStudents(prev => prev.filter(s => s.instituteId !== id));
      setStaff(prev => prev.filter(s => s.instituteId !== id));
      setCourses(prev => prev.filter(c => c.instituteId !== id));
      
      addActivity({
        type: 'institute',
        title: 'Institute removed',
        description: `${institute.name} has been removed from the system`,
        institute: 'System',
        time: 'just now',
        icon: 'School',
        color: 'bg-destructive'
      });
      toast({
        title: "Success",
        description: `${institute.name} has been removed successfully.`
      });
    }
  };

  // Student operations
  const addStudent = (studentData: Omit<Student, 'id'>) => {
    const newStudent = {
      ...studentData,
      id: Date.now()
    };
    setStudents(prev => [...prev, newStudent]);
    addActivity({
      type: 'student',
      title: 'New student enrollment',
      description: `${newStudent.name} enrolled in ${newStudent.course}`,
      institute: newStudent.instituteName,
      time: 'just now',
      icon: 'User',
      color: 'bg-info',
      userId: newStudent.id
    });
    toast({
      title: "Success",
      description: `${newStudent.name} has been enrolled successfully.`
    });
    return newStudent;
  };

  const updateStudent = (id: number, updates: Partial<Student>) => {
    setStudents(prev => prev.map(student => 
      student.id === id ? { ...student, ...updates } : student
    ));
    const student = students.find(s => s.id === id);
    if (student) {
      addActivity({
        type: 'student',
        title: 'Student information updated',
        description: `${student.name}'s information has been updated`,
        institute: student.instituteName,
        time: 'just now',
        icon: 'User',
        color: 'bg-warning',
        userId: student.id
      });
      toast({
        title: "Success",
        description: `${student.name}'s information has been updated.`
      });
    }
  };

  const deleteStudent = (id: number) => {
    const student = students.find(s => s.id === id);
    if (student) {
      setStudents(prev => prev.filter(s => s.id !== id));
      addActivity({
        type: 'student',
        title: 'Student removed',
        description: `${student.name} has been removed from the system`,
        institute: student.instituteName,
        time: 'just now',
        icon: 'User',
        color: 'bg-destructive',
        userId: student.id
      });
      toast({
        title: "Success",
        description: `${student.name} has been removed successfully.`
      });
    }
  };

  // Staff operations
  const addStaff = (staffData: Omit<Staff, 'id'>) => {
    const newStaff = {
      ...staffData,
      id: Date.now()
    };
    setStaff(prev => [...prev, newStaff]);
    addActivity({
      type: 'staff',
      title: 'New staff member',
      description: `${newStaff.name} joined as ${newStaff.position}`,
      institute: newStaff.instituteName,
      time: 'just now',
      icon: 'UserCheck',
      color: 'bg-accent',
      userId: newStaff.id
    });
    toast({
      title: "Success",
      description: `${newStaff.name} has been added to the staff.`
    });
    return newStaff;
  };

  const updateStaff = (id: number, updates: Partial<Staff>) => {
    setStaff(prev => prev.map(member => 
      member.id === id ? { ...member, ...updates } : member
    ));
    const member = staff.find(s => s.id === id);
    if (member) {
      addActivity({
        type: 'staff',
        title: 'Staff information updated',
        description: `${member.name}'s information has been updated`,
        institute: member.instituteName,
        time: 'just now',
        icon: 'UserCheck',
        color: 'bg-warning',
        userId: member.id
      });
      toast({
        title: "Success",
        description: `${member.name}'s information has been updated.`
      });
    }
  };

  const deleteStaff = (id: number) => {
    const member = staff.find(s => s.id === id);
    if (member) {
      setStaff(prev => prev.filter(s => s.id !== id));
      addActivity({
        type: 'staff',
        title: 'Staff member removed',
        description: `${member.name} has been removed from the staff`,
        institute: member.instituteName,
        time: 'just now',
        icon: 'UserCheck',
        color: 'bg-destructive',
        userId: member.id
      });
      toast({
        title: "Success",
        description: `${member.name} has been removed from the staff.`
      });
    }
  };

  // Course operations
  const addCourse = (courseData: Omit<Course, 'id'>) => {
    const newCourse = {
      ...courseData,
      id: Date.now()
    };
    setCourses(prev => [...prev, newCourse]);
    addActivity({
      type: 'course',
      title: 'New course added',
      description: `${newCourse.name} course has been added`,
      institute: newCourse.instituteName,
      time: 'just now',
      icon: 'BookOpen',
      color: 'bg-success'
    });
    toast({
      title: "Success",
      description: `${newCourse.name} course has been added successfully.`
    });
    return newCourse;
  };

  const updateCourse = (id: number, updates: Partial<Course>) => {
    setCourses(prev => prev.map(course => 
      course.id === id ? { ...course, ...updates } : course
    ));
    const course = courses.find(c => c.id === id);
    if (course) {
      toast({
        title: "Success",
        description: `${course.name} course has been updated.`
      });
    }
  };

  const deleteCourse = (id: number) => {
    const course = courses.find(c => c.id === id);
    if (course) {
      setCourses(prev => prev.filter(c => c.id !== id));
      toast({
        title: "Success",
        description: `${course.name} course has been removed.`
      });
    }
  };

  // Get data with filters
  const getFilteredData = (searchTerm: string = '') => {
    const term = searchTerm.toLowerCase();
    return {
      institutes: institutes.filter(i => 
        i.name.toLowerCase().includes(term) ||
        i.type.toLowerCase().includes(term) ||
        i.location.toLowerCase().includes(term)
      ),
      students: students.filter(s => 
        s.name.toLowerCase().includes(term) ||
        s.email.toLowerCase().includes(term) ||
        s.course.toLowerCase().includes(term) ||
        s.instituteName.toLowerCase().includes(term)
      ),
      staff: staff.filter(s => 
        s.name.toLowerCase().includes(term) ||
        s.email.toLowerCase().includes(term) ||
        s.department.toLowerCase().includes(term) ||
        s.instituteName.toLowerCase().includes(term)
      ),
      courses: courses.filter(c => 
        c.name.toLowerCase().includes(term) ||
        c.instituteName.toLowerCase().includes(term)
      )
    };
  };

  // Reset to demo data
  const resetToDemo = () => {
    setInstitutes(mockInstitutes);
    setStudents(mockStudents);
    setStaff(mockStaff);
    setCourses(mockCourses);
    setActivities(mockActivities);
    toast({
      title: "Demo Data Loaded",
      description: "All data has been reset to demo values."
    });
  };

  // Calculate current statistics
  const stats = calculateStats();

  return {
    // Data
    institutes,
    students,
    staff,
    courses,
    activities: activities.slice(0, 10), // Show only recent 10
    stats,
    
    // Institute operations
    addInstitute,
    updateInstitute,
    deleteInstitute,
    
    // Student operations
    addStudent,
    updateStudent,
    deleteStudent,
    
    // Staff operations
    addStaff,
    updateStaff,
    deleteStaff,
    
    // Course operations
    addCourse,
    updateCourse,
    deleteCourse,
    
    // Utility functions
    getFilteredData,
    resetToDemo,
    addActivity
  };
};