'use client'
import styles from './Sidebar.module.css';
import Image from 'next/image';
import Navigation from './Navigation/Navigation';
import Darkmode from './Darkmode/Darkmode';
import UserDefaultCard from '../../ui/UserProfileCard/UserProfileCard';
import CloseOpen from './Close&Open/Close&Open';

import { useAtom } from 'jotai';
import { isOpenState } from '@/src/states/state';

export default function Sidebar() {

    const [isOpen, setIsOpen] = useAtom(isOpenState);

    return (
        <aside className={`${styles.aside} ${isOpen ? styles.active : ''}`}>

            <CloseOpen />

            <div className={styles.companyLogo}>
                <Image
                    src='/images/company-logo.svg'
                    alt='Company logo'
                    width={40}
                    height={40}
                    priority
                />
                <div>
                    <p>Company</p>
                    <span>Kanky Store</span>
                </div>
            </div>

            <Navigation />
            <Darkmode />
            <UserDefaultCard className={styles.cardWithBorder} />
        </aside>
    )
}