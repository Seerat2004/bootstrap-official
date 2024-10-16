import React from 'react';
import { CalendarDays, MapPin, ArrowRight } from 'lucide-react';

const Events = () => {
  interface Event {
    id: number;
    title: string;
    date: string;
    location: string;
    description: string;
    imageUrl: string;
  }

  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: 'Tech Hackathon 2024',
      date: 'March 15-17, 2024',
      location: 'LPU Campus, Block 32',
      description: 'Join us for a 48-hour coding marathon to solve real-world problems!',
      imageUrl: '/images/hackathon.jpg', // Replace with actual image
    },
    {
      id: 2,
      title: 'AI Workshop Series',
      date: 'April 5-7, 2024',
      location: 'Online (Zoom)',
      description: 'Learn about the latest advancements in AI from industry experts.',
      imageUrl: '/images/ai-workshop.jpg', // Replace with actual image
    },
    {
      id: 3,
      title: 'BootStrap Annual Tech Fest',
      date: 'May 20-22, 2024',
      location: 'LPU Auditorium',
      description: 'Our flagship event featuring tech talks, workshops, and networking opportunities.',
      imageUrl: '/images/tech-fest.jpg', // Replace with actual image
    },
  ];

  const pastEvents: Event[] = [
    {
      id: 4,
      title: 'Web Development Bootcamp',
      date: 'November 10-12, 2023',
      location: 'LPU Campus, Block 28',
      description: 'A hands-on bootcamp covering modern web development technologies.',
      imageUrl: '/images/web-dev-bootcamp.jpg', // Replace with actual image
    },
    {
      id: 5,
      title: 'Cybersecurity Symposium',
      date: 'January 25, 2024',
      location: 'LPU Conference Hall',
      description: 'Expert talks on the latest trends and challenges in cybersecurity.',
      imageUrl: '/images/cybersecurity.jpg', // Replace with actual image
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 mt-20">
      <header className="bg-indigo-950 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Join BootStrap LPU for cutting-edge technical workshops, hackathons, and inspiring talks.
            We bring together students, professionals, and industry leaders to foster innovation and learning.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 text-indigo-950">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-56 object-cover"
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
                  <button className="bg-indigo-950 text-white px-4 py-2 rounded-md hover:bg-indigo-900 transition-colors duration-300 flex items-center group">
                    Register Now
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-8 text-indigo-950">Previous Events</h2>
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
                  className="w-full md:w-48 h-48 object-cover"
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
        </section>
      </main>
    </div>
  );
};

export default Events;
