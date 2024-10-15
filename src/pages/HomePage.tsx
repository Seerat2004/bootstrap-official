import { useState } from "react";
// import IconCloud from "../components/ui/icon-cloud";

function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // List of icon slugs to be displayed in the cloud
  // const iconSlugs = [
  //   'react', 'javascript', 'typescript', 'html5', 'css3', 'nodejs',
  //   'express', 'mongodb', 'postgresql', 'git', 'github', 'vscode',
  //   'npm', 'webpack', 'babel', 'sass', 'tailwindcss', 'bootstrap',
  //   'jest', 'docker', 'aws', 'firebase', 'redux', 'graphql'
  // ];

  const handleThemes = () => {
    setIsDarkMode((c) => !c);
  };

  return (
	<div className="font-sans antialiased">
	<section className="container mx-auto py-12">
	  <div className="flex justify-between items-center">
		<div className="max-w-md">
		  <h1 className="text-4xl font-bold mb-4">Ignite Your Passion for Innovation and Events</h1>
		  <p className="text-lg text-gray-600 mb-6">Join us at Bootstarp for engaging events, fostering innovation, and building a vibrant community at Lovely Professional University.</p>
		  <button className="px-6 py-2 bg-black text-white rounded">Register</button>
		</div>
		<div className="w-1/2 bg-gray-200 h-64"></div> 
	  </div>
	</section>
	<section className="container mx-auto py-12">
	  <div className="flex justify-between items-center">
		<div className="w-1/2 bg-gray-200 h-64"></div>
		<div className="max-w-md">
		  <h2 className="text-3xl font-bold mb-4">Welcome to Bootstarp at Lovely Professional University</h2>
		  <p className="text-lg text-gray-600 mb-6">Bootstarp is dedicated to fostering innovation and collaboration through a series of technical and non-technical events at Lovely Professional University. Join us to broaden your horizons, engage in events, and grow.</p>
		  <button className="px-6 py-2 bg-black text-white rounded">Register</button>
		</div>
	  </div>
	</section>
	<section className="container mx-auto py-12">
	  <h2 className="text-3xl font-bold mb-8">Empowering Students Through Engaging Events</h2>
	  <p></p>
	  <div className="grid grid-cols-2 gap-8">
		<div className="flex flex-col items-start">
		  <h3 className="text-xl font-bold">Exciting Events Tailored for Every Interest</h3>
		  <p className="text-gray-600">From workshops to competitions, we host it all.</p>
		</div>
		<div className="flex flex-col items-start">
		  <h3 className="text-xl font-bold">Become a Part of Our Vibrant Community</h3>
		  <p className="text-gray-600">Build connections with like-minded individuals.</p>
		</div>
		<div className="flex flex-col items-start">
		  <h3 className="text-xl font-bold">Stay Updated with Our Latest Initiatives</h3>
		  <p className="text-gray-600">Follow us for more opportunities.</p>
		</div>
		<div className="flex flex-col items-start">
		  <h3 className="text-xl font-bold">Connect with Us on Social Media</h3>
		  <p className="text-gray-600">Engage with us and be part of the conversation.</p>
		</div>
	  </div>
	</section>
	<section className="container mx-auto py-12">
	  <div className="text-center ">
		<h2 className="text-3xl font-bold mb-4">Join Us or Explore Events</h2>
		<p className="text-lg text-gray-600 mb-6">Discover exciting opportunities and insights by signing up for our innovative events.</p>
		<button className="px-6 py-2 bg-black text-white rounded">Register</button>
		
	  </div>
	</section>
	<footer className="bg-black text-white py-8">
	  <div className="container mx-auto grid grid-cols-4 gap-8">
		<div className="ml-4">
		  <h4 className="font-bold mb-2">About</h4>
		  <ul>
			<li><a href="#" className="text-gray-400 hover:text-white">Our Story</a></li>
			<li><a href="#" className="text-gray-400 hover:text-white">Vision</a></li>
			<li><a href="#" className="text-gray-400 hover:text-white">Team</a></li>
		  </ul>
		</div>
		<div>
		  <h4 className="font-bold mb-2">Stay Connected</h4>
		  <ul>
			<li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
			<li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
			<li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
		  </ul>
		</div>
		<div>
		  <h4 className="font-bold mb-2">Explore</h4>
		  <ul>
			<li><a href="#" className="text-gray-400 hover:text-white">Events</a></li>
			<li><a href="#" className="text-gray-400 hover:text-white">Workshops</a></li>
			<li><a href="#" className="text-gray-400 hover:text-white">Community</a></li>
		  </ul>
		</div>
		<div>
		  <h4 className="font-bold mb-2">Get In Touch</h4>
		  <p className="text-gray-400">Email: bootstraplpu.com</p>
		  <p className="text-gray-400">Phone: 9993748220</p>
		</div>
	  </div>
	</footer>
  </div>
);
};

export default HomePage;
