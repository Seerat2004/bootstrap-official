import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CalendarCheck, Mail, MapPin, Users } from "lucide-react";
import mainPageImage from "../assets/images/mainpage.jpg"

function HomePage() {
	return (
		<main className="flex-1">
			<section id="hero" className="container mx-auto py-12 px-4 md:py-24">
				<div className="flex flex-col md:flex-row justify-between items-center gap-8">
					<div className="max-w-md">
						<h1 className="text-4xl font-bold mb-4">Show Your Passion for Innovation and Events</h1>
						<p className="text-lg text-muted-foreground mb-6">
							Join us at Bootstarp for engaging events, fostering innovation, and building a vibrant community at Lovely Professional University.
						</p>
						<Button size="lg">Register Now</Button>
					</div>
					<div className="w-full md:w-1/2">
						<img
							src={mainPageImage}
							alt="Students collaborating"
							width={600}
							height={400}
							className="rounded-lg object-cover"
						/>
					</div>
				</div>
			</section>

			<section id="about" className="bg-muted py-12 px-4 md:py-24">
				<div className="container mx-auto">
					<h2 className="text-3xl font-bold mb-8 text-center">Welcome to Bootstarp at LPU</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
						<div>
							<p className="text-lg mb-6">
								Bootstarp is dedicated to fostering innovation and collaboration through a series of technical and non-technical events at Lovely Professional University. Join us to broaden your horizons, engage in events, and grow.
							</p>
							<Button variant="outline">Learn More</Button>
						</div>
						<div className="grid grid-cols-2 gap-4">
							<Card>
								<CardHeader>
									<CardTitle>50+</CardTitle>
								</CardHeader>
								<CardContent>Events Organized</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>1000+</CardTitle>
								</CardHeader>
								<CardContent>Active Members</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>20+</CardTitle>
								</CardHeader>
								<CardContent>Industry Partners</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>5</CardTitle>
								</CardHeader>
								<CardContent>Years of Excellence</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			<section id="events" className="container mx-auto py-12 px-4 md:py-24">
				<h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{[1, 2, 3].map((i) => (
						<Card key={i}>
							<CardHeader>
								<CardTitle>Tech Symposium {i}</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="mb-2">Join us for an exciting day of technology talks and networking.</p>
								<div className="flex items-center text-sm text-muted-foreground">
									<CalendarCheck className="mr-2 h-4 w-4" />
									<span>May {10 + i}, 2024</span>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
				<div className="text-center mt-8">
					<Button variant="outline">View All Events</Button>
				</div>
			</section>

			<section id="community" className="bg-muted py-12 px-4 md:py-24">
				<div className="container mx-auto">
					<h2 className="text-3xl font-bold mb-8 text-center">Join Our Community</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
						<div>
							<p className="text-lg mb-6">
								Become part of a vibrant community of innovators, creators, and leaders. Connect with like-minded individuals, share ideas, and grow together.
							</p>
							<Button>Join Now</Button>
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<Card>
								<CardHeader>
									<Users className="h-6 w-6" />
								</CardHeader>
								<CardContent>
									<h3 className="font-semibold">Networking</h3>
									<p className="text-sm text-muted-foreground">Connect with peers and industry professionals</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CalendarCheck className="h-6 w-6" />
								</CardHeader>
								<CardContent>
									<h3 className="font-semibold">Regular Meetups</h3>
									<p className="text-sm text-muted-foreground">Attend weekly sessions and workshops</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<Mail className="h-6 w-6" />
								</CardHeader>
								<CardContent>
									<h3 className="font-semibold">Newsletter</h3>
									<p className="text-sm text-muted-foreground">Stay updated with our latest news and events</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<MapPin className="h-6 w-6" />
								</CardHeader>
								<CardContent>
									<h3 className="font-semibold">LPU Campus</h3>
									<p className="text-sm text-muted-foreground">Events held at Lovely Professional University</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>
			{/* <section id="contact" className="container mx-auto py-12 px-4 md:py-24">
				<h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
				<div className="max-w-md mx-auto">
					<form className="space-y-4">
						<Input type="text" placeholder="Your Name" />
						<Input type="email" placeholder="Your Email" />
						<Input type="text" placeholder="Subject" />
						<textarea
							className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
							placeholder="Your Message"
						></textarea>
						<Button type="submit" className="w-full">Send Message</Button>
					</form>
				</div>
			</section> */}
		</main>
	);
};

export default HomePage;
