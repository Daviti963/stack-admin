'use client'
import Link from "next/link"
import { navSection } from "@/src/data/navigation";
import styles from './Navigation.module.css';
import { usePathname } from 'next/navigation';
export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className={styles.navigation}>
            {navSection.map((section) => (
                <div key={section.title}>
                    <h3>{section.title}</h3>

                    {section.links.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <div key={item.name} className={styles.navItemWrapper}>
                                <Link
                                    href={item.href}
                                    className={`${styles.link} ${isActive ? styles.active : ''}`}
                                >
                                    {item.icon}
                                    <span>
                                        {item.name}
                                        {item.count ? <span>({item.count})</span> : null}
                                    </span>
                                </Link>

                                {item.subItems && (
                                    <div className={styles.subitem}>
                                        {item.subItems.map((subitem) => {
                                            const isSubActive = pathname === subitem.href;

                                            return (


                                                <Link key={subitem.name} href={subitem.href} className={`${styles.subitemLink} ${isSubActive ? styles.active : ''}`}>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="12"
                                                        height="7"
                                                        viewBox="0 0 12 7"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M1.02681 1C1.02701 5.44444 -0.0226014 6 11 6"
                                                            stroke="#D1D1D1"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                        />
                                                    </svg>
                                                    <span>{subitem.name}</span>
                                                </Link>
                                            )

                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            ))}
        </nav>
    );
}