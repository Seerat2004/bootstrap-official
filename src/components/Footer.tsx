import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-300 py-12">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center mb-8">
					<h3 className="text-xl font-semibold mb-4 md:mb-0">
						Subscribe to our newsletter
					</h3>
					<div className="flex w-full md:w-auto">
						<Input
							type="email"
							placeholder="Enter your email"
							className="bg-gray-800 text-white mr-2"
						/>
						<Button variant="secondary">Subscribe</Button>
					</div>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
					<div>
						<h4 className="font-bold mb-4">About Us</h4>
						<ul className="space-y-2">
							<li><Link to="#">Our Mission</Link></li>
							<li><Link to="#">History</Link></li>
							<li><Link to="#">Executive Board</Link></li>
							<li><Link to="#">Achievements</Link></li>
						</ul>
					</div>
					<div>
						<h4 className="font-bold mb-4">Activities</h4>
						<ul className="space-y-2">
							<li><Link to="#">Events</Link></li>
							<li><Link to="#">Workshops</Link></li>
							<li><Link to="#">Competitions</Link></li>
							<li><Link to="#">Social Gatherings</Link></li>
						</ul>
					</div>
					<div>
						<h4 className="font-bold mb-4">Resources</h4>
						<ul className="space-y-2">
							<li><Link to="#">Member Portal</Link></li>
							<li><Link to="#">Study Materials</Link></li>
							<li><Link to="#">Career Opportunities</Link></li>
							<li><Link to="#">Alumni Network</Link></li>
						</ul>
					</div>
					<div>
						<h4 className="font-bold mb-4">Contact</h4>
						<ul className="space-y-2">
							<li><Link to="#">Email Us</Link></li>
							<li><Link to="#">Office Hours</Link></li>
							<li><Link to="#">FAQ</Link></li>
							<li><Link to="#">Join Us</Link></li>
						</ul>
					</div>
				</div>

				<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
					<p className="mb-4 md:mb-0">&copy; 2024 College Club. All rights reserved.</p>
					<div className="flex space-x-4">
						<Link to="#" aria-label="Facebook">
							<Facebook className="h-6 w-6" />
						</Link>
						<Link to="#" aria-label="Instagram">
							<Instagram className="h-6 w-6" />
						</Link>
						<Link to="#" aria-label="Twitter">
							<Twitter className="h-6 w-6" />
						</Link>
						<Link to="#" aria-label="YouTube">
							<Youtube className="h-6 w-6" />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;