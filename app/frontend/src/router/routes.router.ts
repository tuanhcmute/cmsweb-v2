import type { Route, SidebarSubmenu } from '@/types/route.type';
import { AlignJustify, SquareMenu, FolderOpenDot, Archive } from 'lucide-react';

const routes: Route[] = [
    {
        title: 'Login',
        path: '/auth/login',
        component: () => import('@/views/auth/Login')
    },
    {
        title: 'Register',
        path: '/auth/register',
        component: () => import('@/views/auth/Register')
    },
    {
        title: 'Home',
        path: '/',
        component: () => import('@/layouts/DashboardLayout'),
    },
    {
        title: 'Dashboard',
        path: '/hr-subsystem',
        component: () => import('@/layouts/DashboardLayout'),
        children: [
            {
                title: 'User List',
                path: 'user-list',
                component: () => import('@/views/hr/UserList'),
            },
        ]
    },
    {
        title: 'Project Subsystem',
        path: '/project-subsystem',
        component: () => import('@/layouts/DashboardLayout'),
        children: [
            {
                title: 'Projects',
                path: 'projects',
                component: () => import('@/views/projects/Projects')
            }
        ]
    },
    {
        title: 'Phân hệ YCVT',
        path: '/ycvt-subsystem',
        component: () => import('@/layouts/DashboardLayout'),
        children: [
            {
                title: 'Materials',
                path: 'materials',
                component: () => import('@/views/materials/Materials')
            }
        ]
    }
];

const sidebarSubmenus: SidebarSubmenu[] = [
    {
        title: 'Phân hệ HR',
        path: '/hr-subsystem',
        icon: SquareMenu,
        component: () => import('@/layouts/DashboardLayout'),
        children: [
            {
                title: 'User List',
                path: '/hr-subsystem/user-list',
                icon: AlignJustify,
                component: () => import('@/views/hr/UserList')
            }
        ]
    },
    {
        title: 'Phân hệ dự án',
        path: '/project-subsystem',
        icon: FolderOpenDot,
        component: () => import('@/layouts/DashboardLayout'),
        children: [
            {
                title: 'Project Subsystem',
                path: '/project-subsystem/projects',
                icon: Archive,
                component: () => import('@/views/projects/Projects')
            }
        ]
    },
    {
        title: 'Phân hệ YCVT',
        path: '/ycvt-subsystem',
        icon: Archive,
        component: () => import('@/layouts/DashboardLayout'),
        children: [
            {
                title: 'YCVT Subsystem',
                path: '/ycvt-subsystem/materials',
                icon: Archive,
                component: () => import('@/views/materials/Materials')
            }
        ]
    }
];

export default { routes, sidebarSubmenus };
