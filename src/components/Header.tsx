import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
    return (
        <nav className="navbar sticky-header border-bottom bg-body-tertiary">
            <div className="container">
                <span className="navbar-brand mb-0 h1 fw-bold">Mitanshu Hitesh Gada</span>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="btn btn-outline-secondary"
                    aria-label="Toggle theme"
                >
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>
        </nav>
    );
}