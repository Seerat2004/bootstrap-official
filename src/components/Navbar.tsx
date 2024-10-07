import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Menu, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/aboutus' },
    { name: 'Events', href: '/events' },
    { name: 'Join Us', href: '/joinus' },
    { name: 'Contact', href: '/contactus' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activePath, setActivePath] = useState('/');
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavigation = (href: string) => {
        setActivePath(href)
        navigate(href);
    }

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a href="/" className="flex items-center space-x-2" onClick={() => { handleNavigation('/'); }}>
                        <Star className="h-6 w-6 text-blue-600" />
                        <span className="font-bold text-xl text-blue-900">ClubConnect</span>
                    </a>

                    {/* Desktop menu */}
                    <div className="hidden md:flex space-x-4">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => { handleNavigation(item.href); }}
                                className={`text-sm font-medium transition-colors hover:text-blue-600 ${activePath === item.href ? 'text-blue-600' : 'text-blue-900'
                                    }`}
                            >
                                {item.name}
                            </a>
                        ))}
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                            Join Now
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                            className="text-blue-900 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 rounded-md"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white border-t border-gray-200"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => { e.preventDefault(); handleNavigation(item.href); }}
                                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${activePath === item.href
                                            ? 'bg-blue-100 text-blue-600'
                                            : 'text-blue-900 hover:bg-blue-50 hover:text-blue-600'
                                        }`}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="mt-4 px-3">
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-base font-medium transition-colors">
                                    Join Now
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}