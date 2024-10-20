import { motion } from "framer-motion";
import GradualSpacing from "@/components/ui/gradual-spacing";
import joinusImage from "../assets/images/mainpage.jpg";
import { Link } from "react-router-dom";

const JoinUs = () => {
    return (
        <div className="font-sans antialiased pt-24 flex flex-col gap-10">
            <motion.section
                className="bg-gradient-to-r from-gray-950 to-indigo-950 text-white p-6 rounded-lg"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            >
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="md:w-1/2 max-w-screen-md space-y-6 mr-2">
                        <GradualSpacing
                            className="font-display text-left font-bold -tracking-widest text-white dark:text-white md:text-5xl md:leading-[10rem]"
                            text="Join Bootstrap Today!"
                        />
                        <p className="text-sm sm:text-lg font-light leading-relaxed w-full sm:w-[80%] text-center mx-auto">
                            Are you passionate about technology, innovation, and collaboration?
                            Do you want to be part of exciting events and grow both professionally and personally?
                            Bootstrap, an organization at Lovely Professional University, is the perfect platform for students to enhance their skills, network with peers, and contribute to a thriving community. There's a place for everyone—whether you're into coding, event management, design, or simply exploring opportunities!
                        </p>
                        <Link to="#joinForm" className="bg-white flex items-center mx-auto justify-center w-full sm:w-[80%] text-indigo-900 hover:bg-indigo-50 transition-colors px-6 py-3 rounded-full font-semibold shadow-md">
                            Join Us Now!
                        </Link>
                    </div>
                    <div className="md:w-1/2 w-full flex items-center justify-center">
                        <img src={joinusImage} alt="Join Bootstrap" className="w-full object-cover rounded-lg shadow-lg" />
                    </div>
                </div>
            </motion.section>
            <motion.section
                className="bg-white py-16 w-full rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            >
                <div className="mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8 text-gray-800">Why Join Bootstrap?</h2>
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="md:w-1/3 p-6">
                            <h3 className="text-xl font-semibold text-indigo-900 mb-4">Hands-on Experience</h3>
                            <p className="text-gray-600">
                                Participate in organizing and hosting both technical and non-technical events that impact the LPU community.
                            </p>
                        </div>
                        <div className="md:w-1/3 p-6">
                            <h3 className="text-xl font-semibold text-indigo-900 mb-4">Skill Development</h3>
                            <p className="text-gray-600">
                                Gain valuable experience in web development, event management, content creation, and leadership.
                            </p>
                        </div>
                        <div className="md:w-1/3 p-6">
                            <h3 className="text-xl font-semibold text-indigo-900 mb-4">Networking</h3>
                            <p className="text-gray-600">
                                Connect with professionals, alumni, and students from various fields and expand your network.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>
            <motion.section
                className="bg-gray-50 py-16 w-full rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            >
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-8 text-gray-800">Opportunities Available</h2>
                    <div className="flex flex-col md:flex-row justify-evenly ">
                        <div className="max-w-7xl text-left p-6">
                            <h3 className="text-2xl font-semibold mb-4 text-indigo-900">Technical Team</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Web Development</li>
                                <li>Designing</li>
                                <li>Technical Event Coordinators</li>
                            </ul>
                        </div>
                        <div className="max-w-7xl text-left p-6 ">
                            <h3 className="text-2xl font-semibold mb-4 text-indigo-900">Non-Technical Team</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Event Planning and Management</li>
                                <li>Design and Media</li>
                                <li>Public Relations and Outreach</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section
                className="bg-white py-16 w-full rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            >
                <div className="mx-auto text-center text-black">
                    <h2 className="text-4xl font-bold mb-8 text-gray-800">Ready to Join?</h2>
                    <p className="text-lg text-gray-600 mb-6 p-4">
                        Fill out the form below, and we’ll get in touch with more details on how you can get involved!
                    </p>
                    <div id="joinForm" className="max-w-screen-md mx-auto bg-gray-100 p-10 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Join Bootstrap</h3>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-left font-medium mb-2">Name</label>
                                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter your name" />
                            </div>
                            <div>
                                <label className="block text-left font-medium mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter your email" />
                            </div>
                            <div>
                                <label className="block text-left font-medium mb-2">Select Team</label>
                                <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                    <option value="">Select your team</option>
                                    <option value="technical">Technical Team</option>
                                    <option value="non-technical">Non-Technical Team</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-left font-medium mb-2">Message</label>
                                <textarea className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600" rows={4} placeholder="Tell us why you want to join"></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-md shadow-md hover:bg-indigo-800 transition-colors">
                                    Submit Application
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </motion.section>
        </div>

    )
}

export default JoinUs;