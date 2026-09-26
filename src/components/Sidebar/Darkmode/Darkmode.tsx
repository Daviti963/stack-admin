import styles from './Darkmode.module.css';
import { FiMoon } from "react-icons/fi";
import { useState } from 'react';

export default function Darkmode() {

    const [darkMode, setDarkMode] = useState<boolean>(false);

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setDarkMode(!darkMode);
    }

    return (
        <label className={styles.darkMode}>
            <div className={styles.labelContent}>
                <FiMoon className={styles.icon} />
                <span>Dark Mode</span>
            </div>
            <input type="checkbox" className={styles.toggleInput} onChange={onHandleChange} />
            <span className={styles.slider}></span>
        </label>
    );
}