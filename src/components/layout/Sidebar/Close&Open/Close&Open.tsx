import styles from './Close&Open.module.css';
import Link from "next/link";
import { LuPanelLeftClose } from "react-icons/lu";
import CultersLogo from "@/src/components/ui/CultersLogo/CultersLogo";
import { useAtom } from 'jotai';
import { isCloseState } from '@/src/states/state';

export default function CloseOpen() {

    const [isClose, isSetClose] = useAtom(isCloseState);

    const onHandleClick = (): void => {
        isSetClose(prev => !prev);
    }

    return (
        <div className={styles.logo}>
            <Link href='/'><CultersLogo /></Link>
            <button onClick={onHandleClick} className={`${styles.button} ${isClose ? styles.active : ''}`}><LuPanelLeftClose /></button>
        </div>
    )
}