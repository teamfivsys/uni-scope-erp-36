import { ERPLayout } from '@/components/layout/ERPLayout';
import { CourseManagement } from '@/components/courses/CourseManagement';

export default function CoursesPage() {
  return (
    <ERPLayout>
      <CourseManagement />
    </ERPLayout>
  );
}