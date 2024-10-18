import BoxReveal from "@/components/ui/box-reveal";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const clubMembers = [
	{ id: 1, name: 'Emma Johnson', role: 'President', image: '/placeholder.svg?height=200&width=200', instagram: 'https://instagram.com/emmaj', linkedin: 'https://linkedin.com/in/emmaj' },
	{ id: 2, name: 'Liam Smith', role: 'Vice President', image: '/placeholder.svg?height=200&width=200', instagram: 'https://instagram.com/liams', linkedin: 'https://linkedin.com/in/liams' },
	{ id: 3, name: 'Olivia Brown', role: 'Secretary', image: '/placeholder.svg?height=200&width=200', instagram: 'https://instagram.com/oliviab', linkedin: 'https://linkedin.com/in/oliviab' },
	{ id: 4, name: 'Noah Davis', role: 'Treasurer', image: '/placeholder.svg?height=200&width=200', instagram: 'https://instagram.com/noahd', linkedin: 'https://linkedin.com/in/noahd' },
	{ id: 5, name: 'Ava Wilson', role: 'Event Coordinator', image: '/placeholder.svg?height=200&width=200', instagram: 'https://instagram.com/avaw', linkedin: 'https://linkedin.com/in/avaw' },
	{ id: 6, name: 'Ethan Taylor', role: 'Marketing Lead', image: '/placeholder.svg?height=200&width=200', instagram: 'https://instagram.com/ethant', linkedin: 'https://linkedin.com/in/ethant' },
	{ id: 7, name: 'Sophia Anderson', role: 'Tech Lead', image: '/placeholder.svg?height=200&width=200', instagram: 'https://instagram.com/sophiaa', linkedin: 'https://linkedin.com/in/sophiaa' },
	{ id: 8, name: 'Mason Thomas', role: 'Outreach Coordinator', image: '/placeholder.svg?height=200&width=200', instagram: 'https://instagram.com/masont', linkedin: 'https://linkedin.com/in/masont' },
	{ id: 9, name: 'Isabella Jackson', role: 'Social Media Manager', image: '/placeholder.svg?height=200&width=200', instagram: 'https://instagram.com/isabellaj', linkedin: 'https://linkedin.com/in/isabellaj' },
	{ id: 10, name: 'James White', role: 'Membership Coordinator', image: '/placeholder.svg?height=200&width=200', instagram: 'https://instagram.com/jamesw', linkedin: 'https://linkedin.com/in/jamesw' },
	{ id: 11, name: 'Charlotte Harris', role: 'Workshop Lead', image: '/placeholder.svg?height=200&width=200', instagram: 'https://instagram.com/charlotteh', linkedin: 'https://linkedin.com/in/charlotteh' },
	{ id: 12, name: 'Benjamin Martin', role: 'Sponsorship Coordinator', image: '/placeholder.svg?height=200&width=200', instagram: 'https://instagram.com/benjaminm', linkedin: 'https://linkedin.com/in/benjaminm' },
	{ id: 13, name: 'Amelia Thompson', role: 'Community Manager', image: '/placeholder.svg?height=200&width=200', instagram: 'https://instagram.com/ameliat', linkedin: 'https://linkedin.com/in/ameliat' },
	{ id: 14, name: 'Lucas Garcia', role: 'Design Lead', image: '/placeholder.svg?height=200&width=200', instagram: 'https://instagram.com/lucasg', linkedin: 'https://linkedin.com/in/lucasg' },
	{ id: 15, name: 'Mia Martinez', role: 'Content Creator', image: '/placeholder.svg?height=200&width=200', instagram: 'https://instagram.com/miam', linkedin: 'https://linkedin.com/in/miam' },
	{ id: 16, name: 'Henry Robinson', role: 'Project Manager', image: '/placeholder.svg?height=200&width=200', instagram: 'https://instagram.com/henryr', linkedin: 'https://linkedin.com/in/henryr' },
	{ id: 17, name: 'Evelyn Clark', role: 'Research Coordinator', image: '/placeholder.svg?height=200&width=200', instagram: 'https://instagram.com/evelync', linkedin: 'https://linkedin.com/in/evelync' },
	{ id: 18, name: 'Alexander Rodriguez', role: 'Logistics Coordinator', image: '/placeholder.svg?height=200&width=200', instagram: 'https://instagram.com/alexanderr', linkedin: 'https://linkedin.com/in/alexanderr' },
	{ id: 19, name: 'Harper Lewis', role: 'Diversity and Inclusion Officer', image: '/placeholder.svg?height=200&width=200', instagram: 'https://instagram.com/harperl', linkedin: 'https://linkedin.com/in/harperl' },
	{ id: 20, name: 'Daniel Lee', role: 'Alumni Relations Officer', image: '/placeholder.svg?height=200&width=200', instagram: 'https://instagram.com/daniell', linkedin: 'https://linkedin.com/in/daniell' },
]

const AboutUs = () => {
	return (
		<section>
			<div className="flex flex-col items-center justify-center pb-15 mb-15">
				<div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
					<BoxReveal boxColor={"#5046e6"} duration={0.9}>
						<p className="text-[3.5rem] font-semibold">
							Magic UI<span className="text-[#5046e6]">.</span>
						</p>
					</BoxReveal>

					<BoxReveal boxColor={"#5046e6"} duration={0.9}>
						<h2 className="mt-[.5rem] text-[1rem]">
							UI library for{" "}
							<span className="text-[#5046e6]">Design Engineers</span>
						</h2>
					</BoxReveal>

					<BoxReveal boxColor={"#5046e6"} duration={0.9}>
						<div className="mt-6">
							<p>
								-&gt; 20+ free and open-source animated components built with
								<span className="font-semibold text-[#5046e6]"> React</span>,
								<span className="font-semibold text-[#5046e6]"> Typescript</span>,
								<span className="font-semibold text-[#5046e6]"> Tailwind CSS</span>,
								and
								<span className="font-semibold text-[#5046e6]"> Framer Motion</span>
								. <br />
								-&gt; 100% open-source, and customizable. <br />
							</p>
						</div>
					</BoxReveal>

					<BoxReveal boxColor={"#5046e6"} duration={0.5}>
						<Button className="mt-[1.6rem] bg-[#5046e6] mb-10">Explore</Button>
					</BoxReveal>
				</div>
				<div className="container mx-auto px-4 py-16">
					<h1 className="text-4xl font-bold text-center mb-12">Bootstrap's Team</h1>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
						{clubMembers.map((member) => (
							<motion.div
								key={member.id}
								className="bg-white rounded-lg shadow-lg overflow-hidden"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								whileHover={{ scale: 1.05 }}
							>
								<img
									src={member.image}
									alt={member.name}
									width={200}
									height={200}
									className="w-full h-48 object-cover"
								/>
								<div className="p-4">
									<h2 className="text-xl font-semibold">{member.name}</h2>
									<p className="text-gray-600">{member.role}</p>
									<div className="mt-4 flex  space-x-4">
										<a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700">
											<Instagram size={24} />
										</a>
										<a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
											<Linkedin size={24} />
										</a>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutUs;