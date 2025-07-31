import React from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Web Development Project',
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Web Design'
    },
    {
      id: 2,
      title: 'Mobile App Design',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'UI/UX'
    },
    {
      id: 3,
      title: 'Brand Identity',
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Branding'
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      image: 'https://images.pexels.com/photos/4792395/pexels-photo-4792395.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Development'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Web Design'
    },
    {
      id: 6,
      title: 'Dashboard Design',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'UI/UX'
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Portfolio</h2>
        <button className="text-orange-500 hover:text-orange-600 font-medium flex items-center gap-2">
          See More
          <ExternalLink size={16} />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4">
                <span className="text-orange-500 text-sm font-medium">
                  {project.category}
                </span>
                <h3 className="text-gray-800 font-semibold mt-1">
                  {project.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;