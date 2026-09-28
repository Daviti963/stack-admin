import Image from "next/image"
import styles from './UserProfileCard.module.css';

interface UserDefaultCardProps {
    hasBorder: boolean
}


export default function UserDefaultCard({ hasBorder }: UserDefaultCardProps) {

    return (
        <div className={`${styles.profileCard} ${hasBorder ? styles.cardWithBorder : ''}`}>
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