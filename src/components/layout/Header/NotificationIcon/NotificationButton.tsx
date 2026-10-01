import styles from './NotificationButton.module.css';

interface NotificationIconProp {
    icon: React.ReactNode;
    count?: number;
}

export default function NotificationButton({ icon, count }: NotificationIconProp) {
    return (
        <div className={styles.notificationIcons}>
            {icon}

            {
                count && count > 0 && (
                    <span>{count}</span>
                )
            }
        </div>
    )
}