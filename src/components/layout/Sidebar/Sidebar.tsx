'use client'
import styles from './Sidebar.module.css';
import Image from 'next/image';
import Navigation from './Navigation/Navigation';
import Darkmode from './Darkmode/Darkmode';
import UserDefaultCard from '../../ui/UserProfileCard/UserProfileCard';
import CloseOpen from './Close&Open/Close&Open';


export default function Sidebar() {


    return (
        <aside className={styles.aside}>

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
            <UserDefaultCard hasBorder />
        </aside>
    )
}