import { CalendarDays, MapPin } from 'lucide-react';
import eventImage from "../assets/images/mainpage.jpg";
import { motion } from 'framer-motion';
import bachelorGotLatent from "@/assets/images/Untitled design (2).png";
import rangoliEvent from "@/assets/images/rangoliImage.jpeg";
import gamingEvent from "@/assets/images/gamingEvent.jpeg";

const upcomingEvents: Event[] = [
	{
		id: 1,
		title: 'Bachelors got Latent',
		date: '29 November, 2024',
		location: 'Uni Auditorium',
		description: 'A show featuring a lots of talents with the laughter from our judges and with an unique point system.',
		imageUrl: bachelorGotLatent,
	},
	{
		id: 1,
		title: 'Rangoli Competition',
		date: '25 November, 2024',
		location: 'LPU Campus, Block 32',
		description: 'Join us in rangoli competition, one of the greatest event in the LPU, be a part of it.',
		imageUrl: rangoliEvent,
	},
	{
		id: 2,
		title: 'Gaming Zone',
		date: '29 November, 2024',
		location: 'Online (Zoom)',
		description: 'Take a break and Fuel up your mind playing new games while having an chance to win handsome amount of money.',
		imageUrl: gamingEvent,
	}
];
const pastEvents: Event[] = [
	{
		id: 4,
		title: 'Web Development Bootcamp',
		date: 'November 10-12, 2023',
		location: 'LPU Campus, Block 28',
		description: 'A hands-on bootcamp covering modern web development technologies.',
		imageUrl: eventImage
	},
	{
		id: 5,
		title: 'Cybersecurity Symposium',
		date: 'January 25, 2024',
		location: 'LPU Conference Hall',
		description: 'Expert talks on the latest trends and challenges in cybersecurity.',
		imageUrl: eventImage
	},
];

interface Event {
	id: number;
	title: string;
	date: string;
	location: string;
	description: string;
	imageUrl: string;
}
const Events = () => {

	return (
		<div className="min-h-screen mt-20">
			<motion.header
				className="bg-purple-400 rounded-lg text-white py-20"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
			>
				<div className="container mx-auto text-center px-4">
					<h1 className="text-5xl font-bold mb-4">Upcoming Events</h1>
					<p className="text-xl max-w-2xl mx-auto">
						Join BootStrap LPU for cutting-edge technical workshops, hackathons, and inspiring talks.
						We bring together students, professionals, and industry leaders to foster innovation and learning.
					</p>
				</div>
			</motion.header>
			<main className="container mx-auto px-4 py-16">
				<motion.section
					className="mb-20"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
				>
					<h2 className="text-3xl font-semibold mb-8 text-indigo-950 dark:text-indigo-100">Featured Events</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
						{
							upcomingEvents.map((event, index) => (
								<div
									key={event.id}
									className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
									style={{ animationDelay: `${index * 150}ms` }}
								>
									<img
										src={event.imageUrl}
										alt={event.title}
										className="w-full h-72 object-cover"
									/>
									<div className="p-6">
										<h3 className="text-2xl font-semibold mb-2 text-indigo-950">{event.title}</h3>
										<p className="text-gray-600 mb-4">{event.description}</p>
										<div className="flex items-center text-gray-500 mb-2">
											<CalendarDays className="w-5 h-5 mr-2" />
											<span>{event.date}</span>
										</div>
										<div className="flex items-center text-gray-500 mb-4">
											<MapPin className="w-5 h-5 mr-2" />
											<span>{event.location}</span>
										</div>
									</div>
								</div>
							))
						}
					</div>
				</motion.section>
				<motion.section
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
				>
					<h2 className="text-3xl font-semibold mb-8 text-indigo-950 dark:text-indigo-100">Previous Events</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
						{pastEvents.map((event, index) => (
							<div
								key={event.id}
								className={`bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row transform transition-all duration-300 hover:shadow-2xl`}
								style={{ animationDelay: `${index * 150}ms` }}
							>
								<img
									src={event.imageUrl}
									alt={event.title}
									className="w-full md:w-48 object-cover"
								/>
								<div className="p-6 flex-1">
									<h3 className="text-2xl font-semibold mb-2 text-indigo-950">{event.title}</h3>
									<p className="text-gray-600 mb-4">{event.description}</p>
									<div className="flex items-center text-gray-500 mb-2">
										<CalendarDays className="w-5 h-5 mr-2" />
										<span>{event.date}</span>
									</div>
									<div className="flex items-center text-gray-500">
										<MapPin className="w-5 h-5 mr-2" />
										<span>{event.location}</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</motion.section>
			</main>
		</div>
	);
};

export default Events;
