import React, { useState } from "react";
import { Linkedin, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    return (
        <motion.div 
            className="flex flex-col md:flex-row justify-between px-16 py-32"
            initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        >
            <div className="md:w-2/5 md:mb-0 mr-10 text-black dark:text-white">
                <h3 className="text-3xl font-semibold mb-4">Contact Us</h3>
                <p className="mb-6">
                    Fill out the form and our team will reach out to you within 1-2 business days.
                </p>
                <p className="mb-6">Click the button below to schedule a meeting with us.</p>
                <button className="bg-purple-700 rounded-lg text-white py-3 px-20 mb-8 hover:bg-indigo-800 transition-colors">
                    Talk with us
                </button>
                <hr />
                <div className="mt-6">
                    <h4 className="font-semibold text-lg mb-2">Email</h4>
                    <p className="">bootstraplpu@gmail.com</p>
                </div>
                <hr className="my-6" />
                <div>
                    <h4 className="font-semibold text-lg mb-4">Social</h4>
                    <div className="flex space-x-6">
                        <Link to="#" className="text-gray-500 hover:text-indigo-800 transition-colors">
                            <Linkedin />
                        </Link>
                        <Link to="#" className="text-gray-500 hover:text-indigo-800 transition-colors">
                            <Instagram />
                        </Link>
                        <Link to="#" className="text-gray-500 hover:text-indigo-800 transition-colors">
                            <Twitter />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="md:w-3/5 bg-gray-100 p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full md:w-1/2 p-4 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full md:w-1/2 p-4 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400"
                        />
                    </div>

                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject (optional)"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-4 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400"
                    />

                    <textarea
                        name="message"
                        placeholder="Enter Your Message..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full p-4 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 h-32"
                    />

                    <button
                        type="submit"
                        className="bg-purple-700 rounded-lg text-white py-3 px-10  hover:bg-indogo-600 transition-colors"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </motion.div>
    );
};

export default ContactUs;
