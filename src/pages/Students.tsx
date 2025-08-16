import { ERPLayout } from '@/components/layout/ERPLayout';
import { StudentManagement } from '@/components/students/StudentManagement';

export default function StudentsPage() {
  return (
    <ERPLayout>
      <StudentManagement />
    </ERPLayout>
  );
}