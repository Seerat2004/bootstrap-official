import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CalendarCheck, Mail, MapPin, Users, ArrowRight, Trophy, MessageCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function HomePage() {
	return (
		<main className="flex-1 flex flex-col pt-20 gap-10">
			<motion.section
				id="hero"
				className="rounded-lg relative overflow-hidden py-24 md:py-32 text-white bg-opacity-50"
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
			>
				<div className="container mx-auto px-4">
					<div className="flex flex-col justify-between items-center w-full lg:w-2/3 mx-auto gap-8 text-center">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black tracking-tight mb-4">
							Show Your Passion for Innovation and Events
						</h1>
						<p className="text-xl text-purple-400 mb-6 max-w-2xl">
							Join us at Bootstarp for engaging events, fostering innovation, and building a vibrant community at Lovely Professional University.
						</p>
						<Button size="lg" className="group bg-white text-purple-900 hover:bg-purple-100">
							Register Now
							<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
						</Button>
					</div>
				</div>
				<div className="absolute inset-0 -z-10 h-full w-full bg-purple-900 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#9333ea_100%)]" />
			</motion.section>

			<motion.section 
				id="about" 
				className="py-24 px-4 to-white" 
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
			>
				<div className="container mx-auto">
					<h2 className="text-3xl font-bold mb-12 text-center text-purple-900 dark:text-white">Welcome to Bootstarp at LPU</h2>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<p className="text-lg mb-6 text-purple-800dark:text-white w-full sm:w-[80%]">
								Bootstarp is dedicated to fostering innovation and collaboration through a series of technical and non-technical events at Lovely Professional University. Join us to broaden your horizons, engage in events, and grow.
							</p>
							<Button variant="outline" className="group text-purple-900 dark:text-white border-purple-900 hover:bg-purple-100">
								Learn More
								<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Button>
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							{[
								{ title: "50+", content: "Events Organized", icon: CalendarCheck },
								{ title: "1000+", content: "Active Members", icon: Users },
								{ title: "20+", content: "Industry Partners", icon: MapPin },
								{ title: "5", content: "Years of Excellence", icon: Trophy },
							].map((item, index) => (
								<Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white">
									<CardHeader>
										<item.icon className="h-8 w-8 mx-auto text-purple-600" />
										<CardTitle className="text-4xl font-bold text-purple-900">{item.title}</CardTitle>
									</CardHeader>
									<CardContent className="text-purple-700">{item.content}</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</motion.section>

			<motion.section 
				id="events" 
				className="py-24 px-4 bg-purple-100 rounded-lg" 
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
			>
				<div className="container mx-auto">
					<h2 className="text-3xl font-bold mb-12 text-center text-purple-900">Upcoming Events</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[1, 2, 3].map((i) => (
							<Card key={i} className="hover:shadow-xl transition-shadow bg-white">
								<CardHeader>
									<CardTitle className="text-purple-900">Tech Symposium {i}</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="mb-4 text-purple-700">Join us for an exciting day of technology talks and networking.</p>
									<div className="flex items-center text-sm text-purple-600">
										<CalendarCheck className="mr-2 h-4 w-4" />
										<span>May {10 + i}, 2024</span>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
					<div className="text-center mt-12">
						<Button variant="outline" className="group text-purple-900 dark:text-white border-purple-900 hover:bg-purple-100">
							View All Events
							<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
						</Button>
					</div>
				</div>
			</motion.section>

			<motion.section 
				id="featured-event" 
				className="py-24 px-4 text-black dark:text-white" 
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
			>
				<div className="container mx-auto">
					<h2 className="text-3xl font-bold mb-12 text-center">Featured Event</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<Card className="bg-white text-purple-900 shadow-2xl">
							<CardHeader>
								<CardTitle className="text-2xl">Annual Tech Conference 2024</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="mb-4">Join us for our biggest event of the year! Featuring keynote speakers, workshops, and networking opportunities.</p>
								<div className="flex items-center text-sm text-purple-600 mb-4">
									<CalendarCheck className="mr-2 h-4 w-4" />
									<span>September 15-17, 2024</span>
								</div>
								<Button className="bg-purple-600 text-white hover:bg-purple-700">
									Register for Conference
								</Button>
							</CardContent>
						</Card>
						<Card className="bg-white text-purple-900 shadow-2xl">
							<CardHeader>
								<CardTitle className="text-2xl">Annual Tech Conference 2024</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="mb-4">Join us for our biggest event of the year! Featuring keynote speakers, workshops, and networking opportunities.</p>
								<div className="flex items-center text-sm text-purple-600 mb-4">
									<CalendarCheck className="mr-2 h-4 w-4" />
									<span>September 15-17, 2024</span>
								</div>
								<Button className="bg-purple-600 text-white hover:bg-purple-700">
									Register for Conference
								</Button>
							</CardContent>
						</Card>
					</div>
				</div>
			</motion.section>

			<motion.section 
				id="community" 
				className="py-24 px-4 bg-purple-100 rounded-lg" 
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
			> 
				<div className="container mx-auto">
					<h2 className="text-3xl font-bold mb-12 text-center text-purple-900">Join Our Community</h2>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-6">
						<div>
							<p className="text-lg mb-6 text-purple-800 w-full sm:w-[80%]">
								Become part of a vibrant community of innovators, creators, and leaders. Connect with like-minded individuals, share ideas, and grow together.
							</p>
							<Button className="group bg-purple-600 dark:text-white text-white hover:bg-purple-700">
								Join Now
								<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Button>
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							{[
								{ icon: Users, title: "Networking", description: "Connect with peers and industry professionals" },
								{ icon: CalendarCheck, title: "Regular Meetups", description: "Attend weekly sessions and workshops" },
								{ icon: Mail, title: "Newsletter", description: "Stay updated with our latest news and events" },
								{ icon: MapPin, title: "LPU Campus", description: "Events held at Lovely Professional University" },
							].map((item, index) => (
								<Card key={index} className="hover:shadow-lg transition-shadow bg-purple-50">
									<CardHeader>
										<item.icon className="h-8 w-8 text-purple-600" />
									</CardHeader>
									<CardContent>
										<h3 className="font-semibold mb-2 text-purple-900">{item.title}</h3>
										<p className="text-sm text-purple-700">{item.description}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</motion.section>

			<motion.section 
				id="testimonials" 
				className="py-24 px-4" 
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
			>
				<div className="container mx-auto">
					<h2 className="text-3xl font-bold mb-12 text-center text-purple-900 dark:text-white">What Our Members Say</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{ name: "Alex Johnson", role: "Computer Science Student", quote: "Bootstarp has been instrumental in my growth as a developer. The events and community are unparalleled!" },
							{ name: "Priya Sharma", role: "UI/UX Designer", quote: "I've met so many talented individuals through Bootstarp. It's been an amazing journey of learning and collaboration." },
							{ name: "Mohammed Ali", role: "Data Science Enthusiast", quote: "The workshops and hackathons organized by Bootstarp have helped me apply my skills to real-world problems." },
						].map((testimonial, index) => (
							<Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
								<CardContent className="pt-6">
									<p className="text-purple-800 mb-4">"{testimonial.quote}"</p>
									<div className="flex items-center">
										<div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center mr-3">
											<span className="text-purple-700 font-semibold">{testimonial.name[0]}</span>
										</div>
										<div>
											<p className="font-semibold text-purple-900">{testimonial.name}</p>
											<p className="text-sm text-purple-600">{testimonial.role}</p>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</motion.section>

			<motion.section 
				id="faq" 
				className="py-24 px-4 bg-gradient-to-b from-purple-100 to-white rounded-lg" 
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
			>
				<div className="flex flex-col lg:flex-row gap-10 w-full justify-around">
					<div className="flex flex-col gap-4 w-full lg:w-1/3">
						<Badge>FAQ's</Badge>
						<h1 className="font-medium text-4xl dark:text-black">What would you like to know about BootStrap?</h1>
						<Button className="flex gap-2"><MessageCircle /> Talk to us</Button>
					</div>
					<div className="w-full lg:w-2/3">
						<Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
							{[
								{
									question: "What is Bootstarp?",
									answer: "Bootstarp is a student-led organization at Lovely Professional University dedicated to fostering innovation and collaboration through various technical and non-technical events."
								},
								{
									question: "How can I join Bootstarp?",
									answer: "You can join Bootstarp by registering on our website or attending one of our open events. Membership is open to all LPU students interested in technology and innovation."
								},
								{
									question: "Are the events only for tech students?",
									answer: "No, our events cater to a wide range of interests. While we have many tech-focused events, we also organize non-technical events that are open to students from all disciplines."
								},
								{
									question: "How often do you organize events?",
									answer: "We organize events regularly throughout the academic year. This includes weekly meetups, monthly workshops, and larger events each semester."
								},
								{
									question: "Can I propose an idea for an event?",
									answer: "We encourage our members to propose ideas for events. You can submit your ideas through our website or discuss them with any of our team members."
								},
								{
									question: "Is there a fee to join Bootstarp?",
									answer: "Basic membership in Bootstarp is free. Some special events or workshops may have a nominal fee to cover costs, but we strive to keep most of our activities accessible to all students."
								}
							].map((item, index) => (
								<AccordionItem value={`item-${index + 1}`} key={index} className="rounded-lg">
									<AccordionTrigger className="text-left text-purple-900 px-6">
										{
											item.question
										}
									</AccordionTrigger>
									<AccordionContent className="px-6 text-black">
										{
											item.answer
										}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</motion.section>
		</main>
	)
}