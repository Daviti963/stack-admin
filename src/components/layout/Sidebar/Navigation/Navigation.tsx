'use client'
import { navSection } from "@/src/data/navigation";
import styles from './Navigation.module.css';
import NavItem from "./NavItem/NavItem";

interface Prop {
    className?: string;
    onClick: () => void;
}

export default function Navigation({ className, onClick }: Prop) {

    return (
        <nav className={`${styles.navigation} ${className}`}>
            {navSection.map((section) => (
                <div key={section.title}>
                    <h3>{section.title}</h3>

                    {
                        section.links.map(item => (
                            <NavItem key={item.name} item={item} onClick={onClick} />
                        ))
                    }
                </div>
            ))}
        </nav>
    );
}