import Link from "next/link"
import { navSection } from "@/src/data/navigation";
import styles from './Navigation.module.css';
import { usePathname } from 'next/navigation';
export default function Navigation() {

    const pathname = usePathname();

    return (
        <nav className={styles.navigation}>
            {
                navSection.map(section => (
                    <div key={section.title}>
                        <h3>{section.title}</h3>
                        {
                            section.links.map(item => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`${styles.link} ${isActive ? styles.active : ''}`}
                                    >
                                        {item.icon}
                                        <span>{item.name}
                                            {item.count && <span>({item.count})</span>}</span>
                                    </Link>
                                )

                            })
                        }
                    </div>
                ))
            }
        </nav>
    )
}