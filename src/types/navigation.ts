import { ReactNode } from 'react';

export interface SubNavItem {
    name: string,
    href: string;
}

export interface NavItem {
    name: string;
    href: string;
    icon: ReactNode;
    count?: number;
    subItems?: SubNavItem[]
}

export interface NavSection {
    title: string;
    links: NavItem[];
}