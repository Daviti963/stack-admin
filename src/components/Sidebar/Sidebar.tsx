'use client'
import styles from './Sidebar.module.css';
import CultersLogo from '../CultersLogo/CultersLogo';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from './Navigation/Navigation';
import { LuPanelLeftClose } from "react-icons/lu";
import Darkmode from './Darkmode/Darkmode';
import UserDefaultCard from '../UserProfileCard/UserProfileCard';

export default function Sidebar() {
    return (
        <aside className={styles.aside}>
            <div className={styles.logo}>
                <Link href='/'><CultersLogo /></Link>
                <button><LuPanelLeftClose /></button>
            </div>

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
            <UserDefaultCard hasBorder />
        </aside>
    )
}