import Image from "next/image"
import styles from './UserProfileCard.module.css';

interface UserDefaultCardProps {
    className?: string;
}


export default function UserDefaultCard({ className }: UserDefaultCardProps) {

    return (
        <div className={`${styles.profileCard} ${className}`}>
            <Image
                src='/images/userProfile.png'
                alt='Company logo'
                width={40}
                height={40}
                priority
            />

            <div>
                <h3>Guy Hawkins</h3>
                <p>Admin</p>
            </div>
        </div>
    )
}