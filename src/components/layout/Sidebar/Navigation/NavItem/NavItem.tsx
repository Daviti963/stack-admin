'use client'
import styles from './Navitem.module.css';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Arrow from '@/src/components/ui/Arrow/Arrow';
import { useState } from 'react';
import { SubNavItem } from '@/src/types/navigation';

import { useAtom } from 'jotai';
import { isOpenState } from '@/src/states/state';

interface Prop {
    onClick: () => void;
    item: any
}

export default function NavItem({ item, onClick }: Prop) {
    const pathname = usePathname();



    const hasActiveSubItem = item.subItems?.some(
        (subItem: SubNavItem) => pathname === subItem.href
    );

    const [isOpen, setIsOpen] = useState<boolean>(!!hasActiveSubItem);
    const [isOpenNav, setIsOpenNav] = useAtom(isOpenState);

    const isActive = pathname === item.href;

    return (
        <div className={styles.navItemWrapper}>
            <Link
                href={item.href}
                className={`${styles.link} ${isActive ? styles.active : ''} ${hasActiveSubItem ? styles.subActive : ''}`}
                onClick={(e) => {
                    if (item.subItems) {
                        e.preventDefault();
                        setIsOpen((prev) => !prev);
                    } else {
                        setIsOpenNav(false);
                    }
                }}
            >
                {item.icon}
                <span>
                    {item.name}
                    {item.count ? <span>({item.count})</span> : null}
                </span>
                {item.subItems && (
                    <Arrow className={`${styles.arrow} ${isOpen ? styles.open : ''}`} />
                )}
            </Link>

            {item.subItems && (
                <div className={`${styles.subitem} ${isOpen ? styles.active : ''}`}>
                    {item.subItems.map((subitem: SubNavItem) => {
                        const isSubActive = pathname === subitem.href;

                        return (
                            <Link
                                key={subitem.name}
                                href={subitem.href}
                                className={`${styles.subitemLink} ${isSubActive ? styles.active : ''}`}

                                onClick={onClick}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="7"
                                    viewBox="0 0 12 7"
                                    fill="none"
                                >
                                    <path
                                        d="M1.02681 1C1.02701 5.44444 -0.0226014 6 11 6"
                                        stroke="#D1D1D1"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <span>{subitem.name}</span>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
}