import { useEffect, useState } from 'react';

const THEME_STORAGE_KEY = 'rick-and-morty-theme';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
	if (typeof window === 'undefined') {
		return 'light';
	}

	const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
	if (savedTheme === 'dark' || savedTheme === 'light') {
		return savedTheme;
	}

	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function ThemeToggle() {
	const [theme, setTheme] = useState<Theme>('light');

	useEffect(() => {
		const initialTheme = getInitialTheme();
		document.documentElement.dataset.theme = initialTheme;
		setTheme(initialTheme);
	}, []);

	function toggleTheme() {
		const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.dataset.theme = nextTheme;
		window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
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
