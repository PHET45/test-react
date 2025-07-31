import React from 'react';
import { Home, User, Briefcase, Mail, MessageCircle } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, color: 'bg-orange-500' },
    { icon: User, color: 'bg-pink-500' },
    { icon: Briefcase, color: 'bg-purple-500' },
    { icon: Mail, color: 'bg-green-500' },
    { icon: MessageCircle, color: 'bg-blue-500' },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-16 bg-gradient-to-b from-orange-500 to-orange-600 flex flex-col items-center py-6 z-10">
      <div className="w-8 h-8 bg-white rounded-lg mb-8 flex items-center justify-center">
        <span className="text-orange-500 font-bold text-lg">M</span>
      </div>
      
      <nav className="flex flex-col gap-4">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-lg`}
          >
            <item.icon size={18} />
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;