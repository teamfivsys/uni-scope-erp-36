import { useState } from 'react';
import { 
  LayoutDashboard, 
  School, 
  Users, 
  UserCheck, 
  BookOpen, 
  DollarSign, 
  ClipboardList, 
  MessageSquare, 
  BarChart3, 
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard', current: false },
  { name: 'Institutes', icon: School, href: '/institutes', current: false },
  { name: 'Students', icon: Users, href: '/students', current: false },
  { name: 'Staff', icon: UserCheck, href: '/staff', current: false },
  { name: 'Courses', icon: BookOpen, href: '/courses', current: false },
  { name: 'Fees & Accounts', icon: DollarSign, href: '/fees', current: false },
  { name: 'Exams', icon: ClipboardList, href: '/exams', current: false },
  { name: 'Communication', icon: MessageSquare, href: '/communication', current: false },
  { name: 'Reports', icon: BarChart3, href: '/reports', current: false },
  { name: 'Settings', icon: Settings, href: '/settings', current: false },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={cn(
      "bg-sidebar text-sidebar-foreground transition-all duration-300 flex flex-col border-r border-sidebar-border",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div>
              <h1 className="font-bold text-lg">ERP Suite</h1>
              <p className="text-xs text-sidebar-foreground/70">Multi-Institute Management</p>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-md hover:bg-sidebar-accent transition-colors"
          >
            {collapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium",
              item.current
                ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md"
                : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            )}
          >
            <item.icon className={cn("flex-shrink-0", collapsed ? "w-5 h-5" : "w-4 h-4")} />
            {!collapsed && <span>{item.name}</span>}
          </a>
        ))}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-sidebar-primary rounded-full flex items-center justify-center">
              <span className="text-xs font-semibold text-sidebar-primary-foreground">A</span>
            </div>
            <div>
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-sidebar-foreground/70">System Administrator</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}