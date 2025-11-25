import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/portfolio.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

export default function App() {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		if (darkMode) {
			document.body.setAttribute('data-bs-theme', 'dark');
		} else {
			document.body.setAttribute('data-bs-theme', 'light');
		}
	}, [darkMode]);

	return (
		<div>
			<Header darkMode={darkMode} setDarkMode={setDarkMode} />
			<Hero />
			<Experience />
			<Education />
			<Projects />
			<Skills />
			<Footer />
		</div>
	);
}