import { useState } from "react";
import IconCloud from "../components/ui/icon-cloud"

function HomePage() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	// List of icon slugs to be displayed in the cloud
	const iconSlugs = [
		'react', 'javascript', 'typescript', 'html5', 'css3', 'nodejs',
		'express', 'mongodb', 'postgresql', 'git', 'github', 'vscode',
		'npm', 'webpack', 'babel', 'sass', 'tailwindcss', 'bootstrap',
		'jest', 'docker', 'aws', 'firebase', 'redux', 'graphql'
	];

	// Function to toggle dark mode
	const toggleDarkMode = () => {
		setIsDarkMode(prevMode => !prevMode);
	};

	return (
		<div className="flex h-screen w-full">
			<div className="flex items-center justify-center">
				<IconCloud iconSlugs={iconSlugs} isDarkMode={isDarkMode} />
			</div>
		</div>
	)
}

export default HomePage;