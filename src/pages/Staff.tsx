import { ERPLayout } from '@/components/layout/ERPLayout';
import { StaffManagement } from '@/components/staff/StaffManagement';

export default function StaffPage() {
  return (
    <ERPLayout>
      <StaffManagement />
    </ERPLayout>
  );
}