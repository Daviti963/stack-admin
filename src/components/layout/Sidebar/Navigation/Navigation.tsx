'use client'
import { navSection } from "@/src/data/navigation";
import styles from './Navigation.module.css';
import NavItem from "./NavItem/NavItem";

export default function Navigation() {


    return (
        <nav className={styles.navigation}>
            {navSection.map((section) => (
                <div key={section.title}>
                    <h3>{section.title}</h3>

                    {
                        section.links.map(item => (
                            <NavItem key={item.name} item={item} />
                        ))
                    }
                </div>
            ))}
        </nav>
    );
}