import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
	const [theme, setTheme] = useState<Theme>('light');

	useEffect(() => {
		document.documentElement.dataset.theme = 'light';
	}, []);

	function toggleTheme() {
		const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.dataset.theme = nextTheme;
		setTheme(nextTheme);
	}

	const isDark = theme === 'dark';

	return (
		<button
			className="theme-toggle"
			type="button"
			aria-pressed={isDark}
			aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
			onClick={toggleTheme}
		>
			{isDark ? 'Modo claro' : 'Modo oscuro'}
		</button>
	);
}
