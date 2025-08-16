import { ERPLayout } from '@/components/layout/ERPLayout';
import { InstituteManagement } from '@/components/institutes/InstituteManagement';

export default function InstitutesPage() {
  return (
    <ERPLayout>
      <InstituteManagement />
    </ERPLayout>
  );
}