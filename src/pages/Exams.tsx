import { ERPLayout } from '@/components/layout/ERPLayout';
import { ExamManagement } from '@/components/exams/ExamManagement';

export default function ExamsPage() {
  return (
    <ERPLayout>
      <ExamManagement />
    </ERPLayout>
  );
}