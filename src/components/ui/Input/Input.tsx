import styles from './Input.module.css';


interface Prop {
    type: string;
    value: string;
    placeholder?: string;
    onChange: () => void;
    className?: string;
    icon?: React.ReactNode;
}

export default function Input({ type, value, onChange, placeholder, className, icon }: Prop) {
    return (
        <div className={`${styles.inputWrapper} ${className}`}>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>

    )
}