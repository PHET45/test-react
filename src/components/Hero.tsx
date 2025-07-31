import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="mb-6">
            <span className="text-gray-500 text-sm">Hi!</span>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              I'm Mohammad Reza.
            </h1>
            <h2 className="text-2xl text-gray-700 mb-6">
              a Frontend developer.
            </h2>
          </div>
          
          <p className="text-gray-600 mb-4 max-w-md">
            Frontend developer based in Tehran, Iran.
          </p>
          <p className="text-gray-600 mb-6 max-w-md">
            I am working with a focus and beautiful problem solving to develop creative and amazing user experience.
          </p>
          
          <div className="flex gap-3 mb-6">
            <Facebook className="w-8 h-8 p-2 bg-blue-500 text-white rounded-full hover:scale-110 transition-transform cursor-pointer" />
            <Instagram className="w-8 h-8 p-2 bg-pink-500 text-white rounded-full hover:scale-110 transition-transform cursor-pointer" />
            <Twitter className="w-8 h-8 p-2 bg-blue-400 text-white rounded-full hover:scale-110 transition-transform cursor-pointer" />
            <Linkedin className="w-8 h-8 p-2 bg-blue-700 text-white rounded-full hover:scale-110 transition-transform cursor-pointer" />
          </div>
          
          <div className="flex gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors">
              Hire me!
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
              Download CV
            </button>
          </div>
        </div>
        
        <div className="relative ml-8">
          <div className="w-64 h-64 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full flex items-center justify-center">
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
              alt="Mohammad Reza"
              className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full"></div>
          <div className="absolute top-1/4 -left-4 w-4 h-4 bg-pink-500 rounded-full"></div>
          <div className="absolute bottom-1/4 -right-2 w-6 h-6 bg-blue-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;