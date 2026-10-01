'use client'
import styles from './Header.module.css';
import Input from '../../ui/Input/Input';
import NotificationButton from './NotificationIcon/NotificationButton';
import UserDefaultCard from '../../ui/UserProfileCard/UserProfileCard';

import { useAtom } from 'jotai';
import { textState, isOpenState } from '@/src/states/state';
import { FiMail, FiBell } from 'react-icons/fi';
import { FiSearch } from 'react-icons/fi';

import Navigation from '../Sidebar/Navigation/Navigation';

export default function Header() {

    const [text, setText] = useAtom(textState);
    const [isOpen, setIsOpen] = useAtom(isOpenState);


    const onHandleChange = (e?: React.ChangeEvent<HTMLInputElement>): void => {
        if (!e) return;
        setText(e.target.value);
    }

    const onHandleClick = (): void => {
        setIsOpen(false);
    }

    return (
        <header className={styles.header}>
            <Input
                type='text'
                placeholder='Search product'
                value={text}
                onChange={onHandleChange}
                className={styles.input}
                icon={<FiSearch size={15} />}
            />

            <div className={styles.rightSection}>
                <button type="button">
                    <NotificationButton icon={<FiMail />} count={2} />
                </button>
                <button type="button">
                    <NotificationButton icon={<FiBell />} count={8} />
                </button>

                <hr className={styles.stick} />

                <div>
                    <UserDefaultCard className={styles.userCard} />


                    <button
                        className={`${styles.burger} ${isOpen ? styles.active : ''}`}
                        aria-label="Toggle menu"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </button>
                </div>
            </div>

            <Navigation
                className={`${styles.navigation} ${isOpen ? styles.active : ''}`}
                onClick={onHandleClick}
            />

        </header>
    )
}